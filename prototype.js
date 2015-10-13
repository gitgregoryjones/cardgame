window.slide = "right";
$('[data-label="ReturningUser"]').css('color','pink');
$('[data-label="f_input_id"] input').prop('disabled','true') 

function toggleSwitch(){

	javascript:$('[data-label="slider"]').animate({
         opacity:100,
         
         left:window.slide == "right" ? "+=50" : "-=50"
         
       }, 1000, function() { 
          

          if(window.slide == "right"){
          	$('[data-label="ReturningUser"]').css('color','black');
          	$('[data-label="f_input_id"] input').prop('disabled','false')   
          }else {
			$('[data-label="ReturningUser"]').css('color','pink');
			$('[data-label="f_input_id"] input').prop('disabled','true') 
          }


			window.slide = window.slide == "right" ? "left" : "right";
       });
}