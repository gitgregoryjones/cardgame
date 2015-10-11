function colorCardText(cardSuite)
{
	console.log("colorCardText: Argument " + cardSuite)

	if(cardSuite.indexOf("hearts") > -1 || cardSuite.indexOf("diamonds") > -1 ){

		$('[data-label="PlayerCard"] span').css('color','red');
		$('[data-label="RenderCard"] span').css('color','red');
	} else {
		$('[data-label="PlayerCard"] span').css('color','black');
		$('[data-label="RenderCard"] span').css('color','black')
	}

}

//Current Card Deck is defined in carddeck.js
//$axure is axure var
function renderNextCard(){

	card = currentDeck.nextCard();
	$axure.setGlobalVariable("CurrentCardNumber",card.toString());
	$axure.setGlobalVariable("CurrentCardSuite","https://rawgit.com/geegit/cardgame/master/"+card.suite + "_suite.png");
	
	$('[data-label="BigSuiteBottom"] img').attr('src',$axure.getGlobalVariable("CurrentCardSuite"))
	$('[data-label="BigSuiteTop"] img').attr('src',$axure.getGlobalVariable("CurrentCardSuite"))

	$('[data-label="Suite_AnimationBottom"] img').attr('src',$axure.getGlobalVariable("CurrentCardSuite"))
	$('[data-label="Suite_AnimationTop"] img').attr('src',$axure.getGlobalVariable("CurrentCardSuite"))

	$('[data-label="PlayerCard"] span').text($axure.getGlobalVariable("CurrentCardNumber"))

	$('[data-label="RenderCard"] span').text($axure.getGlobalVariable("CurrentCardNumber"))

	colorCardText($axure.getGlobalVariable("CurrentCardSuite"));
	console.log($axure.getGlobalVariable("CurrentCardSuite"));

}

 
for ( var i in window) {
	if((typeof window[i]).toString()=="function"){
    console.log("Successfully Loaded function :" + window[i].name);
    }
}
