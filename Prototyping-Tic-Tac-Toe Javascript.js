var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //ctx = context
var canvaswidth = canvas.width;
var canvasheight = canvas.height;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);

moveTo(canvaswidth*1/3, 0);
ctx.lineTo(canvaswidth*1/3, canvasheight);
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();
