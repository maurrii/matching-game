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
// find match
// did not find match at all
// function foundmatch1(cardArray){
  // return cardArray.name === ['pink']
  // }
  // console.log(cardArray.find(foundmatch1))
  
  
  // only found one card named pink
  // const found1match = cardArray.find (({name})=> name === 'pink',)
  // console.log(found1match)
  
  // could not understand el
  // function found1match(arr, query) {
    // 	return arr.filter(function (el) {
      // 		return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
      // 	})
      // }
      // console.log(found1match(cardArray, 'pink'))
      
      
      
      
      // el is still not a function
      // const found1match = (arr, query) => {
        // 	return arr.filter(
          // 		(el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
          // 	)
          // }
          // console.log(found1match(cardArray, 'pink'))  
          
          
          
          
          // flips a card
          function handleClick(evt){
            if (firstPick) {
            let backCard = evt.target
            let frontCard = evt.srcElement.nextElementSibling
            backCard.style.display = "none"
            frontCard.style.display = "block"
            firstCard
            firstPick = false
            }
            console.log(cardArray)
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