// SQUARES A NUMBER
let usersNumber = parseInt(prompt('give a number to square', '6'));
let answer = squareNumber(usersNumber);


function squareNumber(number){
  if ( !isNaN(number)){
  return number * number;
 }
   else{
     alert("NaN");
     let usersNumber = parseInt(prompt('give a number to square', '6'));
     let answer = squareNumber(usersNumber);
     alert(answer);
  }
};
alert(answer);


// CAPITILIZE THE FIRST LETTER OF A STRING AND ADDS A PERIOD IF IT DOESNT ALREADY HAVE IT
function capFirstletter(word){
  if (usersWord.endsWith('.')){
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
  else {
    return   word.charAt(0).toUpperCase() + word.substring(1) + '.';
  }

};
let usersWord = prompt('give a word and ill capitilize the first letter', 'apple.');
let upperWord = capFirstletter( usersWord);
alert(upperWord);

SPLITS WORD IN HALF AND REVERSES IT
function flipsWord (flip){
  return flip.substring(flip.length/2) + flip.substring(0, flip.length/2) ;
}

let askFlippedWord = prompt('ADDS FIRST HALF OF THE WORD TO THE BACK', 'word');
let resultsFlippedWord = flipsWord(askFlippedWord);
alert (resultsFlippedWord);

// CHECKS IF THE WWORD IS PALINDROME
function checkIfpalindrome(palin){
   let reverse = palin.split("").reverse().join("");
   return reverse == palin;
 }
let askPalin = prompt('give a word to check if it is palindrome', 'civic');
let resultsFlipped = checkIfpalindrome(askPalin);
alert(resultsFlipped);
