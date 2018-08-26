import React, {Component} from 'react';
import './canvas.css';
import openSocket from 'socket.io-client';
import {ChromePicker} from 'react-color'

const socket = openSocket('localhost:8000');
class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#fff',
            brushColor: 'black',
            brushSize: 10,
            canvas: [],
            isAdmin: this.props.admin || false,
            down: false,
            brushShape: 'arc',
            lastRetrievalIndex: 0,
          }
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.brushSize = this.brushSize.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
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
                switch (data.data.brushShape) {
                    case 'rect': 
                        ctx.fillRect(data.data.x - data.data.brushSize/2, data.data.y - data.data.brushSize/2, data.data.brushSize, data.data.brushSize);
                        ctx.fillStyle = data.data.brushColor;
                    break;
                    case 'arc':
                        ctx.beginPath();
                        ctx.arc(data.data.x - data.data.brushSize/2, data.data.y - data.data.brushSize/2, data.data.brushSize, 0, Math.PI * 2, false);
                        ctx.fillStyle = data.data.brushColor;
                        ctx.fill();
                    break;
                    default: break;
                }
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
            const index = this.state.lastRetrievalIndex;
            const step = {}
            const canvas = document.getElementById('canvas');
            step.x = e.pageX - canvas.offsetLeft;
            step.y = e.pageY - canvas.offsetTop;
            step.brushSize = this.state.brushSize;
            step.brushColor = this.state.brushColor;
            step.brushShape = this.state.brushShape;
            console.log(this.state.lastRetrievalIndex);
            socket.emit('draw', {
                data: step,
                index: index,
            });
            this.setState({
                lastRetrievalIndex: this.state.lastRetrievalIndex + 1,
            }) 
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

    brushShape(shape) {
        this.setState({
            brushShape: shape
        })
    }

    handleColorChange(color, event) {
        this.setState({
            brushColor: color.hex
        })
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

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
                  <ChromePicker onChange={ this.handleColorChange } color={ this.state.background } onChangeComplete={ this.handleChangeComplete }></ChromePicker>
                  </div>
                </div>
                <div className="row mb-4 mt-4">
                    <div className="col-12">
                        <h5>Brush Size</h5>
                        <div className="brushSize one rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(1)}>1</div>
                        <div className="brushSize five rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(5)}>5</div>
                        <div className="brushSize ten rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(10)}>10</div>
                        <div className="brushSize ten rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushSize(50)}>50</div>
                    </div>
                    <div className="col-12">
                    <h5>Brush Shape</h5>
                    <div className="brushSize ten rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushShape('rect')}>Square</div>
                        <div className="brushSize ten rounded mr-3 cursor-pointer text-center border" onClick={() => this.brushShape('arc')}>Circle</div>
                    </div>
                    {this.state.isAdmin && <button type="button" className="btn btn-sm btn-default" onClick={(event) => this.clearCanvas(event)}>Clear Canvas</button>}
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