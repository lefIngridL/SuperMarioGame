// Model
const app = document.getElementById('app');
const figureList = []

// View
updateViewStart();
function updateViewStart(){
    html = /*html*/ `
    <input onclick="choose(this)" class="character" type="image" id="bowser" src="images/bowser (1).png">
    <input onclick="choose(this)" class="character" type="image" id="bwmush" src="images/bwsmush__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="luigi" src="images/luigi__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="mario" src="images/mario__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="peach" src="images/peach (1).png">
    <input onclick="choose(this)" class="character" type="image" id="toad" src="images/toad__1_-removebg-preview (1).png">
    <input onclick="choose(this)" class="character" type="image" id="yoshi" src="images/yoshi (1).png">
    <button  id="btn" onclick="start()" value="Start Game">Start Game</button>
    `;
    app.innerHTML = html;
}

//updateViewFight();
function updateViewFight(){
    html = /*html*/ `
    <input type="image" src="champsrc">`;
    app.innerHTML = html;
}

// Controler
var currentSelection='';
var chosenChamp='';
var champsrc='';
function choose(figure) {
    chosenChamp = figure.id;
    champsrc = figure.src;
    console.log(champsrc);
    //console.log(chosenChamp);
    clickedON(figure);
}
var allFig = document.querySelectorAll("input");
let other = document.querySelectorAll(".character");
let choosenFigs;
let choosenFigs2 = document.getElementsByClassName("characterOnClick");
const greenArray = [];


function clickedON(figure) {
    let styling = figure;
    currentSelection = figure.id;
    //console.log(currentSelection);
    styling.classList.toggle("characterOnClick");
    styling.classList.toggle("character");
    greenArray.push(currentSelection);
    let lastChoice = greenArray[greenArray.length-2];
        //console.log(lastChoice);
    let lastChoiceElement = document.getElementById(lastChoice);
        //console.log(lastChoiceElement);
    lastChoiceElement.classList.toggle("characterOnClick");
    lastChoiceElement.classList.toggle("character");
        }

function start(){
    updateViewFight();
}