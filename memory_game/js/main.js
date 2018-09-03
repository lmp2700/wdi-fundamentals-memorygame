var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

/* var cardThree = cards[2];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardThree);

var cardFour= cards[3];
cardsInPlay.push(cardFour);
console.log("User flipped " + cardFour); */

if (cardsInPlay.length % 2 === 0) {
	console.log(cardsInPlay.length);
}
	if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!");
	} else {
		alert("Sorry, try again");
	};
