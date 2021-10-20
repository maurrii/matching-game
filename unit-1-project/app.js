/*-------------------------------- Constants --------------------------------*/
const matchCombos = [
  [0, 7], [1, 6], [2, 5], [3,8]
]

const cardArray = [
	{
		name: 'blue',
		img: 'images/blue star.png',
		status: hidden,
	},
	{
		name: 'blue',
		img: 'images/blue star.png',
		status: hidden,
	},
	{
		name: 'pink',
		img: 'images/pink star.png',
    status:hidden,
	},
	{
		name: 'pink',
		img: 'images/pink star.png',
    status:hidden,
	},
	{
		name: 'silver',
		img: 'images/silver star.png',
    status:hidden,
	},
	{
		name: 'silver',
		img: 'images/silver star.png',
    status:hidden,
	},
	{
		name: 'red',
		img: 'images/red star.png',
    status:hidden,
	},
	{
		name: 'red',
		img: 'images/red star.png',
    status:hidden,
	},
]
/*---------------------------- Variables (state) ----------------------------*/
let hasFlippedCard = false;
let firstCard, secondCard;


/*------------------------ Cached Element References ------------------------*/
const resetBtn = document.getElementById('reset-button')
const cards = document.querySelectorAll('.cards')
console.dir(cards)
const messageEl = document.querySelector('#message')
/*----------------------------- Event Listeners -----------------------------*/
cards.forEach((card) => card.addEventListener('click', handleClick))

messageEl.addEventListener
/*-------------------------------- Functions --------------------------------*/
function handleClick(evt){
  let backCard = evt.target
  let frontCard = evt.srcElement.nextElementSibling
  backCard.style.display = "none"
frontCard.style.display = "block"


}
// if (!hasFlippedCard) {
//     hasFlippedCard = true
//     firstCard = this
//   } else {
//     hasFlippedCard = false
//     secondCard = this
//   }
//   if (firstCard === true && secondCard === true) {
//     firstCard.removeEventListener("click", handleClick)
//     secondCard.removeEventListener('click', handleClick)
//   } else {
//     setTimeout(()=> {
//       firstCard.classList.remove('flip')
//     },1500)
//   }


  resetBtn.addEventListener('click', handleClick)