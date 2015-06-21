
window.onload = function play() {

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

var word = document.querySelector('wordbox');
var letter = document.querySelector('.letter').value;
var guessInput = document.querySelector('.guess-input').value;
var remainingGuesses = document.querySelector('.remaining-guesses').value;
var guessedLetters = document.querySelector('.guessed-letters').value;
var answerDisplay = document.querySelector('.answer-display').value;

//filters words with 3+ letters for potential selection into an array
function filterWords() {
  var filteredWords = [];
    if(hangmanWords.length >= 3){
      filteredWords.push();
    }
}

//chooses 1 random word from filtered selection
function chooseWord(){
  var word = parseInt(Math.floor(Math.random() * filteredWords.length));
    return word;
};

///TEST FUNCTIONS AGAIN FOR FUNCTIONALITY FROM HERE /////

//sets correct # of blanks according to chosen word
function setBlanks (){
	for(i=0; i < word.length; i++){
		word[i] = word.charAt(i);
		word.push[i] = "_ ";
	}
}

// split word into letters0
function eachLetter() {
  var word = word.split('');
  var chosenWordArray = [];
// ? below //
  for (i=0; i < word.length; i++) {
    chosenWordArray.push(('<li class="letter">') + word[i] + '</li>');
  }

  word.innerHTML = chosenWordArray.join("");

  chosenWordArray = word;
}


//initiates guess check instead of submitting form
document.querySelector('submit-button').addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    checkGuess();
});

function checkGuess () {

  if (parseInt(guessInput.value) === chosenWordArray[i]) {
      answerDisplay.innerHTML = "Correct! There is a " + guessInput + "." +
          "What is your next guess?";
  } else {
      answerDisplay.innerHTML = "Sorry. There is no " + guessInput + ". Please try again.";
  }

remainingGuesses -= 1;
//need to set input field empty //

}

//add guessed letter into word-in-progress
function pushGuess () {
      word.push(guessInput);  ///"word" not correct variable?
}


//sets maximum number of user guesses
remainingGuesses.textContent = '15';

if (remainingGuesses === 0) {
    answerDisplay.innerHTML = "Game Over! The word was" + word + ".";
  }
}

   // reset game

//  document.getElementById('reset').onclick = function() {
//    correct.parentNode.removeChild(correct); //rename these variables
//    letters.parentNode.removeChild(letters);
//    play();
//  }
