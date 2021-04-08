$(document).ready(function() {

	$('.call-widget-circle').on('click', function(){
		$('.call-widget-circle').toggleClass('circle-active');
		$('.call-widget-circle2').toggleClass('circle2-active');
		$('.call-widget-circle3').toggleClass('circle3-active');
		$('.widget-block').fadeToggle(150);
	});

	$('.widget-social-link.viber').on('click', function(){
		$('.viber-link-mobile').fadeToggle(10);
		$('.viber-link-pc').fadeToggle(10);
	});
	
});