//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;//the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join()// set the innerHTML

const gradesLetters = ['A', 'B', 'A'];

function convertGradesToPoints(grade){
  let points = 0;
  if (grade === 'A') {
    points = 4;
  } else if (grade == 'B'){
    points = 3;
  } else {
    return points;
  }
}

const gpaPoints = gradesLetters.map(convertGradesToPoints);

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let fruits6Characters = fruits.filter((fruit) => fruit.length < 6);

console.log(fruits6Characters);

let numbers = [12, 34, 21, 54];

let luckyNumber = 21;

let luckyIndex = numbers.indexOf(luckyNumber);
