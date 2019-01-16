startup();
function startup() {
  var canvas = document.getElementById("Canvas1");
  var ctx = canvas.getContext("2d"); //ctx = context
  var cwidth = 200;
  var cheight = 100;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 200, 100);
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Scoreboard", 0, 20); // text, x, y
  ctx.fillText("X: ", 0, 50);
  ctx.fillText("O: ", 100, 50);

  var canvas = document.getElementById("Canvas2");
  var ctx = canvas.getContext("2d"); //ctx = context
  var cwidth2 = 500;
  var cheight2 = 500;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);
  ctx.stroke();

  // VERTICAL LINE 1
  ctx.strokeStyle = 'white';
  ctx.moveTo(cwidth2/3, 0);
  ctx.lineTo(cwidth2/3, cheight2);
  ctx.lineWidth = 7;
  ctx.stroke();

  // VERTICAL LINE 2
  ctx.moveTo(cwidth2*2/3, 0);
  ctx.lineTo(cwidth2*2/3, cheight2);
  ctx.stroke();

  // HORIZONTAL LINE 1
  ctx.moveTo(0, cheight2/3);
  ctx.lineTo(cwidth2, cheight2/3);
  ctx.stroke();

  // HORIZONTAL LINE 2
  ctx.moveTo(0, cheight2*2/3);
  ctx.lineTo(cwidth2, cheight2*2/3);
  ctx.stroke();
}
var row1 = ["","",""]; // creates array of first row
var row2 = ["","",""]; // creates array of second row
var row3 = ["","",""]; // creates array of third row

var grid = [row1,row2,row3]; // creates array that groups all three previous arrays, now it became an array of arrays

initializeArray(); // calls function that initializes array

function initializeArray() { // function that initializes array
  for (let r = 0;r < 3; r++){
    var row = grid[r]; // row = grid[r], row = whichever row specified in brackets (1, 2, 3)
    for (let c = 0; c < 3; c++){
      //row[c] = "r" + r.toString() + "c" + c.toString(); // prints out the grid
      //ctx.fillStyle = "#FFFFFF";
      //ctx.font = "20px Arial";
      //ctx.fillText (row[c], 20 + c * 50, 20 + r * 50); // text, x, y
    }
  }
}
document.onmousemove = function(evt) {
  //call function here
  mousePos = getMousePosition(evt);
  console.log(x + "," + y);
}
function getMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.round(evt.clientX - rect.left),
    y: Math.round(evt.clientY - rect.top)
  };
}

document.onmousemove = function(evt) {
  //call function here
}
function allPlacingCode() {
  var c, r;
}
function placing() {

}
