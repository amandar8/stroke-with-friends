class Rectangle {
  constructor(props) {
    this.x = props.x;
    this.y = props.y;
    this.h = props.h;
    this.w = props.w;
    this.fill = props.fill;
  }
}

const svgContainer = document.getElementById("svg-container");
const height = svgContainer.clientHeight;
const width = svgContainer.clientWidth;

const canvas = d3.select("#welcome-canvas");
canvas.style("width", width);
canvas.style("height", height);

function newRectangle() {
  const colors = ['violet', 'red', 'blue', 'green', 'orange', 'brown', 'yellow'];
  const rectProps = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    h: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100),
    fill: colors[Math.floor(Math.random() * 7)]
  };

  const addRect = new Rectangle(rectProps);

  canvas.append("rect")
        .attr("x", addRect.x)             
        .attr("y", addRect.y)
        .attr("width", addRect.w)
        .attr("height", addRect.h) 
        .attr("fill", addRect.fill)
}

setInterval(newRectangle, 500);
