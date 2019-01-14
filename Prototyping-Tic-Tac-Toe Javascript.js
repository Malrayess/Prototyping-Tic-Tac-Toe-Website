
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
var cwidth = 500;
var cheight = 500;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 500, 500);
ctx.stroke();

// VERTICAL LINE 1
ctx.strokeStyle = 'white';
ctx.moveTo(cwidth/3, 0);
ctx.lineTo(cwidth/3, cheight);
ctx.lineWidth = 7;
ctx.stroke();

// VERTICAL LINE 2
ctx.moveTo(cwidth*2/3, 0);
ctx.lineTo(cwidth*2/3, cheight);
ctx.stroke();

// HORIZONTAL LINE 1
ctx.moveTo(0, cheight/3);
ctx.lineTo(cwidth, cheight/3);
ctx.stroke();

// HORIZONTAL LINE 2
ctx.moveTo(0, cheight*2/3);
ctx.lineTo(cwidth, cheight*2/3);
ctx.stroke();

var grid = [];

function initializeArray(array) { // function that initializes array
  for (let c = 0; c <=2; c++) {
    array.push([]);// creates array
    for (let r = 0; r<=2; r++) {
      array[i].push(""); // puts 0's in array
    }
  }
}



/*
String[][] grid;
Boolean gameStop = false; // boolean to decide if players can play or not, and if someone won or not
Boolean filled = false;

grid = new String[3][3]; // initiates the grid (creates it)
for (var c=0; c<=2; c++) { // 3 columns
  for (var r=0; r<=2; r++) { // 3 rows
    grid[c][r] = ""; // starts off the grid with everything being empty
  }
}
Pfont drawX, drawO;
var[] gamegrid;
function placing(c, r, symbol) {
  ctx.fillStyle = "#FFFFFF";
  drawX = createFont ("TimesNewRomanPS-BoldMT-48", 55);
  textFont(drawX, 250);
  text(symbol, (cwidth/3)/2 + (cwidth/3)*c, cheight*r/3);
}
*/
