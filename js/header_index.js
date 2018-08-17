$(window).on('load', function() {

      $window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= $('.bg-qonto').height() ) {
                  $('.logo-header').addClass('h-scroll'); 
	    } else {
                      $('.logo-header').removeClass('h-scroll'); 
	    };
      }); 
      
      $window.scroll(function() {
            if ( $window.scrollTop() >= 200 ) { 
                    $('.mouse').hide()
            } else { 
                        $('.mouse').show()
            };
        }); 

})

$('#nav-btn').click(function(){
	if (!$('#nav-btn').hasClass('disable')) {
		$('#nav-btn').addClass('disable');
		if ($('#nav-btn').hasClass('active')) {
			$('#nav-btn').removeClass('active');
			$('#nav').removeClass('show');
			$('#nav .content').removeClass('active');
			setTimeout(function() {
				$('#nav-btn').removeClass('disable');
				$('#nav').removeClass('displayBlock');

			}, 500);
		} else {
			$('#nav-btn').addClass('active');
			$('#nav').addClass('displayBlock').outerWidth();
			$('#nav').addClass('show');
			$('#nav .content').addClass('active');
			setTimeout(function() {
				$('#nav-btn').removeClass('disable');
			}, 1000);
		}

	}
	
})

$('#nav .content .container-prLink ul li a').mouseenter(function(){
	if (window.matchMedia("(min-width: 1000px)").matches) {
		$('#nav .content .container-contentLink .wrapper-el .el').removeClass('displayBlock show');
		$('#nav .content .container-contentLink .wrapper-el .' + $(this).data('content')).addClass('displayBlock').outerWidth();
		$('#nav .content .container-contentLink .wrapper-el .' + $(this).data('content')).addClass('show').outerWidth();
	}
})

$('#nav-btn-mobile').click(function(){
	if ($('#nav-btn-mobile').hasClass('active')) {
		$('#nav-btn-mobile').removeClass('active');
		$('#nav-mobile').removeClass('show');
	}else {
		$('#nav-btn-mobile').addClass('active');
		$('#nav-mobile').addClass('show');
	}
})

$('#nav-mobile .wrapper .container-linkPr ul li .link-delay').click(function(){
	$('#nav-mobile .wrapper .container-linkPr').removeClass('show').addClass('hide-left');
	$('#nav-mobile .wrapper .container-projects').removeClass('hide-right').addClass('show');
})

$('#nav-mobile .wrapper .container-projects .back').click(function(){
	$('#nav-mobile .wrapper .container-linkPr').removeClass('hide-left').addClass('show');
	$('#nav-mobile .wrapper .container-projects').removeClass('show').addClass('hide-right');
})





