var randomNumber1 = Math.random ();
var randomNumber2 = Math.random ();
var dado1 = Math.floor (randomNumber1*6)+1;
var dado2 = Math.floor (randomNumber2*6)+1;
var randomDiceImg1 = "images/dice" + dado1 +".png";
var randomDiceImg2 = "images/dice" + dado2 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg1);

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImg2);

if (dado1==dado2){
    document.querySelector("h1").innerHTML = "Draw !";
}
else if (dado1 > dado2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (dado2> dado1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
