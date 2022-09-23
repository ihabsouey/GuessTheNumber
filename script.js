finalNumber = document.getElementById("finalNumber")
highOrLow = document.getElementById("highOrLow");
score = document.getElementById("score");
highScore = document.getElementById("highScore");
numberGuess = document.getElementById('numberGuess');
cheatPlace = document.getElementById("cheatPlace");
cheatBtn = document.getElementById("cheatBtn");

randomNumber = Math.floor(Math.random() * 20) + 1;

cheated = false ;
cheatedOnce = false ;

function cheat(){
    if (cheated == false){
        cheatBtn.style.backgroundColor = "red";
        cheatPlace.innerHTML= randomNumber;
        cheated = true;
        cheatedOnce = true ;

    }
    else{
        cheatBtn.style.backgroundColor = "white";
        cheatPlace.innerHTML= "Between 1 and 20";
        cheated = false;
    }
}
function check() { 
    console.log(randomNumber);
    numberGuessValue =Number(numberGuess.value) ;
    
    if (numberGuessValue != randomNumber) {
        score.textContent = Number(score.textContent) - 1 > 0 ? Number(score.textContent) - 1 : 0;
        if ( numberGuessValue > randomNumber) {
            
        highOrLow.innerHTML =  numberGuessValue -1 > randomNumber ? "📉 Too high!" : "📉 a little bit high!";
        }
        else {
            highOrLow.innerHTML = numberGuessValue +1 < randomNumber ? "📈 Too low!" : "📈 a little bit low!";
        }
    }
    else  {
        
        highOrLow.innerHTML = cheatedOnce ? "🎉You guessed it cheater 😈!" :  "🎉 You guessed it!";
        finalNumber.innerHTML = randomNumber;
        highScore.textContent = Number(score.textContent) > Number(highScore.textContent) ? score.textContent : highScore.textContent;
        document.body.style.backgroundColor = "green";
    }


}
function again(){
    numberGuess.value = "";
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score.textContent = 20;
    highOrLow.innerHTML = "Start guessing...";
    finalNumber.innerHTML = "?";
    document.body.style.backgroundColor = "#222";
    cheatPlace.innerHTML= "Between 1 and 20";
    cheatBtn.style.backgroundColor = "white";
    cheated = false;
    cheatedOnce= false ;
    console.log(cheated);
}