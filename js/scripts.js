/*
var myName = "Francisco";
var myExpectations = "Learn how to enhance websites using Javascript"
var myHobbie = "My favorite hobbie is vinyl wrapping cars"

console.log(myName);
console.log(myExpectations);
console.log(myHobbie);

///DAY 2

//
///
////
 let dozen =12; {
   let dozen =13;
   console.log(dozen)
 }
 console.log(dozen);
///
var myName="Francisco";
let birthday = new Date('05/09/1995');


/*
const obj= new String ( "learn java");
console.log(obj);
alert(user);
let userAnswer= confirm("did you brush teeth");
console.log(userAnswer);
*/
/*
let favriotMovie = "Fast and furious ";
let favriotfood = "pupusas ";
const year = new Date('march 24, 2008');
const favFoodingrediants = ['cheese', 'flour'];

alert(favriotfood +  favFoodingrediants);
confirm (favriotMovie + year);

//homework day 2
 let userName = prompt("what is your name ");
 let userLastName = prompt("what is your last name ");
 let userBirthday = prompt( "whats your b-day ");
 let userb = new Date(userBirthday);

 console.log(userName);
 console.log(userLastName);
 console.log(userBirthday);

 alert(userName);
 alert(userLastName);
 confirm(userb);
 */




// Day 3 homework
const name = ""; //falsy
const age = 23; //truey
if(name && age ){
  alert('one exist');
}
const numAge = 32;
const stringAge = '32';
//if(!numAge == stringAge) {
  //alert('they\'re the same!');
// }
let objectOne = {
  name: "Francisco"
};
let objectTwo = {
  name: "Francisco"
};
//alert(objectOne == objectTwo); //always false, two objects can never be equal too eachother
if (numAge <= stringAge.length){
  alert("what?");
}
var myString = "apple";
var objString = new String ("apple");
//alert ( myString === objString)// displays false
//alert ( myString == objString) // display true
const limit =12;
// console.log(limit);//result 12
// limit++; //shorthand for limit =limit+1; result 13
// limit =limit+1; // result 13
// limit += 7; //result: 19 adds 12+7
// limit += 5; // result: 17 adds 12 +5

// let myNumber = "a";
// console.log(myNumber + "b");// displays ab

// let myNumber = 1;
// console.log(myNumber + 2);// displays 3
/*
let myNumber = "cheese";
isNaN(myNumber) = 77;
console.log(!isNaN(myNumber));
*/
/*
let firstNumber = parseInt( prompt("give number", "10"));
let secondNumber = parseInt( prompt("give number", "10"));
alert(firstNumber + secondNumber);

if (firstNumber<secondNumber){
  alert("yay");
}
else alert("boo");
*/ 
let firstName = prompt('what is your first name ', 'tom');
switch (firstName.toLowerCase()) {
  case 'tom':
    alert('hello Tom!');
    break;
  case 'john':
  case 'henry':
  case 'peter':
    alert('common name');
    break;
  default:
  alert('never heard of it ');
  break;
}
