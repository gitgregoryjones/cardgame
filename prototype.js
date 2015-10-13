window.slide = "right";

function toggleSwitch(){

	javascript:$('[data-label="slider"]').animate({
         opacity:100,
         
         left:window.slide == "right" ? "+=50" : "-=50"
         
       }, 1000, function() { 
          

          if(window.slide == "right"){
          	$('[data-label="ReturningUser"]').prop('disabled','false');
          	$('[data-label="f_input_id"]').prop('disabled','false');   
          }else {
			$('[data-label="ReturningUser"]').prop('disabled','true');
			$('[data-label="f_input_id"]').prop('disabled','true'); 
          }


			window.slide = window.slide == "right" ? "left" : "right";
       });
}