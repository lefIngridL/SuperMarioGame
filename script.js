//"use strict";
// Model
let html;
const app = document.getElementById('app');
const back = document.getElementById('myBody');
const figureList = {
    bowser: {
        name: 'Bowser',
        hp: '300',
        src: 'images/bowser (1).png',
    },
    mario: {
        name: 'Mario',
        hp: '200',
        src: 'images/mario__1_-removebg-preview.png',
    },
    peach: {
        name: 'Peach',
        hp: '100',
        src: 'images/peach (1).png',
    },
    yoshi: {
        name: 'Yoshi',
        hp: '80',
        src: 'images/yoshi (1).png',
    },
    luigi: {
        name: 'Luigi',
        hp: '140',
        src: 'images/luigi__1_-removebg-preview.png',
    }
}
let bowserHp = 300;
let marioHp = 200;
let peachHp = 100;
let yoshiHp = 80;
let luigiHp = 140;
var a;
var heroHp;
var countHero = 0;
var countBowser = 0;
let xFactorH;
var i;
var width;
let xFactorB;
var iB;
let widthB;
var elem;
var elemB;
let hpFactor;
let heroAtForce;
// View


updateViewStart();
function updateViewStart() {
    document.body.style.backgroundImage = ' url("images/super-mario-bros-background-wqhd-1440p-wallpaper.jpg")';

    html = /*html*/ `
  <div id="h1h">Choose your Champion!</div>
    <!--<input onclick="choose(this)" class="character" type="image" id="bowser" src="images/bowser (1).png">-->
    <!--<input onclick="choose(this)" class="character" type="image" id="bwmush" src="images/bwsmush__1_-removebg-preview.png">-->
    <input onclick="choose(this)" class="character" type="image" id="luigi" src="images/luigi__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="mario" src="images/mario__1_-removebg-preview.png">
    <input onclick="choose(this)" class="character" type="image" id="peach" src="images/peach (1).png">
    <!--<input onclick="choose(this)" class="character" type="image" id="toad" src="images/toad__1_-removebg-preview (1).png">-->
    <input onclick="choose(this)" class="character" type="image" id="yoshi" src="images/yoshi (1).png">
  
    <button  id="btn" onclick="start()" value="Start Game">Start Game</button>
    
    `;
    app.innerHTML = html;
}

//updateViewFight();
function updateViewFight() {
    document.body.style.backgroundImage = 'url("images/vecteezy_fantasy-game-background_22980006.jpg")';

    html = /*html*/ `
    <div id="myProgressBowser" >
        <div id="bowserHp">HP: ${bowserHp}</div>
    </div>
    <div id="myProgressChamp">
        <div id="champHp">HP: </div>
    </div>
    <div id="attackCounter">
    <p id="countHero">Hero Attacks: ${countHero}</p>
    <p id="countBowser">Bowser Attacks: ${countBowser}</p>
    </div>
    <input  class="rock" type="image" id="rock" src="images/pngegg.png">
    <input  class="bowserFight" type="image" id="bowser1" src="images/bowser (1).png">
    <input  class="fightMode" type="image" id="bwmush1" src="images/bwsmush__1_-removebg-preview.png">
    <input  class="hideCharacter" type="image" id="luigi1" src="images/luigiSpeil.png">
    <input  class="hideCharacter" type="image" id="mario1" src="images/marioSpeil.png">
    <input  class="hideCharacter" type="image" id="peach1" src="images/peach (1).png">
    <input  class="character" type="image" id="toad1" src="images/toad__1_-removebg-preview (1).png">
    <input  class="hideCharacter" type="image" id="yoshi1" src="images/yoshi (1).png">
    <input type="button" value="Bowser Attack" id="bowAt" onclick="bowserAttack(countBowser)">
    <input type="button" value="Fighter Attack" id="figAt" onclick="heroAttack(countHero)" >
   
    `;
    app.innerHTML = html;
    
var buttonHero= document.querySelector("#figAt");
var countDisplayHero = document.querySelector("#countHero");
buttonHero.addEventListener("click", function(){
    countHero++;
    console.log(countHero);
    countDisplayHero.innerHTML = `Hero Attacks:` + countHero;

});
var buttonBowser= document.querySelector("#bowAt");
var countDisplayBowser = document.querySelector("#countBowser");
buttonBowser.addEventListener("click", function(){
    countBowser++;
    console.log(countBowser);
    countDisplayBowser.innerHTML = `Bowser Attacks:` + countBowser;

});
}

// Controler

var currentSelection = '';
var chosenChamp = '';
var champsrc = '';
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
    let lastChoice = greenArray[greenArray.length - 2];
    //console.log(lastChoice);
    let lastChoiceElement = document.getElementById(lastChoice);
    //console.log(lastChoiceElement);
    lastChoiceElement.classList.toggle("characterOnClick");
    lastChoiceElement.classList.toggle("character");
}

function start() {

    updateViewFight();
    console.log(a);
    let fighterId = a.id;
    console.log(fighterId);
    let newViewFigId = fighterId + '1';
    console.log(newViewFigId);
    let newFig = document.getElementById(newViewFigId);
    console.log(newFig);
    newFig.classList.remove("hideCharacter");
    newFig.classList.add("fightMode");
    heroHealth(fighterId);
}

function showTest() {

    let myBox = document.getElementById("box");
    //myBox.innerHTML = `${a}`;
}

//document.getElementById("champHp").innerHTML = `HP`;

function heroHealth(name) {

    console.log(name);
    if (name === "mario") {
        heroHp = marioHp;
    }
    else if (name === "luigi") {
        heroHp = luigiHp;
    }
    else if (name === "peach") {
        heroHp = peachHp;
    }
    else if (name === "yoshi") {
        heroHp = yoshiHp;
    }
    console.log(heroHp);
    document.getElementById("champHp").innerHTML += heroHp;
    return heroHp;
}

/*function heroAttack() {

}*/

function bowserAttack() {

}



function heroAttack(count) {
xFactorH = count+1;
    i = 100;
    
    if (i == 100) {
        i = 1;
        elem = document.getElementById("bowserHp");
        width = 100;
        if (width <= 0) {
            i = 100;
        } else {
            if (width == 70) {
                elem.style.backgroundColor = 'yellow';
                //console.log('gul');
            } else if (width == 30) {
                elem.style.backgroundColor = 'red';
            } else if (width == 100) {
                elem.style.backgroundColor = '#04ff19';
                //console.log('grønn');

            }
            if(heroHp == 200){
                hpFactor = 0.5;
                heroAtForce=20;
            }
            else if(heroHp == 100){
                hpFactor = 1;
                heroAtForce=10;
            }
            else if(heroHp == 80){
                hpFactor= 1.2;
                heroAtForce=8;
            }
            else if(heroHp == 140){
                hpFactor= 0.7;
                heroAtForce=14;
            }
            width = (width - (heroAtForce*xFactorH)/3);
            elem.style.width = width + "%";
            elem.innerHTML = "HP:" + (bowserHp - heroAtForce*xFactorH);
            if( elem.innerHTML == "HP:" + 0){
                alert("Helten vant!");
            }
        }
        

    }

}

function bowserAttack(count) {
 xFactorB = count+1;
     iB = 100;
    if (iB == 100) {
        iB = 1;
        elemB = document.getElementById("champHp");
        widthB = 100;
        if (widthB <= 0) {
            iB = 100;
        } else {
            if (widthB == 70) {
                elemB.style.backgroundColor = 'yellow';
                //console.log('gul');
            } else if (widthB == 30) {
                elemB.style.backgroundColor = 'red';
            } else if (widthB == 100) {
                elemB.style.backgroundColor = '#04ff19';
                //console.log('grønn');

            }
            if(heroHp == 200){
                hpFactor = 0.5;
            }
            else if(heroHp == 100){
                hpFactor = 1;
            }
            else if(heroHp == 80){
                hpFactor= 1.2;
            }
            else if(heroHp == 140){
                hpFactor= 0.7;
            }
            
            widthB = widthB - (10*xFactorB)*hpFactor; 
            elemB.style.width = widthB + "%";
            elemB.innerHTML = "HP:" + (heroHp - 10*xFactorB);
            if( elemB.innerHTML == "HP:" + 0){
                alert("Bowser vant!");
            }
        }
        

    }

}





