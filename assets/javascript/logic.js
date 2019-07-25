
var availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let xCell0 = 0;
let xCell1 = 0;
let xCell2 = 0;
let xCell3 = 0;
let xCell4 = 0;
let xCell5 = 0;
let xCell6 = 0;
let xCell7 = 0;
let xCell8 = 0;

var maxClicks = 5;

var tiedGame = true;

function markO() {
    var oMove = Math.floor((Math.random() * 9));

    if (maxClicks === 0) {
        return;
    }
    else if (availableCells[oMove] === "filled") {
        oMove = Math.floor((Math.random() * 9));
        markO();
    }
    else {
        $("#lamb").hide(200, function(){
            // alert("The paragraph is now hidden");
            document.getElementById("cell" + oMove).innerHTML = "O";
            document.getElementById("cell" + oMove).onclick = "";
            availableCells.splice(oMove, 1, "filled");
            var cell0Value = document.getElementById("cell0").innerHTML;
            if (cell0Value === "O") {
                xCell0 = "o";
            }
            var cell1Value = document.getElementById("cell1").innerHTML;
            if (cell1Value === "O") {
                xCell1 = "o";
            }
            var cell2Value = document.getElementById("cell2").innerHTML;
            if (cell2Value === "O") {
                xCell2 = "o";
            }
            var cell3Value = document.getElementById("cell3").innerHTML;
            if (cell3Value === "O") {
                xCell3 = "o";
            }
            var cell4Value = document.getElementById("cell4").innerHTML;
            if (cell4Value === "O") {
                xCell4 = "o";
            }
            var cell5Value = document.getElementById("cell5").innerHTML;
            if (cell5Value === "O") {
                xCell5 = "o";
            }
            var cell6Value = document.getElementById("cell6").innerHTML;
            if (cell6Value === "O") {
                xCell6 = "o";
            }
            var cell7Value = document.getElementById("cell7").innerHTML;
            if (cell7Value === "O") {
                xCell7 = "o";
            }
            var cell8Value = document.getElementById("cell8").innerHTML;
            if (cell8Value === "O") {
                xCell8 = "o";
            }
            $("#lamb").show();
        });
    }
}

function playerWinCheck() {
    if (xCell0 === "x" && xCell1 === "x" && xCell2 === "x") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell1").css("color", "red");
        $("#cell2").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
    if (xCell3 === "x" && xCell4 === "x" && xCell5 === "x") {
        tiedGame = false;
        $("#cell3").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell5").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);

    }
    if (xCell6 === "x" && xCell7 === "x" && xCell8 === "x") {
        tiedGame = false;
        $("#cell6").css("color", "red");
        $("#cell7").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
    if (xCell0 === "x" && xCell3 === "x" && xCell6 === "x") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell3").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
    if (xCell1 === "x" && xCell4 === "x" && xCell7 === "x") {
        tiedGame = false;
        $("#cell1").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell7").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
    if (xCell2 === "x" && xCell5 === "x" && xCell8 === "x") {
        tiedGame = false;
        $("#cell2").css("color", "red");
        $("#cell5").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
    if (xCell0 === "x" && xCell4 === "x" && xCell8 === "x") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
    if (xCell2 === "x" && xCell4 === "x" && xCell6 === "x") {
        tiedGame = false;
        $("#cell2").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function(){ alert("You Win!"); }, 50);
    }
}

function playerLoseCheck() {
    if (xCell0 === "o" && xCell1 === "o" && xCell2 === "o") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell1").css("color", "red");
        $("#cell2").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell3 === "o" && xCell4 === "o" && xCell5 === "o") {
        tiedGame = false;
        $("#cell3").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell5").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell6 === "o" && xCell7 === "o" && xCell8 === "o") {
        tiedGame = false;
        $("#cell6").css("color", "red");
        $("#cell7").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell0 === "o" && xCell3 === "o" && xCell6 === "o") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell3").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell1 === "o" && xCell4 === "o" && xCell7 === "o") {
        tiedGame = false;
        $("#cell1").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell7").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell2 === "o" && xCell5 === "o" && xCell8 === "o") {
        tiedGame = false;
        $("#cell2").css("color", "red");
        $("#cell5").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell0 === "o" && xCell4 === "o" && xCell8 === "o") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
    if (xCell2 === "o" && xCell4 === "o" && xCell6 === "o") {
        tiedGame = false;
        $("#cell2").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function(){ alert("Sorry, you lose.  Please try again."); }, 50);
    }
}
function playerTieCheck (){
    if(maxClicks === 0 && tiedGame === true) {
        alert("Hmm...looks like a tie.  Please try again");
    }
}
function markX0() {
    maxClicks -= 1;
    document.getElementById("cell0").innerHTML = "X";
    document.getElementById("cell0").onclick = "";
    xCell0 = "x";
    availableCells.splice(0, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX1() {
    maxClicks -= 1;
    document.getElementById("cell1").innerHTML = "X";
    document.getElementById("cell1").onclick = "";
    xCell1 = "x";
    availableCells.splice(1, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX2() {
    maxClicks -= 1;
    document.getElementById("cell2").innerHTML = "X";
    document.getElementById("cell2").onclick = "";
    xCell2 = "x";
    availableCells.splice(2, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX3() {
    maxClicks -= 1;
    document.getElementById("cell3").innerHTML = "X";
    document.getElementById("cell3").onclick = "";
    xCell3 = "x";
    availableCells.splice(3, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX4() {
    maxClicks -= 1;
    document.getElementById("cell4").innerHTML = "X";
    document.getElementById("cell4").onclick = "";
    xCell4 = "x";
    availableCells.splice(4, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX5() {
    maxClicks -= 1;
    document.getElementById("cell5").innerHTML = "X";
    document.getElementById("cell5").onclick = "";
    xCell5 = "x";
    availableCells.splice(5, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX6() {
    maxClicks -= 1;
    document.getElementById("cell6").innerHTML = "X";
    document.getElementById("cell6").onclick = "";
    xCell6 = "x";
    availableCells.splice(6, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX7() {
    maxClicks -= 1;
    document.getElementById("cell7").innerHTML = "X";
    document.getElementById("cell7").onclick = "";
    xCell7 = "x";
    availableCells.splice(7, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();

}
function markX8() {
    maxClicks -= 1;
    document.getElementById("cell8").innerHTML = "X";
    document.getElementById("cell8").onclick = "";
    xCell8 = "x";
    availableCells.splice(8, 1, "filled");
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}

