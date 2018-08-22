import React, {Component} from 'react';
import './canvas.css';
import openSocket from 'socket.io-client';


const socket = openSocket('http://localhost:8000');
class Canvas extends Component {
    constructor(props) {
        super(props);
        this.display = React.createRef();
        this.state = {
            click: false,
            move: false,
            pos: {
                x: 0,
                y: 0,
            },
            color: 'black',
            pos_prev: false,
            data: {}
          }
        this.handleData = this.handleData.bind(this);
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');

        // draw line received from server
        socket.on('draw_line', function (data) {
            let line = data.line.position;
            let color = data.line.color;
            context.beginPath();
            context.moveTo(line[0].x * window.innerWidth, line[0].y * window.innerHeight);
            context.lineTo(line[1].x * window.innerWidth, line[1].y * window.innerHeight);
            context.strokeStyle = color;
            context.lineWidth = 2;
            context.stroke();
        }); 
    }

    handleData(data) {
        this.setState({
            data: data
        })
    }
            
    colorChange(e) {
        this.setState({
            color: e.target.className.split(' ')[1]
        });
    }

    mouseDown() {
        this.setState({
            click: true
        });
    }

    mouseUp() {
        this.setState({
            click: false
        });
    }

    mouseMove(e) {
    // normalize mouse position to range 0.0 - 1.0
        this.setState({
            pos: {
                x: e.clientX / e.target.width,
                y: e.clientY / e.target.height,
                },
            move: true
        });
        // check if the user is drawing
        if (this.state.click && this.state.pos_prev) {
            // send line to to the server
            socket.emit('draw_line', {
                line: {
                    position: [this.state.pos, this.state.pos_prev],
                    color: this.state.color
                }
            });
            this.setState({
                move: false
            });
        }
        this.setState({
            pos_prev: {
                x: this.state.pos.x,
                y: this.state.pos.y
            }
        });       
    }

    render() { 
        return (
            <div>
                <div className="row d-flex justify-content-center">
                    <div className="col-11">
                        <h3>Canvas</h3>
                        <canvas className="whiteboard border" 
                                onMouseDown={this.mouseDown.bind(this)} 
                                onMouseUp={this.mouseUp.bind(this)} 
                                onMouseMove={this.mouseMove.bind(this)} 
                                ref='canvas'>
                        {/* socketDrawLine={this.socketDrawLine.bind(this)}*/}
                        </canvas>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-11">
                        <div className="colors">
                        <div className="color black" onClick={(e)=>this.colorChange(e)}></div>
                        <div className="color red" onClick={(e)=>this.colorChange(e)}></div>
                        <div className="color green" onClick={(e)=>this.colorChange(e)}></div>
                        <div className="color blue" onClick={(e)=>this.colorChange(e)}></div>
                        <div className="color yellow" onClick={(e)=>this.colorChange(e)}></div>
                    </div>
                </div>
                <script src="/socket.io/socket.io.js"></script>
                {/* {this.mainLoop()} */}
                {/* {(e)=>this.socketDrawLine(e)} */}  
            </div>
        </div>
        );
    }
}
 
export default Canvas;