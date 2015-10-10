/*

CardGame.js contains methods
1. Deck - call to have a deck (array) of 52 Cards returned
2. shuffle - random method used to return cards in random order
3. deal - entry method
4. card - generate a card based on suite and number

*/
var PLAYERS = 4;

var suites = ["spades","diamonds","hearts","clubs"];
var cards = [2,3,4,5,6,7,8,9,10,11,12,13,14];

var DECK = {}


function Deck(suites, cards){
	this.rdeck = [];
	suites.forEach(function(suite){
		cards.forEach(function(card){
			console.log("Building "+suite + " : " + card );
			this.rdeck.push(new Card(suite,card))
		})
	})

	this.shuffle = function(){
		var i = 0, j = 0, temp = null;
		for (i = array.length - 1; i > 0; i -= 1) {
		    j = Math.floor(Math.random() * (i + 1))
		    temp = array[i]
		    array[i] = array[j]
		    array[j] = temp
		}
	}

	this.nextCard = function(){
		return this.rdeck.pop();
	}

	return this;
}


function Card(suite,number){
	this.suite = suite;
	this.number = number;
	this.altLabel = number;
	if(this.number > 10){
		if(number == 11){
			this.altLabel = "Jack";
		}else if(number == 12){
			this.altLabel = "Queen";
		} else if(number == 13){
			this.altLabel = "King";
		} else if(number == 14){
			this.altLabel = "Ace"
		}
	}
	this.toString = function(){

		return this.altLabel + " of " + suite;
	}

	console.log(this.toString())
	return this;
}