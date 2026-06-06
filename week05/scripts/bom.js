
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

// Load saved chapters or start with empty array
let chaptersArray = getChapterList();

// Render existing items on page load
chaptersArray.forEach(chapter => displayList(chapter));

// Add chapter button
buttonElement.addEventListener('click', () => {
    const value = inputElement.value.trim();

    if (value !== "") {
        displayList(value);
        chaptersArray.push(value);
        setChapterList();
        inputElement.value = "";
        inputElement.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    li.textContent = item;

    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    li.appendChild(deletebutton);

    // store clean value in dataset (better than slicing text)
    li.dataset.chapter = item;

    listElement.appendChild(li);

    deletebutton.addEventListener('click', function () {
        listElement.removeChild(li);
        deleteChapter(li.dataset.chapter);
        inputElement.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}