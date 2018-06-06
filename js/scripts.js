//let products = [["blanket", [12.99, 10.99], "the best blanket ever"], ['rattle', 4.99, "it rattles man..."], ['diapers', 12.99, "they catch the doo doo"]];
//let i = 0; //control statement i= index
/*
while (i < products.length ){ //paramaters
  //console.log(products[i]);
  i++; // incremeentor
}
//console.log(i);
*/
//var i = 0;
/*
for (let i = products.length - 1 ; i >= 0; i-- ){ // increments backwards, -1 so that you start on the eneding array
  console.log(products[i]);
}
*/
/*
var newProduct = ['squeeky Toy', 19.99, 'really good toy.'];
do{
//  if (i === 1) products[i].push(newProduct);
//add newProduct to psecond member of products array
  i++;

} while( i < products.length)
 //console.log(products);
*/
/*
products.forEach((product) => {
  console.log(product);
});
*/
// FUNCTIONS DAY 5
/*
function capitalCase (string){//FUNCTION DEFENITION: PLACEHOLDER arguments in a function defenitin has no value until you call it
 let words = string.split(' ');
 words.forEach(word => {
  let letters = word.split('');
  let capped = letters[0].toUpperCase()// splitting the indivual word and splitting it into itsletters
  letters.splice(0,1, capped); //replaces letter with capital
});
  return words.join(' ');
};

let newString = capitalCase("peter piper"); // FUNCTION CALL: every function call should have semicolin
console.log(newString);
function(stuff){ //ananyomus function
  console.log(stuff);
}
let myCoolFunction = (stuff) => {// simpliest fat arrow function
  console.log(stuff);
}


function dived(arg1, arg2) {
  return arg2 / arg1;
}
*/



// tryy it out
// function dogAge(years){
//  if (!isNaN(years))
//   return = years * 7;
// };
// alert(dogAge(parseInt(prompt("how old is your dog in years?", "3"))));
//Try it out # 2
// var topMovie1 =['1: coco ', 'Miguel '];
// var topMovie2 =['2: instructions not included ', 'Valentin '];
// var topMovie3 = [ '3: spiderman ', 'peter '];
// var topMovie4 = ['4: avengers ', 'too many to name '];
// var topMovie5 = ['5: fast and furious ', 'bryan '];
// var topMovies = [];
// var topMoviestitles = [];
// topMovies.push(topMovie1, topMovie2, topMovie3, topMovie4, topMovie5);
// topMoviestitles.push(topMovies[0][0], topMovies[1][0], topMovies[2][0], topMovies[3][0], topMovies[4][0], );
// alert(topMoviestitles);
// var favAndleastFav =[];
// favAndleastFav.push(topMovie1[0], topMovie5[0]);
// console.log("favrot and least " + favAndleastFav);
// alert(topMovies.length);


let todo1 = prompt("first thing you will do this weekend: ", "program ");
let todo2 = prompt("second thing you will do this weekend: ", "tint tailights ");
let todo3 = prompt("third thing you will do this weekend: ", 'vinyl wra roof ');


var todo = [todo1, todo2, todo3];


for( var i = 0; i < todo.length; i++){

  todo[0] = [  "saturday"] ;
  todo[1] = ["friday" ];
  todo[2] = ['sunday' ];
};
alert(todo);

var todo = [todo1, todo2, todo3];
 var i =0;
 while ( i < todo.length ){
   todoLongest = todo[2]
   i++;
 };
console.log(todoLongest);

var todo = [todo1, todo2, todo3];

 var i = 0;
 var text = "";
 let todDone =[];
do {

  text += todo[i] + " done ";
  i++;

}
while ( i < todo.length &&  ( todo[i] != todo[2]));
alert (text);
