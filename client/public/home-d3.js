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
    height: Math.floor(Math.random() * 100),
    width: Math.floor(Math.random() * 100),
    fill: colors[Math.floor(Math.random() * 7)],
    opacity: 1
  };
  rectList.push(rectProps);
}

function renderRectList() {
  canvas.selectAll('*').remove();
  if (rectList.length > 40) {
    rectList.shift();
  }

  let rectangles = canvas.selectAll('rect')
  .data(rectList)
  .enter()
  .append('rect');

  let rectAttrs = rectangles
  .attr("x", function(d) {return d.x})
  .attr("y", function(d) {return d.y})
  .attr("height", function(d) {return d.height})
  .attr("width", function(d) {return d.width})
  .style("fill", function(d) {return d.fill})
  .style("opacity", function(d) {return d.opacity})

}

function fader() {
  rectList.forEach(rect => {
    rect.opacity -= 0.05;
  });
}

setInterval(newRectangle, 100);
setInterval(renderRectList, 100);
setInterval(fader, 100);

