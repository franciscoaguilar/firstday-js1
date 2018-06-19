let button =
document.querySelector('button');
let div = document.querySelector('div');
const body = document.querySelector('body');
button.addEventListener('click', e => {
  e.target.textContent = "Goodbye cats!"
});

div.innerHTML = "<p>dont really want to use this, user can send you malicious software but can be used to generate things example, this is used in wordpress to generate a button when you drag an drop</p>";


//create element
let newH1 = document.createElement('h1');
console.log(newH1);
newH1.textContent = "Login here!!" //.textContent adds text
// body.appendChild(newH1)//appendChild adds to your element
newH1.classList.add('text-center')
;
newH1.className = "text-center";
body.insertBefore(newH1, div);//overall patrent you want to insert element into, calling parent (body), what you are adding/new node (newH1), refrence node (div)

div.id = "red_text";
div.classList.add('text-center');

div.addEventListener('click', e =>{
  div.classList.toggle('text-center');
  // console.log(div.classList.contains('text-center'))
  div.classList.replace('green-background');
})
// create image tag
myImg = document.createElement('img')
;
// set sort setAttribute
myImg.setAttribute('src', 'https://i.ytimg.com/vi/y8-R1H9e1j0/maxresdefault.jpg');
// add the image
div.appendChild(myImg);
console.log(myImg);
// let body = document.querySelector('body'); //refrence to body tag
// for ( i= 0; i <= 100; i++) {
// let p = document.createElement('p');
//  if (  i % 3 ==0 && i % 5 ==0){
//   p.textContent= 'fizzbuzz'
// }
//  else if ( i % 3==0){
//    p.textContent = 'fizz';
//  }
//  else if ( i % 5==0){
//    p.textContent = 'buzz';
//  }
//  else { p.textContent = i;
//  }
// body.appendChild(p);
// }
