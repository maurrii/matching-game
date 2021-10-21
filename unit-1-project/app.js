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
	{ name: 'red', img: 'images/red star.png', status: 'hidden' },
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
let firstPick = true
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

// messageEl.addEventListener()
/*-------------------------------- Functions --------------------------------*/
  // flips a card
    function handleClick(evt){
      if (firstPick) {
      let backCard = evt.target
      let frontCard = evt.srcElement.nextElementSibling
      backCard.style.display = "none"
      frontCard.style.display = "block"
      // firstCard
      // firstPick = false
      }
      // console.log(cardArray)
      // } else {
      //   let backCard = evt.target
			// 	let frontCard = evt.srcElement.nextElementSibling
      //   backCard.style.display = 'none'
			// 	frontCard.style.display = 'block'
      //   firstPick = true
      // }
      
     // cardsChosen.push(cardArray.name)
     // cardsChosen.push(cardArray)
    // if (cardsChosen.length === 1){
//   setTimeout(checkForMatch, 500)
// }
}
resetBtn.addEventListener('click', handleClick)