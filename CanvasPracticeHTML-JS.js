var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //ctx = context
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0,0,150,150);

ctx.fillStyle = "#ff0000";
ctx.fillRect(150, 0, 300, 150);

ctx.fillStyle = "#0000ff";
ctx.fillRect(0, 150, 150, 300);

ctx.fillStyle = "#00ff40";
ctx.fillRect(150, 150, 300, 300);

ctx.moveTo(150, 0);
ctx.lineTo(150, 300);
ctx.stroke();

ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.stroke();

ctx.beginPath();
ctx.arc(75, 75, 50, 0, 2 * Math.PI); //X, Y, size, start angle, end angle
ctx.stroke();

ctx.fillStyle = "#FFFFFF";
ctx.font = "30px Arial";
ctx.fillText("Maher", 180, 80); // text, x, y
ctx.strokeText("Luke", 190, 130);

ctx.strokeStyle = "#FFFFFF";
ctx.rect(25, 175, 100, 100); // x, y, width, height
ctx.stroke();
