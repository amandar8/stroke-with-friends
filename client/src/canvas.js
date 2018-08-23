import React, {Component} from 'react';
import './canvas.css';
import openSocket from 'socket.io-client';
import {ChromePicker} from 'react-color';

const socket = openSocket(window.location.hostname);
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
            brushColor: {r:0, g: 0, b: 0, a: 255},
            pos_prev: false,
            brushSize: 1,
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
            context.strokeStyle = `rgba(${data.line.color.r},${data.line.color.g},${data.line.color.b},${data.line.color.a})`;
            context.lineWidth = data.line.brushSize;
            context.stroke();
        }); 
    }

    handleData(data) {
        this.setState({
            data: data
        })
    }
        
    handleColorChange(color) {
        this.setState({brushColor: color.rgb});
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
        // console.log('w:' + e.target.width, 'mp:'+ e.clientX);
        // console.log('h:' + e.target.height, 'mp:'+ e.clientY);
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
                    color: this.state.color,
                    brushSize: this.state.brushSize,
                    color: {
                        r: this.state.brushColor.r,
                        g: this.state.brushColor.g,
                        b: this.state.brushColor.b,
                        a: this.state.brushColor.a
                    }
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
    brushSizeChange(e, size) {
        this.setState({
            brushSize: size
        });
        console.log(this.state.brushSize);
    }

    render() { 
        return (
        <div className="p-0 d-flex align-items-end">
            <div>
                <h3 className="">Canvas</h3>
                <canvas className="whiteboard border p-0" height="600" width="800" 
                        onMouseDown={this.mouseDown.bind(this)} 
                        onMouseUp={this.mouseUp.bind(this)} 
                        onMouseMove={this.mouseMove.bind(this)} 
                        ref='canvas'>
                </canvas>
            </div>

            <div className="colors">
            <ChromePicker className="" color={this.state.brushColor} onChangeComplete={this.handleColorChange.bind(this)}></ChromePicker>
            <div className="brushSize" onClick={(e)=>this.brushSizeChange(e, 1)}>1</div>
            <div className="brushSize" onClick={(e)=>this.brushSizeChange(e, 5)}>5</div>
            <div className="brushSize" onClick={(e)=>this.brushSizeChange(e, 10)}>10</div>

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
            context.strokeStyle = `rgba(${data.line.color.r},${data.line.color.g},${data.line.color.b},${data.line.color.a})`;
            context.lineWidth = data.brushSize;
            context.stroke();
        }); 
    }
}
 
export default Canvas;