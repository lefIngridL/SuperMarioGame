// Model
const app = document.getElementById('app');
const back = document.getElementsByName('body');
const figureList = [
    "images/bowser (1).png"
]
var a;
// View
updateViewStart();
function updateViewStart(){
    html = /*html*/ `
    <div id="box">
    <input onclick="choose(this)" class="character" type="image" id="bowser" src="images/bowser (1).png">
    <input onclick="choose(this)" class="character" type="image" id="bwmush" src="images/bwsmush__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="luigi" src="images/luigi__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="mario" src="images/mario__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="peach" src="images/peach (1).png">
    <input onclick="choose(this)" class="character" type="image" id="toad" src="images/toad__1_-removebg-preview (1).png">
    <input onclick="choose(this)" class="character" type="image" id="yoshi" src="images/yoshi (1).png">
    <button  id="btn" onclick="start()" value="Start Game">Start Game</button>
    </div>
    `;
    app.innerHTML = html;
}

//updateViewFight();
function updateViewFight(){
   
    html = /*html*/ `
    
    <input  class="bowserFight" type="image" id="bowser1" src="images/bowser (1).png">
    <input  class="hideCharacter" type="image" id="bwmush1" src="images/bwsmush__1_-removebg-preview.png">
    <input  class="hideCharacter" type="image" id="luigi1" src="images/luigi__1_-removebg-preview.png">
    <input  class="hideCharacter" type="image" id="mario1" src="images/mario__1_-removebg-preview.png">
    <input  class="hideCharacter" type="image" id="peach1" src="images/peach (1).png">
    <input  class="hideCharacter" type="image" id="toad1" src="images/toad__1_-removebg-preview (1).png">
    <input  class="hideCharacter" type="image" id="yoshi1" src="images/yoshi (1).png">
   
    `;
    app.innerHTML = html;
}

// Controler

var currentSelection='';
var chosenChamp='';
var champsrc='';
function choose(figure) {
    a = figure;
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
    console.log(a);
    let fighterId = a.id;
    console.log(fighterId);
    let newViewFigId = fighterId +'1';
    console.log(newViewFigId);
    let newFig = document.getElementById(newViewFigId);
    console.log(newFig);
    newFig.classList.remove("hideCharacter");
    newFig.classList.add("fightMode");
}

function showTest(){
    
    let myBox=document.getElementById("box");
    //myBox.innerHTML = `${a}`;
}