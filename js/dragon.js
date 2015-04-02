var gameOver = false;
var response1 = "";
var response2 = "";
var youHit = true;
var damageThisRound = 0;
var totalDamage = 0;
var instructModal = document.getElementById("modal-popup");

var btnGetInstructions = document.getElementById("getInstructions");
btnGetInstructions.addEventListener("click", showInstructions);

var btnCloseInstructions = document.getElementById("closeInstructions");
btnCloseInstructions.addEventListener("click", closeInstructions);

document.getElementById("getSword").addEventListener("click", pickUpSword);

var btnFight = document.getElementById("fight");
btnFight.addEventListener("click", hitDragon);

var btnRun = document.getElementById("run");
btnRun.addEventListener("click", runAway);

btnStartOver = document.getElementById("startOver");
btnStartOver.addEventListener("click", newGame);

// Display Instructions
function showInstructions() {
  instructModal = document.getElementById("modal-popup");
  instructModal.style.display = 'block';
  
}

function closeInstructions() {
  instructModal = document.getElementById("modal-popup");
  instructModal.style.display = 'none';
}

// Pick up sword and start fight
function pickUpSword() {
  if (gameOver){
    notifyGameOver();
  } else {
    response1 = document.getElementById("maintext1");
    response2 = document.getElementById("maintext2");
  
    response1.innerHTML = "Picking up the sword seems to have made the dragon angry.  He advances twoard you.";
    response2.innerHTML = "What do you want to do?"; 
    btnPickUpSword = document.getElementById("getSword");
    btnPickUpSword.style.display = 'none';
    btnFight = document.getElementById("fight");
    btnFight.style.display = 'inline-block';
  }
}

// Hit the dragon                        
function hitDragon() {
  response1 = document.getElementById("maintext1");
  response2 = document.getElementById("maintext2");
  response1.innerHTML = "";
  response2.innerHTML = "";
  if (gameOver) {
    notifyGameOver();
    return;
  }
  youHit = Math.floor(Math.random() * 2);
  if (youHit) {
    response1.innerHTML = "You hit the dragon! Congratulations!";
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    totalDamage += damageThisRound;
    if (totalDamage >= 4) {
      response2.innerHTML = "You slew the dragon!  Way to go!";
      gameOver = true;
    } else {
      response2.innerHTML = "You did " + damageThisRound + " points           worth of damage.  Total damage to the dragon is " +                 totalDamage + ".  What do you want to do?";
    }
  } else {
    response1.innerHTML = "Oops! The dragon got you!  Better luck          next life!";
    gameOver = true;
  }
  if (gameOver) {
    btnFight = document.getElementById("fight");
    btnFight.style.display = false;
    btnStartOver = document.GetElementById("startOver");                                   
    btnStartOver.style.display = 'block';
    btnRun = document.getElementById("run");
    btnRun.display = 'none';
  }
}

// Run away
function runAway() {
  if (gameOver) {
    notifyGameOver();
  } else {
    response1 = document.getElementById("maintext1");
    response2 = document.getElementById("maintext2");
    response1.innerHTML = "You will live to fight another day!";
    response2.innerHTML = "GAME OVER";
    gameOver = true;
  }
}

// Start Over
function newGame() {
  gameOver = false;
  response1 = document.getElementById("maintext1");
  response2 = document.getElementById("maintext2");
  response1.innerHTML = "You are wandering through the forest, minding your own business, when you reach a meadow.  You notice a sword and a few pieces of debris that might once have been armor near the center of the meadow.";
  response2.innerHTML = "Suddenly, a dragon swoops through the air, hovering menacingly over the meadow.  What do you do?";
  gameOver = false;
  youHit = false;
  damageThisRound = 0;
  totalDamage = 0;
  btnPickUpSword = document.getElementById("getSword");
    btnPickUpSword.style.display = 'inline-block';
    btnFight = document.getElementById("fight");
    btnFight.style.display = 'none';
 
}

function notifyGameOver() {
  response1 = document.getElementById("maintext1");
  response2 = document.getElementById("maintext2");
  response1.innerHTML = "This game is over.";
  response2.innerHTML = "Please start a new game.";
}



