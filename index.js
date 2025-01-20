
const dicesHTML2=`
  <div class="dice">
        <p>Player 1</p><div class="Total total1"></div>
        <img class="img1" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 2</p><div class="Total total2"></div>
        <img class="img2" src="./images/dice6.png" />
      </div>`;
  const dicesHTML3=`
   <div class="dice">
        <p>Player 1</p><div class="Total total1"></div>
        <img class="img1" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 2</p><div class="Total total2"></div>
        <img class="img2" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 3</p><div class="Total total3"></div>
        <img class="img3" src="./images/dice6.png" />
      </div>
    </div>`;
    
  const dicesHTML4=`
   <div class="dice">
        <p>Player 1</p><div class="Total total1"></div>
        <img class="img1" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 2</p><div class="Total total2"></div>
        <img class="img2" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 3</p><div class="Total total3"></div>
        <img class="img3" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 4</p><div class="Total total4"></div>
        <img class="img4" src="./images/dice6.png" />
      </div>
      </div>`;

      const dicesHTML5=`
   <div class="dice">
        <p>Player 1</p><div class="Total total1"></div>
        <img class="img1" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 2</p><div class="Total total2"></div>
        <img class="img2" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 3</p><div class="Total total3"></div>
        <img class="img3" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 4</p><div class="Total total4"></div>
        <img class="img4" src="./images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 5</p><div class="Total total5"></div>
        <img class="img5" src="./images/dice6.png" />
      </div>
    </div>`;

const click1=document.querySelector(".btn1");
const click2=document.querySelector(".btn2");
click2.disabled=true;

//Select players
click1.addEventListener("click",function(){
  var players=document.querySelector(".input1").value;
  
  if(players>=2 && players<=5){
    click2.disabled=false;
    if(players==2){
    document.querySelector(".dices").innerHTML=dicesHTML2;
      }
    if(players==3){
      document.querySelector(".dices").innerHTML=dicesHTML3;
    }
    if(players==4){
      document.querySelector(".dices").innerHTML=dicesHTML4;
    }
    if(players==5){
      document.querySelector(".dices").innerHTML=dicesHTML5;
    }
    }
  else{
    alert("Players should between 2 to 6 only");
  }
});

//Roll button with random dices
click2.addEventListener("click",function(){
  var players=document.querySelector(".input1").value;


  // Add rolling animation to all dice
  for (var i = 1; i <= players; i++) {
    document.querySelector(".img" + i).classList.add("roll-animation");
    sound();
  }
  setTimeout(() => {
  for (var i = 1; i <= players; i++) {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img"+i).setAttribute("src","./images/dice"+randomNumber+".png");
    document.querySelector(".total"+i).innerHTML = randomNumber;
   // Remove the animation class
   document.querySelector(".img" + i).classList.remove("roll-animation");
}

  let maxScore = 0;
  let winner = [];
  for (let i = 1; i <= players; i++) {
    const score = parseInt(document.querySelector(".total"+i).innerHTML, 10);
    if (score > maxScore) {
      maxScore = score;
      winner = ["Player " +i];
    } else if (score === maxScore) {
      winner.push("Player "+i);
    }
  }

  if (winner.length === 1) {
    document.querySelector("h1").innerHTML = (winner[0]+ " wins!!");
  } else {
    document.querySelector("h1").innerHTML = ("It's a Draw between "+winner.join(" & ")+"!!");
  }
},500);
});

function sound(){
  var audio = new Audio("./sounds/dice.mp3");
  audio.play();
}