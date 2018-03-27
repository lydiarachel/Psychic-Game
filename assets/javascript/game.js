//my variables for the game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
//need an array for the human guesses
var guessesSoFar = [];
//alphabet letters to chose from
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"];
//this is what a human would pick 
var humanGuess = null;
//makes the computer choose a random letter
var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerGuess);

//function events
document.onkeyup = function(event) {
    //take in the human guess that I set to null above, records it, and saves it using the charCode property
    //it returns the fromCharCode will display the character value of the key that triggered the onkeyup event
    //the toLowerCase, coverts a string to lower case letters
    var humanGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    //the push method to add new items to the array and returning a new length
    guessesSoFar.push(humanGuess);

    //if condition
    //if what the human guesses is equal to what the computer guesses, wins increases 
    //by 1 and an alert pops up
    //it's called an increment operator
    if (humanGuess === computerGuess) {
        wins++;
        alert("You are pretty freakin' awesome!");
        //resets guesses left back to 9
        guessesLeft = 9;
        //guesses in the so far array are reset back and they can start again
        guessesSoFar.length = 0;
    }

    //else if condition
    //if the human guesses left equal zero, then losses increases
    //by 1 and an alert pops up
    //it's called an increment operator
    else if(guessesLeft === 0) {
        losses++;
        alert("Sucka.. you lose McFly.  I suppose you deserve another chance. Don't screw this one up!");
        //resets guesses left back to 9
        guessesLeft = 9;
        //guesses in the so far array are reset back and they can start again
        guessesSoFar.length = 0;
    }

    //else if condition
    //if the human guess does not equal the computer guess
    //reduce the number of guesses left by one
    //it's called a decrement operator
    else if(humanGuess !== computerGuess){
        guessesLeft--;
    }


    //display alllll of dis in HTML
    var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "</p>Guesses Left: " +
    guessesLeft + "<p> Your Guesses so far: " + guessesSoFar + "</p>"; 

    //html into game div id
    document.querySelector("#mygame").innerHTML = html;
}
