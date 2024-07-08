let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

//array.filter()

let namesB = names.filter(name => name.startsWith("B"));
console.log(namesB);

//array.map()

let namesLength = names.map((name) => {
  return name.length;
});
console.log(namesLength);

//array.reduce()
/* The initial value of the reduction is set to 0. Inside the reducer function, total represents the accumulated sum of string lengths, and name represents each individual name in the array. The reducer function adds the length of each name to the total in each iteration. (like any accumulator, total += name.length). */

let averageStringLength = names.reduce((acc, name) => acc + name.length, 0) / names.length;

console.log(averageStringLength);