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





