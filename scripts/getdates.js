const currentYear = document.querySelector("#current-year"); 
const lastModified =  document.querySelector("#lastModified"); 

// use the date object
const today = new Date();

lastModified.innerHTML = <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`:

