import React, {Component} from 'react';
import './canvas.css';
import openSocket from 'socket.io-client';


const socket = openSocket('http://localhost:8000');
class Canvas extends Component {
    constructor(props) {
        super(props);
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
            context.moveTo(line[0].x * canvas.width, line[0].y * canvas.height);
            context.lineTo(line[1].x * canvas.width, line[1].y * canvas.height);
            context.strokeStyle = color;
            context.lineWidth = 1;
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
        console.log('w:' + e.target.width, 'mp:'+ e.clientX);
        console.log('h:' + e.target.height, 'mp:'+ e.clientY);
        const canvas = this.refs.canvas;
    // normalize mouse position to range 0.0 - 1.0
        this.setState({
            pos: {
                x: (e.pageX - canvas.offsetLeft) / canvas.width,
                y: (e.pageY - canvas.offsetTop) / canvas.height,
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
        <div className="p-0">
            <h3>Canvas</h3>
            <canvas className="whiteboard border p-0" height="600" width="800" 
                    onMouseDown={this.mouseDown.bind(this)} 
                    onMouseUp={this.mouseUp.bind(this)} 
                    onMouseMove={this.mouseMove.bind(this)} 
                    ref='canvas'>
            </canvas>

            <div className="colors">
            <div className="color black" onClick={(e)=>this.colorChange(e)}></div>
            <div className="color red" onClick={(e)=>this.colorChange(e)}></div>
            <div className="color green" onClick={(e)=>this.colorChange(e)}></div>
            <div className="color blue" onClick={(e)=>this.colorChange(e)}></div>
            <div className="color yellow" onClick={(e)=>this.colorChange(e)}></div>
            <script src="/socket.io/socket.io.js"></script>
            </div>
        </div>
        );
    }

    componentWillUpdate() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');

        // draw line received from server
        socket.on('draw_line', function (data) {
            let line = data.line.position;
            let color = data.line.color;
            context.beginPath();
            context.moveTo(line[0].x * canvas.width, line[0].y * canvas.height);
            context.lineTo(line[1].x * canvas.width, line[1].y * canvas.height);
            context.strokeStyle = color;
            context.lineWidth = 1;
            context.stroke();
        }); 
    }
}
 
export default Canvas;