/* Get DOM Elements */
const btnOne = document.getElementById('button-one');
const btnTwo = document.getElementById('button-two');
const btnThree = document.getElementById('button-three');

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
    console.log('clicking button one!');
    total++;
    resetPearls();
    const hidingPLace = Math.ceil(Math.random() * 3);
    console.log(hidingPLace);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

function resetPearls() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}
