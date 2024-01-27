
var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile = 3.jpg

var turns = 0;

//urut
// var imgOrder = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];

//random
var imgOrder = ["3a", "6a", "1a", "2a", "5a", "4a", "8a", "7a", "9a"];


window.onload = function(){
    for(let i = 0; i < rows; i++){ //i = r
        for(let j = 0; j < columns; j++){ //j = c
            let tile = document.createElement("img");
            tile.id = i.toString() + "-" + j.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //drag functionality
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart(){
    currTile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this;
}

function dragEnd(){
    // if(! otherTile.src.includes("3.jpg")){
    //     return;
    // }

    let currCoords = currTile.id.split("-");

    let i = parseInt(currCoords[0]);
    let j = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let i2 = parseInt(otherCoords[0]);
    let j2 = parseInt(otherCoords[1]);

    let currImg = currTile.src;
    let otherImg = otherTile.src;

    let moveLeft = i == i2 && j2 == j - 1;
    let moveRight = i == i2 && j2 == j + 1;

    let moveUp = j == j2 && i2 == i - 1;
    let moveDown = j == j2 && i2 == i + 1;

    let isadjacent = moveLeft || moveRight || moveUp || moveDown;

    if(isadjacent){
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }



}