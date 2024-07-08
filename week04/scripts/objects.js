let medications = {
	'Lactated_Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
}
/* console.log(medications["Lactated Ringers"]);
let aName = medications["Lactated Ringers"];
let anAmount = medications['Lactated Ringers']['amount'];
let anId = medications['Lactated Ringers']['id'];
let anExpirationDate = medications['Lactated Ringers']['expDate']; */



//dot notation

let aName = medications.Esomeprazole;
let anAmount = medications.Esomeprazole.amountType;
let anId = medications.Esomeprazole.id;
let anExpirationDate = medications.Esomeprazole.expDate;

console.log(anAmount, 
  anId,
  anAmount, 
  anExpirationDate);

medications.Esomeprazole.amount = 35000;

console.log(medications.Esomeprazole);


/* Suppose you had a user interface where the user selected the name of the medication to display the expiration data for. Now you have a problem. You have to put what the user selected into a variable in order to be able to use it. Let's say you put it in a variable called 'selectedMedication'. The temptation is to think that this code would work.*/

//let aBestByDate1 = medications.selectedMedication.expDate
/* It doesn't. This code does work though. */

//let aBestByDate2 = medications[selectedMedication]['expDate']
/* This code works too. It combines both approaches and is probably the cleanest code to solve this problem. */

//let aBestByDate3 = medications[selectedMedication].expDate

/* Why the first option does not work?   */

/* The first option, let aBestByDate = medications.selectedMedication.expDate, doesn't work because it attempts to access a property named selectedMedication directly on the medications object. In JavaScript, dot notation (.) is used to access properties with a literal name, not the value of a variable.

When you use medications.selectedMedication, JavaScript interprets it as accessing a property named selectedMedication within the medications object, which does not exist. Hence, you get undefined, and trying to access expDate on undefined results in an error.

On the other hand, using bracket notation, medications[selectedMedication], allows you to access the property name dynamically using the value stored in the selectedMedication variable. Here's a breakdown of why the working solutions are correct:

Using bracket notation with string keys:

javascript
Copy code
let aBestByDate = medications[selectedMedication]['expDate'];
Here, selectedMedication contains the name of the medication as a string (e.g., 'Lactated Ringers'). Bracket notation medications[selectedMedication] correctly accesses the property with that name, and ['expDate'] accesses the expDate property of that medication.

Using bracket notation with dot notation combined:

javascript
Copy code
let aBestByDate = medications[selectedMedication].expDate;
Similar to the previous example, medications[selectedMedication] correctly accesses the medication object, and .expDate accesses the expDate property of that object. */

// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, 
      roomNum: 'STC 353', 
      enrolled: 26, days: 'TTh', 
      instructor: 'Bro T'},

    { sectionNum: 2, 
      roomNum: 'STC 347', 
      enrolled: 28, 
      days: 'TTh', 
      instructor: 'Sis A'}
  ],
  enrollStudent: function (sectionNum){
    const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNum){
    const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
    } 
  }
};



/* changeEnrollment: function (sectionNum, add = true) {
  // find the right section...Array.findIndex will work here
  const sectionIndex = this.sections.findIndex(
    (section) => section.sectionNum == sectionNum
  );
  if (sectionIndex >= 0) {
    if (add) {
      this.sections[sectionIndex].enrolled++;
    } else {
      this.sections[sectionIndex].enrolled--;
    }
    renderSections(this.sections);
  }
} */

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}
function sectionTemplate(section){
  return `<tr>
  <td>${section.sectionNum}</td>
  <td>${section.roomNum}</td>
  <td>${section.enrolled}</td>
  <td>${section.instructor}</td>
  </tr>`
}

function renderSections(sections){
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join('');
}

document.querySelector("#enrollStudent").addEventListener("click", function(e){
  console.log("Enrolled");
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
})

document.querySelector("#dropStudent").addEventListener("click", function(e){
  console.log("Dropped");
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);



