var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var word = document.querySelector('.word');
var blank = document.querySelector;('.blank');
var guessInput = document.querySelector('.guess-input');
var remainingGuesses = document.querySelector('.remaining-guesses');
var guessedLetters = document.querySelector('.guessed-letters');

//filters words with 3+ letters for potential selection into an array
function filterWords() {
  var filteredWords = [];
    if(hangmanWords.length > 2){
      filteredWords.push();
    }
}

//chooses 1 random word from filtered selection
function chooseWord(){
  var word = Math.floor(Math.random() * filteredWords.length);
    return word;
};

// split word into letters
function


//sets correct # of blanks according to chosen word
function setBlanks (){
	for(i=0; i < word.length; i++){
		word[i] = word.charAt(i);
		word.push[i] = "_";
	}
}

//initiates guess check instead of submitting form
submit-button.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    checkGuess();
});

///what's happening here?
for (i=0;i<word.length;i+=1) {
  blankArr.push("_ ");
  blankArr.join(" ");
  var blankArrString = blankArr.toString();
  var blankArrEdited = blankArrString.replace(/,/g," ");
  word.innerHTML = blankArrEdited;
}

function checkGuess () {

if (parseInt(guess.value) === word) {
    answerDisplay.innerHTML = "Correct! There is a " + letterGuess + "." +
        "What is your next guess?";
    return guess();
}
else (guess.value !== word) {
    answerDisplay.innerHTML = "Sorry. There is no " + guessedLetters + ". Please try again.";
    return guess();
}
guess += 1;
}

//add guessed letter into word-in-progress
function pushGuess () {
      guessedArr.push(guess);
      var guessedArrString = guessedArr.toString();
      var guessedArrEdited = guessedArrString.replace(/,/g," ");
      lettersGuessedClass.innerHTML = lettersGuessedArrEdited;
}


//sets maximum number of user guesses
document.querySelector('.guess-count').textContent = '10';

if (.guess-count === 10) {
    answerDisplay.innerHTML = "Game Over! The word was" + word + ".";
  }
}
