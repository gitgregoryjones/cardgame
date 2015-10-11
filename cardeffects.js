function colorCardText(cardSuite)
{
	console.log("colorCardText: Argument " + cardSuite)

	if(cardSuite == "hearts"){

		$('cache1').css('color','red');
	} else {
		$('cache1').css('color','black')
	}

}