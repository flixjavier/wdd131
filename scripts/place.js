//Global Variables
let TEMPERATURE = Math.random()*10;
//let TEMPERATURE = 0;
let WINDSPEED = Math.random()*70;
let CONDITIONS = "Partialy Cloudy";
let UBICATION = "Colonia Juarez"
let STUDENT_NUMBER = 420;
let MUNICIPALITY = "Casas Grandes";
let STATE = "Chihuahua";
let COUNTRY = "Mexico";
let EDUCATIONAL_LEVEL = "High School";
let PHONE = "614 310 5519";
let EMAIL = "academiajuarez@churchofjesuschrist.org";

//footer Get date
// use the date object
const today = new Date();

const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false // 24-hour format
};

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);

const year = document.querySelector("#current-year");

const lastModified = document.querySelector("#lastModified");

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last modification: ${formattedDate}</span>`; 

//Wind Chill factor

function calculateWindChill(temperature,windSpeed) {
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  if (temperature <= 10 && windSpeed > 4.8) {
    console.log(windChill);
    return `${windChill.toFixed(2)} °C`;
  }
  else{
    console.log(windChill);
    return "N/A";
  }
}

//put the wind chill in the html element
const windChillNumber = document.querySelector("#wind-chill");

windChillNumber.textContent = ` ${calculateWindChill(TEMPERATURE,WINDSPEED)}`

//put the info in wind, temperature and conditions

const temperatureText = document.querySelector("#temperature");

temperatureText.textContent = ` ${TEMPERATURE} °C`;

const conditionsText = document.querySelector("#conditions");

conditionsText.textContent = ` ${CONDITIONS}`;

const windText = document.querySelector("#wind");

windText.textContent = ` ${WINDSPEED.toFixed(2)} Km/h`

// put the info in data container

const ubicationText = document.querySelector("#ubication");

ubicationText.textContent = ` ${UBICATION}`;

const studentNumber = document.querySelector("#student-number");

studentNumber.textContent = ` ${STUDENT_NUMBER}`;

const municipalityText = document.querySelector("#municipality");

municipalityText.textContent = ` ${MUNICIPALITY}`;

const stateText = document.querySelector("#state");

stateText.textContent = ` ${STATE}`;

const educationLevelText = document.querySelector("#edu-level");

educationLevelText.textContent = ` ${EDUCATIONAL_LEVEL}`;

const phoneText = document.querySelector("#phone");

phoneText.textContent = ` ${PHONE}`;

const emailText = document.querySelector("#email");

emailText.textContent = ` ${EMAIL}`;


