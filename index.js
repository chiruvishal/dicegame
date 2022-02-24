var player1=Math.random();
var player2=Math.random();

player1=Math.floor((player1*6)+1);
player2=Math.floor((player2*6)+1);


if(player1==1){
   document.querySelector(".img1").setAttribute("src","dice1.png");
}
else if(player1==2){
    document.querySelector(".img1").setAttribute("src","dice2.png");

}
else if(player1==3){
    document.querySelector(".img1").setAttribute("src","dice3.png");

}
else if(player1==4){
    document.querySelector(".img1").setAttribute("src","dice4.png");

}
else if(player1==5){
    document.querySelector(".img1").setAttribute("src","dice5.png");

}
else if(player1==6){
    document.querySelector(".img1").setAttribute("src","dice6.png");

}

if(player2===1){
    document.querySelector(".img2").setAttribute("src","dice1.png");

}
else if(player2==2){
    document.querySelector(".img2").setAttribute("src","dice2.png");

}
else if(player2==3){
    document.querySelector(".img2").setAttribute("src","dice3.png");

}
else if(player2==4){
    document.querySelector(".img2").setAttribute("src","dice4.png");

}
else if(player2==5){
    document.querySelector(".img2").setAttribute("src","dice5.png");

}
else if(player2==6){
    document.querySelector(".img2").setAttribute("src","dice6.png");

}

if(player1>player2){
  document.querySelector("h1").innerHTML="Player 1 won the game";
}
else if(player1<player2){
    document.querySelector("h1").innerHTML="Player 2 won the game";

}
else if(player1==player2){
    document.querySelector("h1").innerHTML="Its a draw ! Try again";

}