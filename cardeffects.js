var audio = null;

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

function moveHiddenCard(){

	x = 120 - Math.floor((Math.random() * 20) + 1);

	y = 440 - Math.floor((Math.random() * 20) + 1);



	$babycard = $('[data-label="DynamicHiddenCard"]').clone(true).attr('data-label','copy').appendTo('body').css('visibility','visible').css('display','block');
	
	$babycard.animate({
	    opacity:100,
	    top: y,
	    left:x
	    
	  }, 1500, function() {
	    $babycard.find('[data-label="RenderCard"]').attr('data-label','dealt-card');
	    $babycard.find('[data-label="Suite_AnimationBottom"]').attr('data-label','dealt-card-suite-bottom');
	    $babycard.find('[data-label="Suite_AnimationTop"]').attr('data-label','dealt-card-suite-top')
	  });

	//Pick Next Card From Hand
	renderNextCard();
}

function playSound(sound){

	console.log("Attempting to play sound " + sound);

	if(audio){
		audio.pause();
	}

	audio = new Audio(sound);
	audio.play();

	console.log("playing sound " + sound);

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
