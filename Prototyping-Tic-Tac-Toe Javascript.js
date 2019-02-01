//GLOBAL
let gameStop = false;
let filled = false;
let lastPressed = "O";
var x, y;
var count = 0;
var xWin = 0;
var oWin = 0;
let difficulty = 0;
let theme = "Dark";
document.body.style.backgroundColor = "black";

if (theme == "Dark") { // if theme is dark, draw everything as it is in dark, white writing

  var canvas = document.getElementById("Canvas1"); // creates canvas 1, scoreboard
  var ctx = canvas.getContext("2d"); //ctx = context
  var cwidth = 200;
  var cheight = 100;

  ctx.fillStyle = "black"; // fills canvas in black
  ctx.fillRect(0, 0, 200, 100); // coordinates
  ctx.strokeStyle = '#FFFFFF'; // fills border in white
  ctx.strokeRect(0, 0, 200, 100); // coordinates
  ctx.lineWidth = 4; // line width
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF"; // fills in text with white
  ctx.font = "20px Arial"; // size and font
  ctx.fillText("Scoreboard", 10, 20); // text, x, y
  ctx.fillText("X: ", 10, 50); // text, x, y
  ctx.fillText("O: ", 100, 50);// text, x, y

  var canvas2 = document.getElementById("Canvas2"); // creates canvas 2, playing area
  var ctx2 = canvas2.getContext("2d"); //ctx = context
  var cwidth2 = 500;
  var cheight2 = 500;
  var cellD = cwidth2/3;

  ctx2.fillStyle = "black"; // fills canvas in black
  ctx2.fillRect(0, 0, 500, 500); // coordinates
  ctx2.strokeStyle = '#FFFFFF'; // fills border in white
  ctx2.strokeRect(0, 0, 500, 500); // coordinates
  ctx2.lineWidth = 4; // line width
  ctx2.stroke();

  // VERTICAL LINE 1
  ctx2.strokeStyle = 'white'; // fills in line color white
  ctx2.moveTo(cwidth2/3, 0); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2/3, cheight2); // draws from previous ^ to new coordinate
  ctx2.lineWidth = 7; // line width
  ctx2.stroke();

  // VERTICAL LINE 2
  ctx2.moveTo(cwidth2*2/3, 0); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2*2/3, cheight2); // draws from previous ^ to new coordinate
  ctx2.stroke();

  // HORIZONTAL LINE 1
  ctx2.moveTo(0, cheight2/3); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2, cheight2/3); // draws from previous ^ to new coordinate
  ctx2.stroke();

  // HORIZONTAL LINE 2
  ctx2.moveTo(0, cheight2*2/3); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2, cheight2*2/3); // draws from previous ^ to new coordinate
  ctx2.stroke();

  var canvas3 = document.getElementById("Canvas3"); // creates canvas 3, status
  var ctx3 = canvas3.getContext("2d");
  var cwidth3 = 200;
  var cheight3 = 500;

  ctx3.fillStyle = "black"; // fills canvas in black
  ctx3.fillRect(0, 0, 200, 100); // coordinates
  ctx3.strokeStyle = '#FFFFFF'; // fills border in white
  ctx3.strokeRect(0, 0, 200, 100); // coordinate
  ctx3.lineWidth = 4; // line width
  ctx3.stroke();
} else if (theme == "Light") { // if theme is light, draw everything as it is in light, dark writing

  var canvas = document.getElementById("Canvas1"); // creates canvas 1, scoreboard
  var ctx = canvas.getContext("2d"); //ctx = context
  var cwidth = 200;
  var cheight = 100;

  ctx.fillStyle = "white"; // fills canvas in white
  ctx.fillRect(0, 0, 200, 100); // coordinates
  ctx.strokeStyle = 'black'; // fills border in black
  ctx.strokeRect(0, 0, 200, 100); // coordinates
  ctx.lineWidth = 4; // line width
  ctx.stroke();

  ctx.fillStyle = "black"; // fills in text with black
  ctx.font = "20px Arial"; // size and font
  ctx.fillText("Scoreboard", 10, 20); // text, x, y
  ctx.fillText("X: ", 10, 50); // text, x, y
  ctx.fillText("O: ", 100, 50); // text, x, y

  var canvas2 = document.getElementById("Canvas2");  // creates canvas 2, playing area
  var ctx2 = canvas2.getContext("2d"); //ctx = context
  var cwidth2 = 500;
  var cheight2 = 500;
  var cellD = cwidth2/3;

  ctx2.fillStyle = "white"; // fills canvas in white
  ctx2.fillRect(0, 0, 500, 500); // coordinates
  ctx2.strokeStyle = 'black'; // fills border in black
  ctx2.strokeRect(0, 0, 500, 500); // coordinates
  ctx2.lineWidth = 4; // line width
  ctx2.stroke();

  // VERTICAL LINE 1
  ctx2.strokeStyle = 'black'; // fills in line color black
  ctx2.moveTo(cwidth2/3, 0); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2/3, cheight2);
  ctx2.lineWidth = 7; // line width
  ctx2.stroke();

  // VERTICAL LINE 2
  ctx2.moveTo(cwidth2*2/3, 0); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2*2/3, cheight2); // draws from previous ^ to new coordinate
  ctx2.stroke();

  // HORIZONTAL LINE 1
  ctx2.moveTo(0, cheight2/3); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2, cheight2/3); // draws from previous ^ to new coordinate
  ctx2.stroke();

  // HORIZONTAL LINE 2
  ctx2.moveTo(0, cheight2*2/3); // moves to coordinate without drawing
  ctx2.lineTo(cwidth2, cheight2*2/3); // draws from previous ^ to new coordinate
  ctx2.stroke();

  var canvas3 = document.getElementById("Canvas3"); // creates canvas 3, status
  var ctx3 = canvas3.getContext("2d");
  var cwidth3 = 200;
  var cheight3 = 500;

  ctx3.fillStyle = "white"; // fills canvas in white
  ctx3.fillRect(0, 0, 200, 100); // coordinates
  ctx3.strokeStyle = 'black'; // fills border in black
  ctx3.strokeRect(0, 0, 200, 100); // coordinates
  ctx3.lineWidth = 4; // line width
  ctx3.stroke();
}


var row1 = ["","",""]; // creates array of first row
var row2 = ["","",""]; // creates array of second row
var row3 = ["","",""]; // creates array of third row

var grid = [row1,row2,row3]; // creates array that groups all three previous arrays, now it became an array of arrays

initializeArray(); // calls function that initializes array

function initializeArray() { // function that initializes array
  for (let r = 0;r < 3; r++) {
    var row = grid[r]; // row = grid[r], row = whichever row specified in brackets (1, 2, 3)
    for (let c = 0; c < 3; c++) {
      row[c] = ""; // row[c] = "", column in every row, row now = all arrays of rows
    }
  }
}

document.onmousemove = function(evt) { // event listener for mouse
  //call function here
  mousePos = getMousePosition(evt); // gets mouse position by calling function, x y
}
function getMousePosition(evt) { // function that calculates mouse position
  var rect = Canvas2.getBoundingClientRect(); // gets coords based off of the canvas 2
    x = Math.round(evt.clientX - rect.left);
    y = Math.round(evt.clientY - rect.top);
}

document.onmousedown = function() { //event listener for if mouse is pressed
  //call function here
  allPlacingCode(x, y); // function of all placing, 2 player AND AI
}

function allPlacingCode(x, y) {
    var c, r;

    c = Math.floor(x/cellD); // column equals to mouseX/cellD
    r = Math.floor(y/cellD); // row equals to mouseY/cellD

    console.log(c, r);
    var row = grid[r]; // getting the row of the grid
    if (c>=0 && c<=2 && r>=0 && r<=2 && row[c] == "" && gameStop == false && (difficulty != 0 || document.getElementById("1or2switch").innerHTML == "2-Player")) {
        if (lastPressed == "X" && document.getElementById("1or2switch").innerHTML == "2-Player") {
          row[c] = "O"; // filling the grid with O
          placing(c, r, "O"); // places O, draws it
          lastPressed = "O"; // last pressed is O
          if (!gameStop) { // if game == false
            check3inRow(); // calls check 3 in row
          }
    } else {
      row[c] = "X"; // filling the grid with X
      placing(c, r, "X"); // places X, draws it
      lastPressed = "X"; // last pressed is X

      if (!gameStop) { // if game == false
        check3inRow(); // calls function check 3 in row
      }

      if (document.getElementById("1or2switch").innerHTML == "1-Player" && !gameStop) {
        if (difficulty == 1 && lastPressed == "X") { // code for Easy AI
          filled = false; // filled = false
          placeEasyAI(); // calls function to place Easy AI
          lastPressed = "O"; // last pressed is O
        } else if (difficulty == 2 && lastPressed == "X") { // code for Medium AI
              filled = false; // filled = false
              placeMediumAI(); // calls funciton to place Medium AI
              if (filled == false) { // if there is no 2 X's, runs normal randomize (EASY AI)
                placeEasyAI(); // calls funciton to place Easy AI
              }
              lastPressed = "O"; // last pressed is O
          } else if (difficulty == 3 && lastPressed == "X") { // code for Hard AI
              filled = false; // filled = false
              placeHardAI1(); // runs code PRIORITIZES WINNING OVER BLOCKING, if two O's in a row, places third
              if (filled == false) { // if there is no ^, then runs blocking code, Medium AI
                placeMediumAI(); // calls function to place Medium AI
              }
              if (filled == false) { // if there is no ^, searches for one O, places one beside it, renews check for ^
                placeHardAI2(); // calls function to place Hard AI2, if one O, place another beside it
              }
              if (filled == false) { // if none^, places random
                placeEasyAI(); // calls function to place Easy AI
              }
              lastpressed = "O"; // last pressed is O
          }
        }
        if (!gameStop) { // if game == false
          check3inRow(); // calls function check 3 in row
        }
      }
    }
  }

function updateStatus(status) { // function that updates status
if (theme == "Dark") {
  ctx3.fillStyle = "black";
  ctx3.fillRect(0, 0, 200, 100);
  ctx3.strokeStyle = '#FFFFFF';
  ctx3.strokeRect(0, 0, 200, 100);
  ctx3.lineWidth = 4;
  ctx3.stroke();

  ctx3.fillStyle = "#FFFFFF";
  ctx3.font = "20px Arial";
  ctx3.fillText(status, 15, 50); // text, x, y
} else if (theme == "Light") {
  ctx3.fillStyle = "white";
  ctx3.fillRect(0, 0, 200, 100);
  ctx3.strokeStyle = 'black';
  ctx3.strokeRect(0, 0, 200, 100);
  ctx3.lineWidth = 4;
  ctx3.stroke();

  ctx3.fillStyle = "black";
  ctx3.font = "20px Arial";
  ctx3.fillText(status, 15, 50); // text, x, y
}
}
function placing(c, r, symbol) { // function that places or draws the X or O
if (theme == "Dark") {
  ctx2.fillStyle = "#FFFFFF";
  ctx2.font = "120px Arial";
  ctx2.fillText(symbol, c*cellD + cellD/4, (r+1)*cellD - cellD/4);
  count += 1;
} else if (theme == "Light") {
  ctx2.fillStyle = "black";
  ctx2.font = "120px Arial";
  ctx2.fillText(symbol, c*cellD + cellD/4, (r+1)*cellD - cellD/4);
  count += 1;
}

  if (symbol == "X") {
    updateStatus("It is player O's turn");
  } else {
    updateStatus("It is player X's turn");
  }

  ThreeInRow();
}

function placeEasyAI() { // RANDOMLY PLACES O, CANNOT BLOCK, CAN ONLY DO SO BY CHANCE
  while (filled == false) {
    let c = Math.floor(Math.random() * 3);
    let r = Math.floor(Math.random() * 3);
    var row = grid[r];

        if (row[c] == "" && count < 9) {
          row[c] = "O"; // getting the value of the cell, column
          placing(c, r, "O");
          filled = true;
          return;
        }
      }
  }

  function placeMediumAI() { // CODE THE PLACES MEDIUM AI, ONLY BLOCKS AND RANDOMIZE THE PLACE IT PUTS O
    for (let r = 0; r < 3; r++) { // checks rows
      var row = grid[r];

      if (row[0] == "X" && row[1] == "X" && row[2] == "") {
        row[2] = "O";
        placing(2, r, "O");
        filled = true;
        return;
      }
      if (row[0] == "" && row[1] == "X" && row[2] == "X") {
        row[0] = "O";
        placing(0, r, "O");
        filled = true;
        return;
      }
      if (row[0] == "X" && row[1] == "" && row[2] == "X") {
        row[1] = "O";
        placing(1, r, "O");
        filled = true;
        return;
      }
    }

    for (let c = 0; c < 3; c++) { // checks columns
      var row1 = grid[0];
      var row2 = grid[1];
      var row3 = grid[2];

      if (row1[c] == "X" && row2[c] == "X" && row3[c] == "") {
        row3[c] = "O";
        placing(c, 2, "O");
        filled = true;
        return;
      }
      if (row1[c] == "" && row2[c] == "X" && row3[c] == "X") {
        row1[c] = "O";
        placing(c, 0, "O");
        filled = true;
        return;
      }
      if (row1[c] == "X" && row2[c] == "" && row3[c] == "X") {
        row2[c] = "O";
        placing(c, 1, "O");
        filled = true;
        return;
      }
    }

    // checks diagonals
    if (row1[0] == "X" && row2[1] == "X" && row3[2] == "") {
      row3[2] = "O";
      placing(2, 2, "O");
      filled = true;
      return;
    }
    if (row1[0] == "" && row2[1] == "X" && row3[2] == "X") {
      row1[0] = "O";
      placing(0, 0, "O");
      filled = true;
      return;
    }
    if (row1[0] == "X" && row2[1] == "" && row3[2] == "X") {
      row2[1] = "O";
      placing(1, 1, "O");
      filled = true;
      return;
    }

    if (row1[2] == "X" && row2[1] == "X" && row3[0] == "") {
      row3[0] = "O";
      placing(0, 2, "O");
      filled = true;
      return;
    }
    if (row1[2] == "" && row2[1] == "X" && row3[0] == "X") {
      row1[2] = "O";
      placing(2, 0, "O");
      filled = true;
      return;
    }
    if (row1[2] == "X" && row2[1] == "" && row3[0] == "X") {
      row2[1] = "O";
      placing(1, 1, "O");
      filled = true;
      return;
    }
  }

function placeHardAI1() { // places O in two in a row for O to try and win
  filled = false;

  for (let r = 0; r < 3; r++) { // checks rows
    var row = grid[r];

    if (row[0] == "O" && row[1] == "O" && row[2] == "") {
      row[2] = "O";
      placing(2, r, "O");
      filled = true; // fills it in
      return;
    }
    if (row[0] == "" && row[1] == "O" && row[2] == "O") {
      row[0] = "O";
      placing(0, r, "O");
      filled = true; // fills it in
      return;
    }
    if (row[0] == "O" && row[1] == "" && row[2] == "O") {
      row[1] = "O";
      placing(1, r, "O");
      filled = true; // fills it in
      return;
    }
  }

  for (let c = 0; c < 3; c++) { // checks columns
    var row1 = grid[0];
    var row2 = grid[1];
    var row3 = grid[2];

    if (row1[c] == "O" && row2[c] == "O" && row3[c] == "") {
      row3[c] = "O";
      placing(c, 2, "O");
      filled = true;
      return;
    }
    if (row1[c] == "" && row2[c] == "O" && row3[c] == "O") {
      row1[c] = "O";
      placing(c, 0, "O");
      filled = true;
      return;
    }
    if (row1[c] == "O" && row2[c] == "" && row3[c] == "O") {
      row2[c] = "O";
      placing(c, 1, "O");
      filled = true;
      return;
    }
  }

  // checks diagonals
  if (row1[0] == "O" && row2[1] == "O" && row3[2] == "") {
    row3[2] = "O";
    placing(2, 2, "O");
    filled = true;
    return;
  }
  if (row1[0] == "" && row2[1] == "O" && row3[2] == "O") {
    row1[0] = "O";
    placing(0, 0, "O");
    filled = true;
    return;
  }
  if (row1[0] == "O" && row2[1] == "" && row3[2] == "O") {
    row2[1] = "O";
    placing(1, 1, "O");
    filled = true;
    return;
  }

  if (row1[2] == "O" && row2[1] == "O" && row3[0] == "") {
    row3[0] = "O";
    placing(0, 2, "O");
    filled = true;
    return;
  }
  if (row1[2] == "" && row2[1] == "O" && row3[0] == "O") {
    row1[2] = "O";
    placing(2, 0, "O");
    filled = true;
    return;
  }
  if (row1[2] == "O" && row2[1] == "" && row3[0] == "O") {
    row2[1] = "O";
    placing(1, 1, "O");
    filled = true;
    return;
  }
}

function placeHardAI2() { // SEARCHES FOR ONE O, THEN PLACES O BESIDE IT TO MAKE TWO IN A ROW, THEN RUNS ABOVE CODE^^
  filled = false;

  for (let r = 0; r < 3; r++) { // checks rows
    var row = grid[r];

    if (row[0] == "O" && row[1] == "" && row[2] == "") {
      row[1] = "O";
      placing(1, r, "O");
      filled = true;
      return;
    }
    if (row[1] == "O" && row[2] == "" && row[0] == "") {
      row[2] = "O";
      placing(2, r, "O");
      filled = true;
      return;
    }
    if (row[2] == "O" && row[1] == "" && row[0] == "") {
      row[1] = "O";
      placing(1, r, "O");
      filled = true;
      return;
    }
  }

  for (let c = 0; c < 3; c++) { // checks columns
    var row1 = grid[0];
    var row2 = grid[1];
    var row3 = grid[2];

    if (row1[c] == "O" && row2[c] == "" && row3[c] == "") {
      row2[c] = "O";
      placing(c, 1, "O");
      filled = true;
      return;
    }
    if (row2[c] == "O" && row3[c] == "" && row1[c] == "") {
      row3[c] = "O";
      placing(c, 2, "O");
      filled = true;
      return;
    }
    if (row3[c] == "O" && row2[c] == "" && row1[c] == "") {
      row2[c] = "O";
      placing(c, 1, "O");
      filled = true;
      return;
    }
  }

  // checks diagonals
  if (row1[0] == "O" && row2[1] == "" && row3[2] == "") {
    row2[1] = "O";
    placing(1, 1, "O");
    filled = true;
    return;
  }
  if (row2[1] == "O" && row3[2] == "" && row1[0] == "") {
    row3[2] = "O";
    placing(2, 2, "O");
    filled = true;
    return;
  }
  if (row3[2] == "O" && row2[1] == "" && row1[0] == "") {
    row2[1] = "O";
    placing(1, 1, "O");
    filled = true;
    return;
  }

  if (row1[2] == "O" && row2[1] == "" && row3[0] == "") {
    row2[1] = "O";
    placing(1, 1, "O");
    filled = true;
    return;
  }
  if (row2[1] == "O" && row3[0] == "" && row1[2] == "") {
    row3[0] = "O";
    placing(0, 2, "O");
    filled = true;
    return;
  }
  if (row3[0] == "O" && row2[1] == "" && row1[2] == "") {
    row2[1] = "O";
    placing(1, 1, "O");
    filled = true;
    return;
  }
}

function ThreeInRow() {
  let check3InRowX = false;
  let check3InRowO = false;
  let winX = false;
  let winO = false;

  check3inRow();
}

function check3inRow() {
  if (checkRows("X") || checkColumn("X") || checkDiagonal("X")) {
    gameStop = true;
    updateStatus("X won the Game!");
    xWin += 1;
    printWinScore("X");
  } else if (checkRows("O") || checkColumn("O") || checkDiagonal("O")) {
    gameStop = true;
    updateStatus("O won the Game!");
    oWin += 1;
    printWinScore("O");
  } else if (count == 9) {
    gameStop = true;
    updateStatus("The game is a tie!");
  }
}

  function checkRows(xORo) { // function that checks row wins
    var win = false;

    for (let r = 0;r < 3; r++){
      var row = grid[r]; // row = grid[r], row = whichever row specified in brackets (1, 2, 3)
      if (row[0] == xORo && row[1] == xORo && row[2] == xORo) {
        return true;
      }
    }
    return win;
}

  function checkColumn(xORo) { // function that checks column wins
    var win = false;
    var row1 = grid[0];
    var row2 = grid[1];
    var row3 = grid[2];

    for (let c = 0;c < 3; c++){
      if (row1[c] == xORo && row2[c] == xORo && row3[c] == xORo) {
        return true;
      }
    }
    return win;
}

function checkDiagonal(xORo) { // function that checks diagonal wins
  var win = false;
  var row1 = grid[0];
  var row2 = grid[1];
  var row3 = grid[2];

  for (let c = 0; c < 3; c++) {
    if (row1[0] == xORo && row2[1] == xORo && row3[2] == xORo || row1[2] == xORo && row2[1] == xORo && row3[0] == xORo) {
      return true;
    } else {
      return false;
    }
  }
}
function modeSelected() {
  if (difficulty == 1 && theme == "Dark") {
    document.getElementById("easyAI").style.backgroundColor = "white";
    document.getElementById("easyAI").style.color = "black";
  } else if (difficulty == 1 && theme == "Light") {
    document.getElementById("easyAI").style.backgroundColor = "black";
    document.getElementById("easyAI").style.color = "white";
  }
  if (difficulty == 2 && theme == "Dark") {
    document.getElementById("mediumAI").style.backgroundColor = "white";
    document.getElementById("mediumAI").style.color = "black";
  } else if (difficulty == 2 && theme == "Light") {
    document.getElementById("mediumAI").style.backgroundColor = "black";
    document.getElementById("mediumAI").style.color = "white";
  }
  if (difficulty == 3 && theme == "Dark") {
    document.getElementById("hardAI").style.backgroundColor = "white";
    document.getElementById("hardAI").style.color = "black";
  } else if (difficulty == 3 && theme == "Light") {
    document.getElementById("hardAI").style.backgroundColor = "black";
    document.getElementById("hardAI").style.color = "white";
  }
}
function playerSwitch() { // function for switching text of button, 1-Player <-> 2-Player

  if (document.getElementById("1or2switch").innerHTML == "1-Player") {
    document.getElementById("1or2switch").innerHTML = "2-Player";
    reset();
  } else if (document.getElementById("1or2switch").innerHTML == "2-Player") {
    document.getElementById("1or2switch").innerHTML = "1-Player";
    reset();
  }
}

function themeSwitch() { // function for switching text of button, Dark Theme <-> Light Theme
  if (document.getElementById("darkLightTheme").innerHTML == "Dark Theme") {
    document.getElementById("darkLightTheme").innerHTML = "Light Theme";
    theme = "Light";
    document.body.style.backgroundColor = "white";
    document.getElementById("title").style.color = "black";
    document.getElementById("creator").style.color = "black";

//1 player
    document.getElementById("1or2switch").style.backgroundColor = "white";
    document.getElementById("1or2switch").style.color = "black";

//theme
    document.getElementById("darkLightTheme").style.backgroundColor = "white";
    document.getElementById("darkLightTheme").style.color = "black";

// easy button
    document.getElementById("easyAI").style.backgroundColor = "white";
    document.getElementById("mediumAI").style.backgroundColor = "white";
    document.getElementById("hardAI").style.backgroundColor = "white";

    document.getElementById("easyAI").style.color = "black";
    document.getElementById("mediumAI").style.color = "black";
    document.getElementById("hardAI").style.color = "black";

//medium button
  document.getElementById("easyAI").style.backgroundColor = "white";
  document.getElementById("mediumAI").style.backgroundColor = "white";
  document.getElementById("hardAI").style.backgroundColor = "white";

  document.getElementById("easyAI").style.color = "black";
  document.getElementById("mediumAI").style.color = "black";
  document.getElementById("hardAI").style.color = "black";

//hard button
  document.getElementById("easyAI").style.backgroundColor = "white";
  document.getElementById("mediumAI").style.backgroundColor = "white";
  document.getElementById("hardAI").style.backgroundColor = "white";

  document.getElementById("easyAI").style.color = "black";
  document.getElementById("mediumAI").style.color = "black";
  document.getElementById("hardAI").style.color = "black";
    reset();

  } else if (document.getElementById("darkLightTheme").innerHTML == "Light Theme") {

    document.getElementById("darkLightTheme").innerHTML = "Dark Theme";
    theme = "Dark";
    document.body.style.backgroundColor = "black";
    document.getElementById("title").style.color = "white";
    document.getElementById("creator").style.color = "white";

//1 player
document.getElementById("1or2switch").style.backgroundColor = "black";
document.getElementById("1or2switch").style.color = "white";

//theme
document.getElementById("darkLightTheme").style.backgroundColor = "black";
document.getElementById("darkLightTheme").style.color = "white";

//easy button
  document.getElementById("easyAI").style.backgroundColor = "black";
  document.getElementById("mediumAI").style.backgroundColor = "black";
  document.getElementById("hardAI").style.backgroundColor = "black";

  document.getElementById("easyAI").style.color = "white";
  document.getElementById("mediumAI").style.color = "white";
  document.getElementById("hardAI").style.color = "white";

//medium button
  document.getElementById("easyAI").style.backgroundColor = "black";
  document.getElementById("mediumAI").style.backgroundColor = "black";
  document.getElementById("hardAI").style.backgroundColor = "black";

  document.getElementById("easyAI").style.color = "white";
  document.getElementById("mediumAI").style.color = "white";
  document.getElementById("hardAI").style.color = "white";

//hard button
  document.getElementById("easyAI").style.backgroundColor = "black";
  document.getElementById("mediumAI").style.backgroundColor = "black";
  document.getElementById("hardAI").style.backgroundColor = "black";

  document.getElementById("easyAI").style.color = "white";
  document.getElementById("mediumAI").style.color = "white";
  document.getElementById("hardAI").style.color = "white";
    reset();
  }
}

function easyClick() { // if easy button is clicked, sets rules for Easy Ai
  difficulty = 1;
  lastPressed = "O";
  reset();

  if (theme == "Dark") {
    document.getElementById("easyAI").style.backgroundColor = "white";
    document.getElementById("mediumAI").style.backgroundColor = "black";
    document.getElementById("hardAI").style.backgroundColor = "black";

    document.getElementById("easyAI").style.color = "black";
    document.getElementById("mediumAI").style.color = "white";
    document.getElementById("hardAI").style.color = "white";
  } else if (theme == "Light") {
    document.getElementById("easyAI").style.backgroundColor = "black";
    document.getElementById("mediumAI").style.backgroundColor = "white";
    document.getElementById("hardAI").style.backgroundColor = "white";

    document.getElementById("easyAI").style.color = "white";
    document.getElementById("mediumAI").style.color = "black";
    document.getElementById("hardAI").style.color = "black";
  }
}
function mediumClick() { // if medium button is clicked, sets rules for Medium Ai
  difficulty = 2;
  lastPressed = "O";
  reset();

  if (theme == "Dark") {
    document.getElementById("easyAI").style.backgroundColor = "black";
    document.getElementById("mediumAI").style.backgroundColor = "white";
    document.getElementById("hardAI").style.backgroundColor = "black";

    document.getElementById("easyAI").style.color = "white";
    document.getElementById("mediumAI").style.color = "black";
    document.getElementById("hardAI").style.color = "white";
  } else if (theme == "Light") {
    document.getElementById("easyAI").style.backgroundColor = "white";
    document.getElementById("mediumAI").style.backgroundColor = "black";
    document.getElementById("hardAI").style.backgroundColor = "white";

    document.getElementById("easyAI").style.color = "black";
    document.getElementById("mediumAI").style.color = "white";
    document.getElementById("hardAI").style.color = "black";
  }
}
function hardClick() { // if hard button is clicked, sets rules for Hard Ai
  difficulty = 3;
  lastPressed = "O";
  reset();

if (theme == "Dark") {
  document.getElementById("easyAI").style.backgroundColor = "black";
  document.getElementById("mediumAI").style.backgroundColor = "black";
  document.getElementById("hardAI").style.backgroundColor = "white";

  document.getElementById("easyAI").style.color = "white";
  document.getElementById("mediumAI").style.color = "white";
  document.getElementById("hardAI").style.color = "black";
} else if (theme == "Light") {
  document.getElementById("easyAI").style.backgroundColor = "white";
  document.getElementById("mediumAI").style.backgroundColor = "white";
  document.getElementById("hardAI").style.backgroundColor = "black";

  document.getElementById("easyAI").style.color = "black";
  document.getElementById("mediumAI").style.color = "black";
  document.getElementById("hardAI").style.color = "white";
}
}

function printWinScore(winner) { // function that prints scoreboard if X or O won
  if (theme == "Dark") {
    if (winner == "X") {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 200, 100);
      ctx.strokeStyle = '#FFFFFF';
      ctx.strokeRect(0, 0, 200, 100);
      ctx.lineWidth = 5;
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Arial";
      ctx.fillText("Scoreboard", 10, 20); // text, x, y
      ctx.fillText("X: ", 10, 50);
      ctx.fillText("O: ", 100, 50);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Arial";
      ctx.fillText("X: " + xWin, 10, 50);
      ctx.fillText("O: " + oWin, 100, 50);
    } else if (winner == "O") {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 200, 100);
      ctx.strokeStyle = '#FFFFFF';
      ctx.strokeRect(0, 0, 200, 100);
      ctx.lineWidth = 5;
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Arial";
      ctx.fillText("Scoreboard", 10, 20); // text, x, y
      ctx.fillText("X: ", 10, 50);
      ctx.fillText("O: ", 100, 50);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Arial";
      ctx.fillText("X: " + xWin, 10, 50);
      ctx.fillText("O: " + oWin, 100, 50);
    }
  } else if (theme == "Light") {
    if (winner == "X") {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, 200, 100);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, 200, 100);
      ctx.lineWidth = 5;
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("Scoreboard", 10, 20); // text, x, y
      ctx.fillText("X: ", 10, 50);
      ctx.fillText("O: ", 100, 50);

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("X: " + xWin, 10, 50);
      ctx.fillText("O: " + oWin, 100, 50);
    } else if (winner == "O") {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, 200, 100);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, 200, 100);
      ctx.lineWidth = 5;
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("Scoreboard", 10, 20); // text, x, y
      ctx.fillText("X: ", 10, 50);
      ctx.fillText("O: ", 100, 50);

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("X: " + xWin, 10, 50);
      ctx.fillText("O: " + oWin, 100, 50);
    }
  }
}

document.onkeypress = function keyboardR(event) { // event listener for if r is clicked on keyboard
  //call function here
  var keyCode = event.which;
  if (keyCode == 114) {
  reset();
  }
}

function reset() { // function that resets everything
  gameStop = false;
  lastPressed = "O";
  count = 0;

  if (theme == "Dark") {
    ctx2.fillStyle = "black";
    ctx2.fillRect(0, 0, 500, 500);
    ctx2.strokeStyle = '#FFFFFF';
    ctx2.strokeRect(0, 0, 500, 500);
    ctx2.lineWidth = 4;
    ctx2.stroke();

    // VERTICAL LINE 1
    ctx2.strokeStyle = 'white';
    ctx2.moveTo(cwidth2/3, 0);
    ctx2.lineTo(cwidth2/3, cheight2);
    ctx2.lineWidth = 7;
    ctx2.stroke();

    // VERTICAL LINE 2
    ctx2.moveTo(cwidth2*2/3, 0);
    ctx2.lineTo(cwidth2*2/3, cheight2);
    ctx2.stroke();

    // HORIZONTAL LINE 1
    ctx2.moveTo(0, cheight2/3);
    ctx2.lineTo(cwidth2, cheight2/3);
    ctx2.stroke();

    // HORIZONTAL LINE 2
    ctx2.moveTo(0, cheight2*2/3);
    ctx2.lineTo(cwidth2, cheight2*2/3);
    ctx2.stroke();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 200, 100);
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(0, 0, 200, 100);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Scoreboard", 10, 20); // text, x, y
    ctx.fillText("X: ", 10, 50);
    ctx.fillText("O: ", 100, 50);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("X: " + xWin, 10, 50);
    ctx.fillText("O: " + oWin, 100, 50);

    ctx3.fillStyle = "black";
    ctx3.fillRect(0, 0, 200, 100);
    ctx3.strokeStyle = '#FFFFFF';
    ctx3.strokeRect(0, 0, 200, 100);
    ctx3.lineWidth = 4;
    ctx3.stroke();

    initializeArray(); // calls function that initializes array
  } else if (theme == "Light") {
    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, 500, 500);
    ctx2.strokeStyle = 'black';
    ctx2.strokeRect(0, 0, 500, 500);
    ctx2.lineWidth = 4;
    ctx2.stroke();

    // VERTICAL LINE 1
    ctx2.strokeStyle = 'black';
    ctx2.moveTo(cwidth2/3, 0);
    ctx2.lineTo(cwidth2/3, cheight2);
    ctx2.lineWidth = 7;
    ctx2.stroke();

    // VERTICAL LINE 2
    ctx2.moveTo(cwidth2*2/3, 0);
    ctx2.lineTo(cwidth2*2/3, cheight2);
    ctx2.stroke();

    // HORIZONTAL LINE 1
    ctx2.moveTo(0, cheight2/3);
    ctx2.lineTo(cwidth2, cheight2/3);
    ctx2.stroke();

    // HORIZONTAL LINE 2
    ctx2.moveTo(0, cheight2*2/3);
    ctx2.lineTo(cwidth2, cheight2*2/3);
    ctx2.stroke();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 200, 100);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, 200, 100);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Scoreboard", 10, 20); // text, x, y
    ctx.fillText("X: ", 10, 50);
    ctx.fillText("O: ", 100, 50);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("X: " + xWin, 10, 50);
    ctx.fillText("O: " + oWin, 100, 50);

    ctx3.fillStyle = "white";
    ctx3.fillRect(0, 0, 200, 100);
    ctx3.strokeStyle = 'black';
    ctx3.strokeRect(0, 0, 200, 100);
    ctx3.lineWidth = 4;
    ctx3.stroke();

    initializeArray(); // calls function that initializes array
  }

}
