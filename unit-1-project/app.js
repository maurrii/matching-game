/*-------------------------------- Constants --------------------------------*/
const matchCombos = [
  [0, 7], [1, 6], [2, 5], [3,8]
]

const cardArray = [
	{
		name: 'pink',
		img: 'images/pink star.png',
	},
	{
		name: 'silver',
		img: 'images/silver star.png',
	},
  {	name: 'red',
		img: 'images/red star.png',
	},
	{
		name: 'blue',
		img: 'images/blue star.png',
	},
  {
		name: 'red',
		img: 'images/red star.png',
	},
  {
		name: 'silver',
		img: 'images/silver star.png',
	},
  {
		name: 'pink',
		img: 'images/pink star.png',
	},
	{
		name: 'blue',
		img: 'images/blue star.png',
	},	
]
/*---------------------------- Variables (state) ----------------------------*/
let hasFlipped2ndCard = true;
let hasFlippedCard = false;
let firstCard, secondCard;

let cardsChosen = []

let checkForMatch = []

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
  let backCard = evt.target
  let frontCard = evt.srcElement.nextElementSibling
  backCard.style.display = "none"
frontCard.style.display = "block"
cardsChosen.push()
// cardsChosen.push(cardArray.name)
// cardsChosen.push(cardArray)
// if (cardsChosen.length === 1){
//   setTimeout(checkForMatch, 500)
// }
}


// function flipCard(){
//   this.classList.add('flip')
// }
// if (!hasFlippedCard) {
//       hasFlippedCard = true
//       firstCard = this
//     } else {
//         hasFlipped2ndCard = false
//         secondCard = this
//         console.log(secondCard)
//       }
    //   if (firstCard === true && secondCard === true) {
      //     firstCard.removeEventListener("click", handleClick)
      //     secondCard.removeEventListener('click', handleClick)
      //   } else {
        //     setTimeout(()=> {
          //       firstCard.classList.remove('flip')
          //     },1500)
          //   }
          
          
          resetBtn.addEventListener('click', handleClick)