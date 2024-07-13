/* forEach():
Accepts a callback function and executes the given function once for each element of the array.*/

const nums = [1, 2, 3, 4, 5];
nums.forEach(function (num) {
	//function(num) is the callback
	console.log(num);
});

const employees = [
  {
      id: 101,
      name: 'Alex',
      sal: 10000
  },
  {
      id: 102,
      name: 'Clark',
      sal: 13000
  },
  {
      id: 103,
      name: 'John',
      sal: 22000
  },
  {
      id: 104,
      name: 'Tony',
      sal: 20000
  }
]
employees.forEach(function(emp) {
  console.log(emp.name.toUpperCase());
});

employees.forEach((emp) => {
  console.log(`Name: ${emp.name}, Salary: ${emp.sal}`)
})

/* map()
The map() function creates a new array with the result of calling the callback function on each element of array. You need to store the result into a variable*/

const squareNums = nums.map(function(num) {//here the return from map would be storage in an array
  return num * num;
});

console.log(squareNums);

/* Create an array of all employee names by fetching employee names from a given object. */

let employeenames = employees.map((emp) => {
  return emp.name;
});

console.log(employeenames);


/* Make abbreviations */

const words = ['lol','brb','btw','lmk','g2g'];

const abbreviations = words.map((word) => {
  return word.toUpperCase().split('').join('.');
});
console.log(abbreviations);

// Arrow function
const square = (num) => {
  return num * num;
}
// Without parenthesis
const square2 = num => {
  return num * num;
}
// Implicit Return - one liner
const square3 = num => num * num;

console.log(square(2),square2(2),square3(2));

/* Example-1:
const nums = [1,2,3,4,5];
nums.forEach(num => console.log(num * num));
Example-2:
const nums = [1,2,3,4,5,6];
const squareNums = nums.map(num => num * num);
console.log(squareNums); // [1, 4, 9, 16, 25, 36]
Example-3:
const nums = [11,2,3,5,4,7,8,10];
const parityList = nums.map(num => (num%2===0 ? 0 : 1));
console.log(parityList); // [1, 0, 1, 1, 0, 1, 0, 0] */

/* find()
Return the first element from the array which satisfies the given callback function. */
const names = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];

const result = names.find(name=>name.includes('Sharma'));

console.log(result);

//2: Find employee who earn more than 20,000

const employee20000 = employees.find(emp => emp.sal>=20000);

console.log(employee20000);

/* filter()
Creates a new array with all elements that pass the test implemented by the provided callback function. */

const result2 = names.filter(name => name.includes('Sharma'))// returns into in array

console.log(result2);

//Filter employees by salary

const filtered = employees.filter(emp => emp.sal >= 20000);

console.log(filtered);

/* every()
This function checks that every item in the array passes the callback function. It returns boolean value. */
//const words = ['lol','brb','btw','lmk','g2g'];
// Check all words starts with l
console.log(words.every(word => word[0] === 'l')) // False
// Check all words ends with g
console.log(words.every(word => word[word.length-1] === 'g')) // false


// Check if all words start with 'l'
console.log(words.every(word => word[0] === 'l')); // true

// Check if all words end with 'g'
console.log(words.every(word => word[word.length - 1] === 'g')); // true

const words2 = ['kia','karen','king','korean'];
// Check all words starts with k
console.log(words2.every(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words2.every(word => word[words.length-1] === 'g')) // false