// let body = document.getElementsByTagName('body'); //array
//
// let classes = document.getElementsByClassName("my-header");
//
// let id = document.getElementById("my-paragraph");
//
// //Newer methods:
// let tag = document.querySelector('body');
//
// let myClass = document.querySelector('.my-header');
//
// let myId = document.querySelector('#my-paragraph');
// console.log(myId);
//
// let tags = document.querySelectorAll('body');
//
// //TRY IT OUT
// function queryDom(methodName, element) {
//   switch(methodName.toLowerCase()) {
//     case 'getelementsbytagname':
//       console.log(document.getElementsByTagName(element));
//       break;
//     case 'getelementsbyclassname':
//       console.log(document.getElementsByClassName(element));
//       break;
//     case 'getelementbyid':
//       console.log(document.getElementById(element));
//       break;
//     case 'queryselector':
//       switch(requestQuerySelectorType()) {
//         case 'class':
//           console.log(document.querySelector(`.${element}`));
//           break;
//         case 'id':
//           console.log(document.querySelector(`#${element}`));
//           break;
//         default:
//           console.log(document.querySelector(element));
//           break;
//       }
//       break;
//       case 'queryselectorall':
//       switch(requestQuerySelectorType()) {
//         case 'class':
//           console.log(document.querySelectorAll(`.${element}`));
//           break;
//         case 'id':
//           console.log(document.querySelectorAll(`#${element}`));
//           break;
//         default:
//           console.log(document.querySelectorAll(element));
//           break;
//       }
//       break;
//     default:
//       break;
//   }
// };
//
// function requestQuerySelectorType() {
//   return prompt("Which of the three query types do you want me to use?", "please answer 'class', 'id', or 'tag'");
// };
//
// queryDom(prompt('what method do you want to use?'), prompt('what do you want to query for?'));
// let myClass = document.querySelector('.my-header');
//
// myClass.addEventListener(
//   'click', //first arg
//   e =>{
//     alert('you clicked on me!!');
//   }
// )

let button =document.querySelector('button');
let div = document.querySelector('div');
let h1 =document.querySelector('h1');


button.addEventListener('click', e =>{
e.target.textContent ="goodbye cats";
});

div.addEventListener('mouseenter', e =>{
e.target.style.backgroundColor = "#e40007";
console.log(e);
});

h1.addEventListener('mouseleave', e =>{
e.target.style.color = "#00ffff"

});
