// let body =
// document.getElementsByTagName('body');
// // array
// // console.log(body[0]);
// let classes =
// document.getElementsByClassName('my-header');
// // console.log(classes[0]);
// let id =
// document.getElementById('my-paragragh');
// console.log(id)
//
// // Newer methods:
// let tags = document.querySelector('body');
// console.log(tag);
//
// let myclass =
// document.querySelector('.my-header');
// console.log(myclass);
//
// let myId = document.querySelector('#my-paragragh');
// console.log(myId);
//
// // return array with all that you are looking for
// let tags =
// document.querySelectorAll('body');


function queryDom(methodName, element){
  switch(methodName.toLowerCase()){
    case 'getelementbytagname':
      documenet.querySelector(element);
      break;
      case 'getelementclassname':
        documenet.querySelector(element);
        break;
      // add 4 more
      case 'queryselector' :
      document.querrySelector(`.${element}`);
      break;
    default;
    break;
  }

}
myClass.addEventListener('click')
