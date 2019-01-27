//GLOBAL
let gameStop = false;
let lastPressed = "";
var x, y;
var count = 0;

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

  var canvas2 = document.getElementById("Canvas2");
  var ctx = canvas2.getContext("2d"); //ctx = context
  var cwidth2 = 500;
  var cheight2 = 500;
  var cellD = cwidth2/3;

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

  lastPressed = "O";

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
}
function getMousePosition(evt) {
  var rect = Canvas2.getBoundingClientRect();
    x = Math.round(evt.clientX - rect.left);
    y = Math.round(evt.clientY - rect.top);
}

document.onmousedown = function() {
  //call function here
  allPlacingCode(x, y);
}

function allPlacingCode(x, y) {
    var c, r;

    c = Math.floor(x/cellD);
    r = Math.floor(y/cellD);

    console.log(x, y, cellD);
    console.log(c, r);
    var row = grid[r]; // getting the row of the grid
    if (c>=0 && c<=2 && r>=0 && r<=2 && row[c] == "" && gameStop == false) {
        if (lastPressed == "X") {
          placing(c, r, "O");
          lastPressed = "O";
          row[c] = "O"; // getting the value of the cell, column
    } else {
      placing(c, r, "X");
      lastPressed = "X";
      row[c] = "X";
    }
  }
}

function placing(c, r, symbol) {
  var ctx = canvas2.getContext("2d"); //ctx = context
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "120px Arial";
  ctx.fillText(symbol, c*cellD + cellD/4, (r+1)*cellD - cellD/4);
  ThreeInRow();
}

function ThreeInRow() {
  let check3InRowX = false;
  let check3InRowO = false;
  let winX = false;
  let winO = false;
  var xWin = 0;
  var oWin = 0;

  check3inRow();
}

function check3inRow() {
  if (checkRows("X")/* || checkColumn("X") || checkDiagonal("X")*/) {
    gameStop = true;
    xWin += 1;
    printWinScore("X");
  } else if (checkRows("O")/* || checkColumn("O") || checkDiagonal("O")*/) {
    gameStop = true;
    oWin += 1;
    printWinScore("O");
  } else if (count == 9) {
    gameStop = true;
  }
}
function printWinScore(winner) {
  if (winner == "X") {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Arial";
    ctx.fillText("X: " + xWin, 0, 50);
    ctx.fillText("O: " + oWin, 100, 50);
  } else if (winner == "O") {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Arial";
    ctx.fillText("X: " + xWin, 0, 50);
    ctx.fillText("O: " + oWin, 100, 50);
  }
}

  function checkRows(xORo) {
    var win = true;
    for (let r = 0;r < 3; r++){
      var row = grid[r]; // row = grid[r], row = whichever row specified in brackets (1, 2, 3)
      win = true;
      for (let c = 0; c < 3; c++){
console.log(row[c]);
        if (row[c] != xORo) {
          win = false;
          return win;
        }
      }
    }
    console.log("X win");
    return win;
}
