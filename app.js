/* Get DOM Elements */
const btnOne = document.getElementById('button-one');
const btnTwo = document.getElementById('button-two');
const btnThree = document.getElementById('button-three');
const resetBtn = document.getElementById('reset-button');

const img1 = document.getElementById('image-one');
const img2 = document.getElementById('image-two');
const img3 = document.getElementById('image-three');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* add images */

/* State */
let wins = 0;
let total = 0;
/* Events */

btnOne.addEventListener('click', () => {
    total++;
    resetPearls();
    const hidingPlace = Math.ceil(Math.random() * 3);
    if (hidingPlace === 1) {
        wins++;
        img1.classList.add('reveal');
    } else if (hidingPlace === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    showResults();
});

btnTwo.addEventListener('click', () => {
    total++;
    resetPearls();
    const hidingPlace = Math.ceil(Math.random() * 3);
    if (hidingPlace === 2) {
        wins++;
        img2.classList.add('reveal');
    } else if (hidingPlace === 1) {
        img1.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    showResults();
});

btnThree.addEventListener('click', () => {
    total++;
    resetPearls();
    const hidingPlace = Math.ceil(Math.random() * 3);
    if (hidingPlace === 3) {
        wins++;
        img3.classList.add('reveal');
    } else if (hidingPlace === 2) {
        img2.classList.add('reveal');
    } else {
        img1.classList.add('reveal');
    }
    showResults();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

function resetPearls() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}

function showResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

resetBtn.addEventListener('click', () => {
    wins = 0;
    total = 0;
    showResults();
    resetPearls();
});
