
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


