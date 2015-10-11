function colorCardText(cardSuite)
{
	console.log("colorCardText: Argument " + cardSuite)

	if(cardSuite.indexOf("hearts") > -1 || cardSuite.indexOf("diamonds") > -1 ){

		$('cache1').css('color','red');
	} else {
		$('cache1').css('color','black')
	}

}