function colorCardText(cardSuite)
{
	console.log("colorCardText: Argument " + cardSuite)

	if(cardSuite.indexOf("hearts") > -1 || cardSuite.indexOf("diamonds") > -1 ){

		$('#cache1').css('color','red');
	} else {
		$('#cache1').css('color','black')
	}

}

//Current Card Deck is defined in carddeck.js
//$axure is axure var
function renderNextCard(){

	card = currentDeck.nextCard();
	$axure.setGlobalVariable("CurrentCardNumber",card.toString());
	$axure.setGlobalVariable("CurrentCardSuite","https://rawgit.com/geegit/cardgame/master/"+card.suite + "_suite.png");
	colorCardText($axure.getGlobalVariable("CurrentCardSuite"));
	console.log($axure.getGlobalVariable("CurrentCardSuite"));

}