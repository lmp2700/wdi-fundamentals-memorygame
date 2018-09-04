var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
	}
}
// checkForMatch function is over-riding calling checkForMatch in 
// flipCard function (??)
// stating that king & queen are a match when they are not
// console.log in flipCard function is pulling correct cards

var flipCard = function (cardId) {
	console.log("User flipped " + cards[0]);
	console.log("User flipped " + cards[2]); 
	checkForMatch();
} 

flipCard();

cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[2]);


/* 	DELETE THESE LINES OF CODE:
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	
	var cardTwo = cards[3];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo); */