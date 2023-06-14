console.log("Tic Tac Toe Game");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;


// Function to change the turn
const changeTurn = () => {
return turn === "X" ? "0" : "X"
}


// Function to check for a win
const checkWin = () => {
let boxTextElem = document.getElementsByClassName("boxText");
let wins = [
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(e => {
if((boxTextElem[e[0]].innerText === boxTextElem[e[1]].innerText) && (boxTextElem[e[1]].innerText === boxTextElem[e[2]].innerText) && (boxTextElem[e[0]].innerText !== "")){
    document.querySelector(".info").innerText = `${boxTextElem[e[0]].innerText} won`;
    gameOver = true;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
    document.querySelector(".line").style.width = "20vw";
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    gameOverMusic.play();
}
}) 
}




// Game Logic
let boxElem = document.getElementsByClassName("box");
Array.from(boxElem).forEach(element => {
// console.log(element);    
let boxTextElem = element.querySelector(".boxText");
element.addEventListener("click",(e) => {
    if(boxTextElem.innerText === ""){
        boxTextElem.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!gameOver){
            document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
        }
    }
})
})



// Add onclick on reset button
let resetElem = document.getElementById("reset");
resetElem.addEventListener("click",() => {
    let boxTextElem = document.querySelectorAll(".boxText");
    Array.from(boxTextElem).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
})
