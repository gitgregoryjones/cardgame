var themes = {
	
}

function setThemeName(){

	objs = $('[data-label="Theme"] div.panel_state')

	for(i=0; i < objs.length; i++){
		console.log($(objs[i]).css('visibility'));
		if($(objs[i]).css('visibility') == "visible"){
			console.log("Setting Theme " + $(objs[i]).attr('data-label'));
			$axure.setGlobalVariable("Theme",$(objs[i]).attr('data-label'))

			//Start playing the theme song if theme found
			youWon($axure.getGlobalVariable("Theme"));
		}
	}

}

function Theme(won,sounds,image){
	this.won = won;
	this.sounds = sounds;
	this.image = image;

	return this;
}



function setUpPlayArea(){

	theme = $axure.getGlobalVariable("Theme");

	console.log("setUpPlayArea: Theme is loaded as " + theme);

	$('[data-label="TableTopImage"] img').attr('src',themes[theme].image)

	playYouWonSound(theme);
	
}

function playThemeSound(theme,index){

	console.log("Loading sound theme " + theme + " and sound at index " + index); 
	
	sound = themes[theme].sounds[index];

	playSound(sound);

}

function youWon(themeName){

	playYouWonSound(themeName);

	//Do some image stuff
	image = themes[themeName].image

	return image;
}

function playYouWonSound(themeName){
	
	sound = themes[themeName].won;
	
	playSound(sound);

}