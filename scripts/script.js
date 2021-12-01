
/////
let word=prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();
// note the switch toUpperCase(), we want to always work in upper case letters to avoid confusing 'a' and 'A' as unequal.
let revealedLetters = new Array(word.length); // creates an array with as many elements as word has characters. Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
revealedLetters.fill(false);

const maxStrikes = 6; 
let strikes = 0; // the number of incorrect guesses made so far

let strikeLetters = new Array(maxStrikes); // this will contain every letter that has been incorrectly guessed.
////
var alphabet1= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var wordscan;
var lettersguessed=[];//list of input used

console.log(alphabet1);





let testword=null;
var stringstrikesletters="";
//presetword();
document.getElementById("maxStrikes").innerHTML=maxStrikes;
//restrict input to 1 element
document.getElementById("myText").maxLength = "1";
drawWordProgress(); // run this now, to draw the empty word at the start of the game.

// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters(letter1) {
    // your DOM manipulation code here
    // should create a String from strikeLetters and put that into the content of some element.
    strikeLetters[strikes]=letter1;
    
    var access2=document.getElementById("lettersinput");
    var stringsample=strikeLetters.join(' ');
    var stringsam2="Invalid Letters: ";

    access2.innerHTML=stringsam2+stringsample;
}

// Manipulates the DOM to write the successfully guessed letters of the word, replacing them with dashes if not yet guessed
function drawWordProgress() {
    // your DOM manipulation code here
    // should iterate over revealedLetters, and if the value at each index is truthy, print the corresponding letter from word. Otherwise, it should print a -.
    var updateword=document.getElementById("thisword");
    testword=word.split('').map(letter =>(lettersguessed.indexOf(letter)>=0 ? letter: " _ ")).join('');
    console.log(testword);
    updateword.innerHTML=testword; 
    //update
    //for every element in lettersguessed
    var value1=testword;
    
    for(var i=0; i<lettersguessed.length; i++){
        for(var n=0; n<word.length;n++){
            if(word[n]=lettersguessed[i]){
                value1[n]=lettersguessed[i];
            }
        }
    }
    if(value1 == word){
        alert("You got it!");
        null;
    }
    
}

// Manipulates the DOM to update the image of the gallows for the current game state.
function drawGallows() { 
    // your DOM manipulation code here 
    // should update an <img> element in the appropriate hangman.html section to point to "images/strike-"+strikes+".png"
    document.getElementById("hangmanPic").src ="images/strike-"+strikes+".png";
    
}
function processGuess() {
    let guess =document.getElementById("myText").value.toUpperCase(); // the value of the <form>'s <input> element, toUpperCase()!
    if(isNaN(guess)){
        if (strikes < maxStrikes) {
         // game logic goes here
         //if that letter is already guessed ot not
            if(lettersguessed.indexOf(guess)===-1){
                lettersguessed.push(guess);
                if(word.indexOf(guess) >=0){
                    drawWordProgress();
                }else{
                    strikes++;
                    drawGallows();
                    drawStrikeLetters(guess);
                    document.getElementById("strikes").innerHTML=strikes;
                }
            }else{
                alert("try again(no penalty)")
                null;
            }
        } else{
            alert("The game is over!"); 
            alert("The answer is: "+ word);
        }
    }else{
        alert("try again(no penalty)");
    }
}