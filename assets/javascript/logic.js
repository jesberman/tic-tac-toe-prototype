
// function markX(td) {
//     var name = td.id;
//     alert(name);
// }
var availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(availableCells);
let xCell0 = false;
let xCell1 = false;
let xCell2 = false;
let xCell3 = false;
let xCell4 = false;
let xCell5 = false;
let xCell6 = false;
let xCell7 = false;
let xCell8 = false;

function markO() {
    var oMove = Math.floor((Math.random() * 9));
    console.log(oMove);
    if (availableCells[oMove] === "filled") {
        oMove = Math.floor((Math.random() * 9));
    }
    else {
        document.getElementById("cell" + oMove).innerHTML = "O";
        document.getElementById("cell" + oMove).onclick = "";
    }
}

function playerWinCheck() {
    if (xCell0 === true && xCell1 === true && xCell2 === true) {
        alert("You Win!");
    }
    if (xCell3 === true && xCell4 === true && xCell5 === true) {
        alert("You Win!");
    }
    if (xCell6 === true && xCell7 === true && xCell8 === true) {
        alert("You Win!");
    }
    if (xCell0 === true && xCell3 === true && xCell6 === true) {
        alert("You Win!");
    }
    if (xCell1 === true && xCell4 === true && xCell7 === true) {
        alert("You Win!");
    }
    if (xCell2 === true && xCell5 === true && xCell8 === true) {
        alert("You Win!");
    }
    if (xCell0 === true && xCell4 === true && xCell8 === true) {
        alert("You Win!");
    }
    if (xCell2 === true && xCell4 === true && xCell6 === true) {
        alert("You Win!");
    }
}
function markX0() {
    document.getElementById("cell0").innerHTML = "X";
    xCell0 = true;
    availableCells.splice(0, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX1() {
    document.getElementById("cell1").innerHTML = "X";
    xCell1 = true;
    availableCells.splice(1, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX2() {
    document.getElementById("cell2").innerHTML = "X";
    xCell2 = true;
    availableCells.splice(2, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX3() {
    document.getElementById("cell3").innerHTML = "X";
    xCell3 = true;
    availableCells.splice(3, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX4() {
    document.getElementById("cell4").innerHTML = "X";
    xCell4 = true;
    availableCells.splice(4, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX5() {
    document.getElementById("cell5").innerHTML = "X";
    xCell5 = true;
    availableCells.splice(5, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX6() {
    document.getElementById("cell6").innerHTML = "X";
    xCell6 = true;
    availableCells.splice(6, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX7() {
    document.getElementById("cell7").innerHTML = "X";
    xCell7 = true;
    availableCells.splice(7, 1, "filled");
    console.log(availableCells);
    markO();

    playerWinCheck();
}
function markX8() {
    document.getElementById("cell8").innerHTML = "X";
    xCell8 = true;
    availableCells.splice(8, 1, "filled");
    console.log(availableCells);
    markO();
    playerWinCheck();
}




// markO();