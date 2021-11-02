var randonNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randonNumber1 + ".png"; //dice1 - dice6.png
var randomImageSource = "images/" + randomDiceImage; //this can be done in the abouve line also
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randonNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randonNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randonNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
