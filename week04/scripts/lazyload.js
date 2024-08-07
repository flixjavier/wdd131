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
