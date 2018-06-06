

// Creates an array of things you need or want to do this weekend by collecting three todos from the user.
let todo1 = prompt("first thing you will do this weekend: ", "program ");
let todo2 = prompt("second thing you will do this weekend: ", "tint tailights ");
let todo3 = prompt("third thing you will do this weekend: ", 'vinyl wrap roof ');
var todo = [todo1, todo2, todo3];

// Using a for loop, change the items in the array by adding days they should be completed by to each index.
for( var i = 0; i < todo.length; i++){

  todo[0] = [  "saturday"] ;
  todo[1] = ["friday" ];
  todo[2] = ['sunday' ];
};
alert(todo);
// Using a while loop, find the task that will take the longest and log it to the console.
var todo = [todo1, todo2, todo3];
 var i =0;
 while ( i < todo.length ){
   todoLongest = todo[2]
   i++;
 };
console.log(todoLongest);
// Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
var todo = [todo1, todo2, todo3];
 var i = 0;
 var text = "";
 let todDone =[];
do {

  text += todo[i] + " done ";
  i++;

}
while ( i < todo.length &&  ( todo[i] != todo[2]));
// Finally, alert all the tasks that are marked done in the todo array.
alert (text);

