const onions = [
  {
    onionName: "Red Onion",
    location: "Rancho Nicaragua, Camargo, Chihuahua",
    corte: "2024, june, 10",
    siembra: "2024, january, 10",
    imageSCR:
    "images/redonions.webp"
  },
  {
    onionName: "Yellow Onion",
    location: "Rancho Nicaragua, Camargo, Chihuahua",
    corte: "2024, june, 10",
    siembra: "2024, january, 10",
    imageSCR:
    "images/yellowonions.webp"
  },
  {
    onionName: "White Onion",
    location: "Rancho Nicaragua, Camargo, Chihuahua",
    corte: "2024, june, 10",
    siembra: "2024, january, 10",
    imageSCR:
    "images/whiteonions.webp"
  },
  {
    onionName: "Market Onions",
    location: "Rancho Nicaragua, Camargo, Chihuahua",
    corte: "2024, june, 10",
    siembra: "2024, january, 10",
    imageSCR:
    "images/marketonions.webp"
  },
  {
    onionName: "Onion Plant",
    location: "Rancho Nicaragua, Camargo, Chihuahua",
    corte: "2024, june, 10",
    siembra: "2024, january, 10",
    imageSCR:
    "images/onionplant.webp"
  },
  {
    onionName: "Yellow and Red Onions",
    location: "Rancho Nicaragua, Camargo, Chihuahua",
    corte: "2024, june, 10",
    siembra: "2024, january, 10",
    imageSCR:
    "images/yellowRedOnions.webp"
  },
];

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

//onions Link

const onionLink = document.querySelector(".onions");
onionLink.addEventListener("click", () => {onionsCardsTemplate(onions)});

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
        <button type="button" onclick="contactUsTemplate()"> Contact Us</button>
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

function onionsCardsTemplate(array) {
  document.querySelector(".main").innerHTML = "";
	const cardsTemplate = document.querySelector(".main"); 

  array.forEach(onion => {
    const cardTemplate = document.createElement("div");
    cardTemplate.className = "card-template";

    cardTemplate.innerHTML = `
      <div class="wrapper">
        <div class="banner-image"> </div>
        <figure><img src="${onion.imageSCR}" alt="${onion.onionName}"  loading="lazy" width="300" height="auto"><figure>
        <h1>${onion.onionName}</h1>
        <p>Corte: ${onion.corte}<br/>
           Siembra: ${onion.siembra}</p>
      </div>
      <div class="button-wrapper"> 
        <button class="btn outline">DETAILS</button>
        <button class="btn fill">BUY NOW</button>
      </div>`;
    cardsTemplate.appendChild(cardTemplate);
  });
};

homeTemplate();