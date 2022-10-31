/* Get DOM Elements */
const btnOne = document.getElementById('button-one');
const btnTwo = document.getElementById('button-two');
const btnThree = document.getElementById('button-three');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* add images */

/* State */
let wins = 0;
let total = 0;
/* Events */

/* Display Functions */

btnOne.addEventListener('click', () => {
    console.log('clicking button one!');
});

// (don't forget to call any display functions you want to run on page load!)
