const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú Temple",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
	{
		templeName: "Rio de Janeiro Temple",
		location: "Rio de Janeiro, Brazil",
		dedicated:"2022, May, 8",
		area: 29966,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/4-5aa85fb6f20a17f629302687710142328a707d4d.jpeg", 
	},
	{
		templeName: "Sapporo Japan Temple",
		location: "Ooyachi-Nishi, Japan",
		dedicated:"2016, August, 21",
		area: 48480,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg",
	},
	{
		templeName: "Colonia Juarez Temple",
		location: "Casas Grandes, Chihuahua, Mexico",
		dedicated:"1999, March, 6-7",
		area: 6800,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-1543027-wallpaper.jpg",
	},
];

//Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
  
});

//home link
const home = document.querySelector(".home");
home.addEventListener("click", () => {cardsTemplate(temples)});

//filtered array 
const nonUtahLink = document.querySelector(".nonutah");

nonUtahLink.addEventListener("click", () =>{
  let nonutah = temples.filter(temple => !temple.location.includes("Utah"));
  console.log(nonutah);
  cardsTemplate(nonutah);
});

//create Card
function cardsTemplate(arrayTemples) {
  document.querySelector(".main").innerHTML = "";
	const cards = document.querySelector(".main"); 

	arrayTemples.forEach(temple => {
		const card = document.createElement("div"); 
		card.className = "cards";
		
		card.innerHTML = `
		<h3>${temple.templeName}</h3>
		<p class="small-caps">Location: <span>${temple.location}</span></p>
		<p class="small-caps">Dedicated: <span>${temple.dedicated}</span></p>
		<p class="small-caps">Size: <span>${temple.area} sq ft</span></p>
		<figure>
		<img src=${temple.imageUrl} alt='${temple.templeName}'  loading="lazy" width="400" height="250">
		</figure>`;
		cards.appendChild(card);
	});
}
cardsTemplate(temples);
