var score1 = document.querySelector("#s1");
var player1 = document.querySelector("#p1");
var num1 = 0;
var score2 = document.querySelector("#s2");
var player2 = document.querySelector("#p2");
var num2 = 0;
var reset = document.querySelector("#res");
var winner = document.querySelector("#winner");
//var winner1 = document.getElementById("winner");
var limit = +document.querySelector("#limit").value;

player1.addEventListener("click", myFunction);
function myFunction() {
  // var limit = +document.querySelector("#limit").value;
  if (num1 <= limit) {
    console.log("if");
    num1++;
    score1.textContent = num1;
  } else {
    if (num1 == limit || num1 > num2) {
      console.log("else if");
      // document.write(winner + "player1");
      winner.textContent = "player1";
      player1.disabled = true;
    }
  }
}

player2.addEventListener("click", myFunction1);
function myFunction1() {
  //var limit = document.querySelector("#limit");
  if (num2 <= limit) {
    num2++;
    score2.textContent = num2;
  } else {
    if (num2 == limit || num2 > num1) {
      winner.textContent = "player2";
      player2.disabled = true;
    }
  }
}
reset.addEventListener("click", myfunction3);
function myfunction3() {
  document.getElementById("myForm").reset();
  num2 = 0;
  num1 = 0;
  score1.textContent = num1;
  score2.textContent = num2;
  winner.textContent = "";
}

var h1 = document.getElementById("t1");
h1.setAttribute("style", "background:red");
h1.style.color = "white";
/*var span = document.getElementById("s1");
span.style.fontSize = "40px";
span.style.fontFamily = "arial";
span.style.color = "yellow";
span.setAttribute("style", "fontSize:120px");
var b1 = getElementById("body");
b1.addEventListener("click", myfunction2);
function myfunction2() {
  alert("hey");
}
var t2 = document.getElementById("t2");
t2.style.backgroundColor = black;
t2.style.color = white;
t2.setAttribute("style", "backgroundColor:red");
*/
