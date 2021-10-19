/*-------------------------------- Constants --------------------------------*/
const matchCombos = [
  [0, 7], [1, 6], [2, 5], [3,8]
]


/*---------------------------- Variables (state) ----------------------------*/
let hasFlippedCard = false;
let firstCard, secondCard;


/*------------------------ Cached Element References ------------------------*/
const resetBtn = document.getElementById('reset-button')
const cards = document.querySelectorAll('.cards')
const messageEl = document.querySelector('#message')
/*----------------------------- Event Listeners -----------------------------*/
cards.forEach((card) => card.addEventListener('click', handleClick))


/*-------------------------------- Functions --------------------------------*/
function handleClick(evt){
}
if (!hasFlippedCard) {
    hasFlippedCard = true;
  }
