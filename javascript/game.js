
var wins = 0;
var losses = 0;
var pGuesses = 10; 
var pGuessRemain = 10;
var pGuessUsed = [];
var letterToGuess = null;


var pcLetterDb = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m','n','o','p','q','r','s','t',
'u','v','w','x','y','z'];


var pcMemGuess = pcLetterDb[Math.floor(Math.random() * pcLetterDb.length)];


var updatePGuessRemain = function(){
	 document.querySelector('#remain').innerHTML = "Guesses Left: " + pGuessRemain;
	
};

var updatePGuessUsed = function(){
	document.querySelector('#used').innerHTML = "Your Guesses so far: " + pGuessUsed.join(", ");
	
};

var updateLetterToGuess = function(){
	this.letterToGuess = this.pcLetterDb[Math.floor(Math.random() * this.pcLetterDb.length)];
};


var resetGame = function(){
	pGuesses = 10;
	pGuessRemain = 10;
	pGuessUsed = [];

	updatePGuessRemain();
	updatePGuessUsed();
	updateLetterToGuess();
}
	updatePGuessRemain();
	updateLetterToGuess();

var resetWholeGame = function(){
	wins = 0;
	losses = 0;
	pGuesses = 10; 
	pGuessRemain = 10;
	pGuessUsed = [];
	letterToGuess = null;
	document.querySelector('#win').innerHTML = "Wins: " + "";
	document.querySelector('#lost').innerHTML = "Losses: " + "";
}


document.onkeyup = function(event){
	pGuessRemain--;
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

	pGuessUsed.push(playerGuess);
	updatePGuessRemain();
	updatePGuessUsed();

	if (pGuessRemain> 0){

            if (playerGuess == letterToGuess){

                wins++;

                document.querySelector('#win').innerHTML = "Wins: " + wins;

                alert("Yes, you have psychic powers similar to mine!");

                resetGame();

            }

        }else if(pGuessRemain == 0){
            losses++;
            document.querySelector('#lost').innerHTML = "Losses: " + losses;

            alert("May be as of now, you do not have psychic powers like mine, please try again?");

            resetGame();

}

if(wins === 5){
	alert("You are winner!!!");
	resetWholeGame();
}
if(losses === 5){
	alert("You lost the game!")
	resetWholeGame();
}


};