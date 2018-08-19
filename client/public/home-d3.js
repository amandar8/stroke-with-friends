const svgContainer = document.getElementById("svg-container");
const height = svgContainer.clientHeight;
const width = svgContainer.clientWidth;

const canvas = d3.select("#welcome-canvas");
canvas.style("width", width);
canvas.style("height", height);

canvas.append("text")
        .attr("x", width/2)             
        .attr("y", height/3)
        .attr("text-anchor", "middle") 
        .style("font-size", "2em") 
        .text("Welcome to Stroke With Friends");



