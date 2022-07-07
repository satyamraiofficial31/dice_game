var randomNo1=Math.floor(Math.random() * 6) + 1;
var randomDiceImg="images/dice"+randomNo1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg);

var randomNo2=Math.floor(Math.random() * 6) + 1;
var randomDiceImg1="images/dice"+randomNo2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImg1);

if(randomNo1>randomNo2)
{
  document.querySelector(".container h1").innerHTML=" 🚩Player 1 Wins";
}

if(randomNo1<randomNo2)
{
  document.querySelector(".container h1").innerHTML=" 🚩Player 2 Wins";
}

if(randomNo1===randomNo2)
{
  document.querySelector(".container h1").innerHTML="Draw!!";
}