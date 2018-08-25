import React, {Component} from 'react';
import './canvas.css';
import openSocket from 'socket.io-client';
import {ChromePicker} from 'react-color'

const socket = openSocket('localhost:8000');
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
            brushSize: 10,
            data: {},
            canvas: [],
            isAdmin: this.props.admin || false,
            down: false,
          }
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.brushSize = this.brushSize.bind(this);
    }

    clearCanvas(event) {
        event.preventDefault();
        const ctx = document.getElementById('canvas').getContext('2d');
        const emptyArray = new Uint8ClampedArray(480000 * 4);
        const emptyData = new ImageData(emptyArray, 800, 600);
        ctx.putImageData(emptyData, 0, 0);
        socket.emit('draw', {
            delete: true
        });
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        socket.on('draw', function (dataArray) {
            dataArray.data.forEach(data => {
                // switch (brushShape)
                ctx.fillRect(data.data.x - data.data.brushSize/2, data.data.y - data.data.brushSize/2, data.data.brushSize, data.data.brushSize);
                ctx.fillStyle = data.data.brushColor;
            });
        }); 
    }

    mouseDown(e) {
        e.preventDefault();
        this.setState({
            down: true
        })
    }

    mouseMove(e) {
        e.preventDefault();
        if (this.state.down) {
            const step = {}
            const canvas = document.getElementById('canvas');
            step.x = e.pageX - canvas.offsetLeft;
            step.y = e.pageY - canvas.offsetTop;
            step.brushSize = this.state.brushSize;
            step.brushColor = 'black';
            //step.brushShape = this.state.brushShape;
            socket.emit('draw', {
                data: step,
            });
        }
    }

    mouseUp(e) {
        e.preventDefault();
        this.setState({
            down: false,
        })
    }

    brushSize(size) {
        this.setState({
            brushSize: size,
        })
    }

    render() { 
        return (
        <div className="row pt-0">
            <div className="col-8">
                <h3>Canvas</h3>
                <a href="/" onClick={(event) => this.props.showWelcome(event)}>Return Home</a><br />
                <canvas className="whiteboard border p-0" height="600" width="800" 
                        onMouseDown={this.mouseDown}
                        onMouseUp={this.mouseUp}
                        onMouseMove={this.mouseMove} 
                        onMouseLeave={this.mouseUp}
                        ref='canvas'
                        id='canvas'>
                </canvas>
            </div>
            <div className="col-3 mt-5 colors">
                <div className='row'>
                  <div className="col-12">
                  <h5>Color Selector</h5>
                  <ChromePicker></ChromePicker>
                  </div>
                </div>
                <div className="row mb-4 mt-4">
                    <div className="col-12">
                        <h5>Brush Size</h5>
                        <div className="brushSize one rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(1)}>1</div>
                        <div className="brushSize five rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(5)}>5</div>
                        <div className="brushSize ten rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(10)}>10</div>
                        <div className="brushSize ten rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(50)}>50</div>
                        {this.state.isAdmin && <button type="button" className="btn btn-sm btn-default" onClick={(event) => this.clearCanvas(event)}>Clear Canvas</button>}
                    </div>
                </div>
                <script src="/socket.io/socket.io.js"></script>
            </div>
        </div>
        );
    }

    componentWillUpdate() {

    }
}
 
export default Canvas;