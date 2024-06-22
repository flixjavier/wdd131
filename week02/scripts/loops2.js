const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let index = 0; index < DAYS; index++) {
  if (studentReport[index] < LIMIT){
    console.log(studentReport[index]);
  }
}

i = 0
while (i < DAYS){
  if (studentReport[i] < LIMIT){
    console.log(studentReport[i]);
  }
  i++;
}

studentReport.forEach((item)=>{
  if (item <LIMIT){
    console.log(item);
  }
});

studentReport.map((item)=>{
  if (item <LIMIT){
    console.log(item);
  }
});

for (let ind in studentReport) {
  if (studentReport[ind] < LIMIT){
    console.log(studentReport[ind]);
  }
    
}

const n = 6
let today = new Date()

const options = { weekday: 'long'};

for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
  console.log(nextdaystring);
}

