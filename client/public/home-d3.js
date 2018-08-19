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

const rectList = [];

function newRectangle() {
  const colors = ['violet', 'red', 'blue', 'green', 'orange', 'brown', 'yellow'];
  const rectProps = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    h: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100),
    fill: colors[Math.floor(Math.random() * 7)]
  };
  rectList.push(new Rectangle(rectProps));
}

function renderRectList() {
  canvas.selectAll('*').remove();
  if (rectList.length > 20) {
    rectList.shift();
  }
  rectList.forEach(rect => {
    canvas.append('rect')
      .attr("x", rect.x)
      .attr("y", rect.y)
      .attr("height", rect.h)
      .attr("width", rect.w)
      .attr("fill", rect.fill)
  });
}

setInterval(newRectangle, 100);

setInterval(renderRectList, 100);
