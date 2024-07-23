

/* Review Counter */
// 1️⃣ Initialize display element variable
const reviewsDisplay = document.querySelector(".counter");    

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.

let numReviews = Number(window.localStorage.getItem('numReviews-ls')) || 0;

if (numReviews !==0) {
  reviewsDisplay.textContent = numReviews;
} else {
  reviewsDisplay.textContent = `This is the first review. 🥳 Thank You!`;
}

// 4️⃣ increment the number of visits by one.
numReviews++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numReviews-ls", numReviews);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.


/* Using the Storage interface, what are some methods built into this interface object and what do they do?
Out of the entire method list [key(), getItem(), setItem(), removeItem(), clear()] the most common are getItem() and setItem() which you will be using in the assignments. */

//Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
  
});

//logo link
const logo = document.querySelector(".logo-container");
logo.addEventListener("click", () => {homeTemplate()});

//home link
const home = document.querySelector(".home");
home.addEventListener("click", () => {homeTemplate()});

//conctact Us link
const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {contactUsTemplate()});

//create Home page
function homeTemplate() {
  document.querySelector(".main").innerHTML = "";
	const template = document.querySelector(".main"); 

  const homeTemplate = document.createElement("div"); 
		homeTemplate.className = "template";
		
		homeTemplate.innerHTML = `
		<div class="hero-container">
      <figure class="hero"><img src="images/marketonions.webp" alt="Market Onions"  loading="lazy"> </figure>
      <div class="hero-text">
        <h3>AGROAVE Mexican Onions</h3>
        <p class="hero-text">From México 🇲🇽 to the World 🌎</p>
      </div>
    </div>
    <section class="info">
      <div class="info-container">
        <figure class="cards" id="redOnion"><img src="images/redonions.webp" alt="Red Onions"  loading="lazy"> </figure>
        <figure class="cards" id="whiteOnion"><img src="images/whiteonions.webp" alt="White Onions"  loading="lazy"> </figure>
        <figure class="cards" id="yellowOnion"><img src="images/yellowonions.webp" alt="Yellow Onions"  loading="lazy"></figure>
        <div class="info-text">
          <h3>Organic Onions</h3>
          <p>We are an organic certified company that produce only the best quality of onions. Our onions are ready to export to different countries like U.S.A., Argentina, Guatemala and El Salvador. Our crops are organic and with the best quality. <span>If you wanto to know more about our products, please contact us</span>. </p>
          <button type="button"> Contact Us</button>
        </div>
      </div>
    </section>
    `;

    template.appendChild(homeTemplate);
}

//create contact Us
function contactUsTemplate() {
  document.querySelector(".main").innerHTML = "";
	const template = document.querySelector(".main"); 

  const contactTemplate = document.createElement("div"); 
		contactTemplate.className = "template";
		
		contactTemplate.innerHTML = `
		<form action="thanks.html" method="get" class="form">
      <label for="fname">First Name:</label>
      <input id="fname" type="text" name="firstname" placeholder="First Name" required>
      <label for="lname">Last Name:</label>
      <input id="lname" type="text" name="lastname" placeholder="Last Name" required>
      <label for="email">Email:</label>
      <input id="email" type="email" name="email" placeholder="someone@gmail.com" required>
      <label for="phone">Phone number:</label>
      <input id="phone" type="tel" name="phone" placeholder="6141755234" required>
      <label for="textarea">Reason for contact:</label>
      <textarea id="textarea" name="contact" placeholder="Write your text here.." required></textarea>
      <input type="submit" value="Send Message">
    </form>
    `;

    template.appendChild(contactTemplate);
}

