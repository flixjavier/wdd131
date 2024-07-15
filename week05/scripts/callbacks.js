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

/* some()
This method is much similar to the every() method but the difference is that it returns true if any of the item(s) in the array passes the given function. */

// Check all words starts with k
console.log(words2.some(word => word[0] === 'k')) // true
// Check all words ends with g
console.log(words2.some(word => word[words.length-1] === 'g')) // true


/* sort() Method in JavaScript
The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. The default sorting order is according to string Unicode code point */

/* Natural Order Sorting (Default Behavior)
When you call sort() without a compare function, it sorts the elements as strings. This means that even if your array contains numbers, they will be treated as strings and sorted character by character. */

const nums2 = [1, 20, 10, 22, 30, 44, 100, 11];
console.log(nums2.sort());

/* In this example:

The number 1 is considered as the string "1".
The number 20 is considered as the string "20".
"1" is compared with "20", and so on.
When compared as strings, "10" comes before "100" because the first character ("1") is the same, but "0" comes before "0". Similarly, "11" comes after "10" but before "20". */


/* Custom Sorting with Compare Function
To sort numbers in a numerical order (either ascending or descending), you need to provide a compare function to the sort() method.
 */

//array.sort(compareFunction)
//Ascending

console.log(nums2.sort((a,b) => a-b));

/* a - b compares two numbers.
If a is less than b, the result is negative, so a comes before b.
If a is equal to b, the result is zero, so their order doesn't change.
If a is greater than b, the result is positive, so a comes after b. */

//Descending

console.log(nums2.sort((a,b)=>b-a));

/* reduce()
It executes a reducer method on each element of array and results in a single value. */

//Example — 1: Sum of array elements

let output = nums.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(output);

/* Call   accum currentValue return */
/* first    1          2         3     */
/* second   3          3         6     */
/* third    6          4         10     */
/* forth    10         5         15     */

/* Observe the execution figure, In the first call first value is considered as accumulator and iteration starts from second value.

From the second call whatever the return value is stored in the accumulator and the next value is picked as the current value. */


/* Example 3: Tallying Votes */

const votes = ['y', 'y', 'n', 'y', 'n', 'n', 'n'];
const result3 = votes.reduce((tally, vote) => {
   tally[vote] = (tally[vote] || 0) + 1;
   return tally;
}, {}); // Initial value: {}
console.log(result3); // {y: 3, n: 4}

/* Explanation:

Initial Setup:

The reduce() method is used to tally the votes in the votes array.
The reduce() method takes two arguments: a callback function and an initial value for the accumulator.
Callback Function:

The callback function in this example is (tally, vote) => { tally[vote] = (tally[vote] || 0) + 1; return tally; }.
tally is the accumulator that holds the tally of votes so far.
vote is the current element (vote) being processed in the array.
Tallying Votes:

tally[vote] = (tally[vote] || 0) + 1 checks if tally[vote] is already defined.
If tally[vote] is undefined (i.e., the vote hasn't been tallied yet), it defaults to 0.
It then increments the count of the vote by 1.
Iteration:

The iteration starts with an empty object {} as the initial tally.
For each vote in the votes array, it updates the tally object with the count of each vote type ('y' or 'n').
Result:

After iterating through the entire array, tally holds the counts of each vote type.
The result is { y: 3, n: 4 }, indicating there are 3 'y' votes and 4 'n' votes. */
