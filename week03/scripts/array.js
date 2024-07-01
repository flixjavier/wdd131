let scores = [100,72,83,94,88,87];

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana'];

let ascore = scores[0]; 

console.log(ascore);

scores[0] = 99;

console.log([scores]);

//print every item in the array

for (let index = 0; index < scores.length; index++) {
  console.log(scores[index]);
  
}

//forEach method:s a method that allows you to execute a function on each item in an array. 

names.forEach(name => {
  console.log(`Hello, ${name}`);
})
//length property: return the number of elements inside an array.

console.log(names.length);

//Array Methods

//push: adds an element to the end of an array

names.push("Felix");
console.log(names);
//pop: removes the last element of an array
names.pop();
console.log(names);
//shift removes the first element of the array
names.shift();
console.log(names);
//unshift adds an element to the beginning of the array
names.unshift("Javier");
console.log(names);
//slice:Cut out a portion of the array starting at an index for a given length, end not included 
console.log(names.slice(1,3));

//splice: removes an element from an array from the index that you choose, end not included, and you can add more elements in that space
console.log(names.splice(0,2, "Silvia", "Lizzly"));

//join: transform the array into a single string with a comman and space delimiter option
console.log(names.join('* '));
//reverse: reverses the order of the array
console.log(names.reverse());

//concat merge two or more arrays into a single;
const fruits1 = ['apple', 'banana'];
const fruits2 = ['cherry', 'orange'];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["apple", "banana", "cherry", "orange"

//indexOf() This intrepid function searches for a specified element in your array and returns its index

const fruits = ['apple', 'banana', 'cherry', 'banana'];
const bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex); // Output: 1