const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
	displayList(chapter);
});

document.querySelector("button").addEventListener("click", () => {
	if (input.value != "") {
		displayList(input.value);
		chaptersArray.push(input.value);
		setChapterList();
		input.value = "";
		input.focus();
	}
});

function displayList(item) {
	const li = document.createElement("li");
	const deleteButton = document.createElement("button");
	li.textContent = item;
	deleteButton.textContent = "❌";
	li.append(deleteButton);
	list.append(li);
	deleteButton.addEventListener("click", function () {
		list.removeChild(li);
    deleteChapter(li.textContent);
		input.focus();
	});
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
};


function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.lenght -1);

  chaptersArray = chaptersArray.filter((item) => item != chapter);
  setChapterList();
}