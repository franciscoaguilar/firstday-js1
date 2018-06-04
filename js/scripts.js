/*
// HW DAY 3
let firstName = prompt('what is your first name ', 'tom');
let userColor = prompt("whats your fav color: red, orange, yellow, green, blue, pink, purple, black, white, and grey ");
switch (userColor.toLowerCase()){
  case 'red':
  alert(firstName + " i love that color");
  break;
  case 'orange':
  alert(firstName + " oranges are yummy ");
  break;
  case 'yellow':
  alert(firstName + " have yu ever slipped on a bannnana ");
  break;
  case 'green':
  alert(firstName + " green is an okay color");
  break;
  case 'blue':
  alert(firstName + " the color of the sky ");
  break;
  case 'pink':
  alert(firstName + " okay you choose pink");
  break;
  case 'purple':
  alert(firstName + " thats the color of barnie");
  break;
  case 'black':
  alert(firstName + " black goes with anything");
  break;
  case 'white':
  alert(firstName + " white is a boring color");
  break;
  case 'grey':
  alert(firstName + " grey cars are nice");
  break;
  default:
  alert(firstName + " hey that was not a color ");
  break;
}
*/
 /* var favoriteMovie = ['Star Wars VI', '1983'];
   var secondFavorite = ['Return of the King', '2003'];
   var thirdFavorite = ['Equilibrium', '2002'];
   var myFavoriteMovies = [];
   var movieYears = [];

    myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
 movieYears.push(myFavoriteMovies[0][0], myFavoriteMovies[1][0],myFavoriteMovies[2][0]);
 alert(myFavoriteMovies);
 alert(movieYears);
 */


var topMovie1 =['1: coco ', 'Miguel '];
var topMovie2 =['2: instructions not included ', 'Valentin '];
var topMovie3 = [ '3: spiderman ', 'peter '];
var topMovie4 = ['4: avengers ', 'too many to name '];
var topMovie5 = ['5: fast and furious ', 'bryan '];
var topMovies = [];
var topMoviestitles = [];
topMovies.push(topMovie1, topMovie2, topMovie3, topMovie4, topMovie5);
topMoviestitles.push(topMovies[0][0], topMovies[1][0], topMovies[2][0], topMovies[3][0], topMovies[4][0], );
alert(topMoviestitles);
var favAndleastFav =[];
favAndleastFav.push(topMovie1[0], topMovie5[0]);
console.log("favrot and least " + favAndleastFav);
alert(topMovies.length);


var i, len, text;
for (i = 0, len = topMovies.length, text = ""; i < len; i++) {
    var found= Array.prototype.find(topMovie1);
}
console.log(found);
