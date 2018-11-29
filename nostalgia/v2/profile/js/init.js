
$(document).ready(function() {

	/* -------------------------------------------------------------------------------------------*/
	/* --------------------------- Initialize Testimonial Transition ---------------------------- */
	/* -------------------------------------------------------------------------------------------*/
		
	$('#testimonials').bxSlider({ 
		mode: 'fade',
		auto: true,
		pause: 5000
	});
	
	/* -------------------------------------------------------------------------------------------*/
	/* ---------------------- Initialize grayscale to colored hover effect ---------------------- */
	/* -------------------------------------------------------------------------------------------*/
		
	$(".grayscale").hover(function() { //On hover...
		var thumbOver = $(this).find("img").attr("src"); //Get image url and assign it to 'thumbOver'
		//Set a background image(thumbOver) on the <a> tag - Set position to bottom
		$(this).find("span").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});
			//Animate the image to 0 opacity (fade it out)
		$(this).find("span img").stop().fadeTo('normal', 0 , function() {
			$(this).hide() //Hide the image after fade
		});
	} , function() { 
			$(this).find("span img").stop().fadeTo('normal', 1).show();
	});
	
});		