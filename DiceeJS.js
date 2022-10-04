let diceSides = ["DicePhotos/Side_1.png", "DicePhotos/Side_2.png", "DicePhotos/Side_3.png", "DicePhotos/Side_4.png", "DicePhotos/Side_5.png", "DicePhotos/Side_6.png"];
let firstPlayer = document.querySelector(".firstPlayer>img").attributes;
let secondPlayer = document.querySelector(".secondPlayer>img").attributes;
let diceButton = document.querySelector("#button");
let playersWin = document.querySelector("h1");
const playersRandom = () => {
    let randomFirst = diceSides[Math.floor(Math.random()*diceSides.length)];
    let randomSecond = diceSides[Math.floor(Math.random()*diceSides.length)];
    firstPlayer.src.nodeValue = ""+randomFirst+"";
    secondPlayer.src.nodeValue = ""+randomSecond+"";
    if(randomSecond<randomFirst){
        playersWin.innerText = "First player win!!!";
    }
    else if (randomSecond===randomFirst){
        playersWin.innerText = "Draw";
    }
    else{
        playersWin.innerText = "Second player win!!!";
    }

}
diceButton.addEventListener("click", playersRandom)