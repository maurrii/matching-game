/*-------------------------------- Constants --------------------------------*/
const matchCombos = [
  [0, 7], [1, 6], [2, 5], [3,8]
]

const cardArray = [
  {
    name: 'blue',
		img: 'images/blue star.png',
	},
	{
    name: 'blue',
		img: 'images/blue star.png',
	},
	{
    name: 'pink',
		img: 'images/pink star.png',
	},
	{
    name: 'pink',
		img: 'images/pink star.png',
	},
	{
    name: 'silver',
		img: 'images/silver star.png',
	},
	{
    name: 'silver',
		img: 'images/silver star.png',
	},
	{
    name: 'red',
		img: 'images/red star.png',
	},
	{
    name: 'red',
		img: 'images/red star.png',
	},
]
/*---------------------------- Variables (state) ----------------------------*/
let hasFlippedCard = false;
let firstCard, secondCard;

let cardsChosen = []



/*------------------------ Cached Element References ------------------------*/

const optionOne = cardsChosenId[0]

const optionTwo = cardsChosenId[2]

const resetBtn = document.getElementById('reset-button')

const cards = document.querySelectorAll('.cards')

const messageEl = document.querySelector('#message')

const frontCard = document.querySelectorAll(".front")


/*----------------------------- Event Listeners -----------------------------*/
cards.forEach((card) => card.addEventListener('click', handleClick))

messageEl.addEventListener()
/*-------------------------------- Functions --------------------------------*/
// checks for match
function checkForMatch(){

}







// flips a card
function handleClick(evt){
  let backCard = evt.target
  let frontCard = evt.srcElement.nextElementSibling
  backCard.style.display = "none"
frontCard.style.display = "block"
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
if (cardsChosen.length === 2){
  setTimeout(checkForMatch, 500)
}
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