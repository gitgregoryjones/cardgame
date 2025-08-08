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



function Deck(){
	var rdeck = [];
var PLAYERS = 4;

var suites = ["spades","diamonds","hearts","clubs"];
var cards = [2,3,4,5,6,7,8,9,10,11,12,13,14];

function Deck(){
	var rdeck = [];
	console.log(this.rdeck)
	
	suites.forEach(function(suite){
		cards.forEach(function(card){
			console.log("Building "+suite + " : " + card );
			rdeck.push(new Card(suite,card))
		});
	});
}
	console.log(this.rdeck)
	} else {
		console.log("Deck Loading...");
	}
	
		suites.forEach(function(suite){
			cards.forEach(function(card){
				console.log("Building "+suite + " : " + card );

				rdeck.push(new Card(suite,card))
				console.log(rdeck)
			})
		})

		
	

	this.shuffle = function(){
		var i = 0, j = 0, temp = null;
		for (i = rdeck.length - 1; i > 0; i -= 1) {
		    j = Math.floor(Math.random() * (i + 1))
		    temp = rdeck[i]
		    rdeck[i] = rdeck[j]
		    rdeck[j] = temp
		}
		
	}

	this.nextCard = function(){
		return rdeck.pop();
	}

	
	this.shuffle()

	return this;
}


function Card(suite,number){
	this.suite = suite;
	this.number = number;
	this.altLabel = number;
	if(this.number > 10){
		if(number == 11){
			this.altLabel = "J";
		}else if(number == 12){
			this.altLabel = "Q";
		} else if(number == 13){
			this.altLabel = "K";
		} else if(number == 14){
			this.altLabel = "A"
		}
	}
	this.toString = function(){

		return this.altLabel;
	}

	console.log(this.toString())
	return this;
}

var currentDeck = new Deck();
