var cards = [
	{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
	},
	{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
	},
	{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
	},
	{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
	}
];

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
// all console.log in flipCard function are pulling correct cards

var flipCard = function (cardId) {
	console.log("User flipped " + cards[0].rank);
	console.log(cards[0].cardImage);
	console.log(cards[0].suit);

	console.log("User flipped " + cards[2].rank);
	console.log(cards[2].cardImage);
	console.log(cards[2].suit);
	
	checkForMatch();
} 

flipCard();

cardsInPlay.push(cards[0].rank);
cardsInPlay.push(cards[2].rank);





/* 	DELETE THESE LINES OF CODE:
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	
	var cardTwo = cards[3];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo); */