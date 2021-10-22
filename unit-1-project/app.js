/*-------------------------------- Constants --------------------------------*/
const matchCombos = [
  [0, 7], [1, 6], [2, 5], [3,8]
]

const cardArray = [
	{
		name: 'pink',
		img: 'images/pink star.png',
		status: 'hidden',
	},
	{
		name: 'silver',
		img: 'images/silver star.png',
		status: 'hidden',
	},
	{ name: 'red', 
    img: 'images/red star.png', 
    status: 'hidden' },
	{
		name: 'blue',
		img: 'images/blue star.png',
		status: 'hidden',
	},
	{
		name: 'red',
		img: 'images/red star.png',
		status: 'hidden',
	},
	{
		name: 'silver',
		img: 'images/silver star.png',
		status: 'hidden',
	},
	{
		name: 'pink',
		img: 'images/pink star.png',
		status: 'hidden',
	},
	{
		name: 'blue',
		img: 'images/blue star.png',
		status: 'hidden',
	},
]
/*---------------------------- Variables (state) ----------------------------*/
let firstPick
let secondPick
let firstCard, secondCard;
let cardsChosen = []
let winner = false
let matches = null


/*------------------------ Cached Element References ------------------------*/


const resetBtn = document.getElementById('reset-button')

const cards = document.querySelectorAll('.cards')

const messageEl = document.querySelector('#message')

const frontCard = document.querySelectorAll(".front")


/*----------------------------- Event Listeners -----------------------------*/
cards.forEach((card) => card.addEventListener('click', handleClick))

/*-------------------------------- Functions --------------------------------*/
let setsMatched = 0;
function handleClick(evt){
  if (!firstPick) { 
    firstPick = evt.target
  } else {
    secondPick = evt.target
  }

  const backCard = evt.target
  const frontCard = evt.srcElement.nextElementSibling
  backCard.style.display = 'none'
	frontCard.style.display = 'block'

  if(secondPick?.alt) {
    if (firstPick?.alt !== secondPick?.alt) {
      setTimeout(() => {
        resetBoard()
      }, 600); messageEl.innerHTML = "Try again"
    } else if (firstPick?.alt === secondPick?.alt)
    messageEl.innerHTML = "You've found a match"; {
			setsMatched = ++setsMatched
      firstPick = null
      secondPick = null
    }
  }

  if (setsMatched == 4) {
    resetBtn.style.display = 'block'
    messageEl.innerHTML = 'Game Won!'
  }
}

function resetBoard() {
	[...document.getElementsByClassName('back')].forEach((element) => {
		element.style.display = 'block'
	})
	;[...document.getElementsByClassName('front')].forEach((element) => {
		element.style.display = 'none'
	})
  setsMatched = 0;
	firstPick = null
	secondPick = null
	resetBtn.style.display = 'none'
}

resetBtn.addEventListener('click', resetBoard)