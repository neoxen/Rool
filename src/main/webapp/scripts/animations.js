
$(document).ready( function(){

	
	// g�rer les animations de background pour les liens commentaires et lire la suite
	$(".linkMore").mouseenter( function() {
		$(this).stop().animate({
							backgroundPosition: '0 -26px'
						}, 100);
	});
	
	$(".linkMore").mouseleave( function() {
		$(this).stop().animate({
							backgroundPosition: '0 0'
						}, 100);
	});


    $('#accordionMenu').accordion({
        autoHeight: false,
        active: 0,
        header: '.menuHeader',
        event: 'mouseover'
    });


});



