window.onpageshow = function(event) {
	if (event.persisted) {
	    //window.location.reload() 
		$('#tr-el').removeClass('hide show').hide();
	}
};

if (document.location.href.indexOf('#delay') > -1) {

	$('#tr-el').addClass('hide').show();
	$('#tr-el .container-slides .slide .slg').addClass('show');
	
};

$("a.delay").click(function(e) {

	var link = $(this).attr("href");
	var linkSplit = link.split("/");
	var lastLink = linkSplit[linkSplit.length-1];

	var url = window.location.href;
	var urlsplit = url.split("/");
	var lastUrl = urlsplit[urlsplit.length-1];

	$('#tr-el').removeClass('show hide').show();
	$('#tr-el .container-slides .slide .slg').removeClass('show hide');
	$('#tr-el').show();
	setTimeout(function() {
		$('#tr-el').addClass('hide');
		setTimeout(function() {
			$('#tr-el .container-slides .slide .slg').addClass('show');
			setTimeout(function() {
				window.location.href = link + '#delay';
				
				if (lastLink == lastUrl) {
					setTimeout(function() {
						window.location.reload(); 
					}, 750);
				}
			}, 750);
			
		}, 750);
	}, 50);
	

    e.preventDefault();
	  
});


/*=================================
=            WRAP LINE            =
=================================*/

(function($){

/**
 * Creates a temporary clone
 *
 * param element element The element to clone
 */
	function _createTemp(element) {
		return element.clone().css({position: 'relative', width: '98%'});
	};

/**
 * Splits contents into words, keeping their original Html tag. Note that this
 * tags *each* word with the tag it was found in, so when the wrapping begins
 * the tags stay intact. This may have an effect on your styles (say, if you have
 * margin, each word will inherit those styles).
 *
 * param node contents The contents
 */
	function _splitHtmlWords(contents) {
		var words = [];
		var splitContent;
		for (var c=0; c<contents.length; c++) {
			if (contents[c].nodeType == 3) {
				splitContent = _splitWords(contents[c].textContent || contents[c].toString());
			} else {
				var tag = $(contents[c]).clone();
				splitContent = _splitHtmlWords(tag.contents());
				for (var t=0; t<splitContent.length; t++) {
					tag.empty();
					splitContent[t] = tag.html(splitContent[t]).wrap('<p></p>').parent().html();
				}
			}
			for (var w=0; w<splitContent.length; w++) {
				words.push(splitContent[w]);
			}
		}
		return words;
	};

/**
 * Splits words by spaces
 *
 * @param string text The text to split
 */
	function _splitWords(text) {
		return text.split(/\s+/);
	}

/**
 * Formats html with tags and wrappers.
 *
 * @param tag
 * @param html content wrapped by the tag
 */
	function _markupContent(tag, html) {
		// wrap in a temp div so .html() gives us the tags we specify
		tag = '<div>' + tag;
		// find the deepest child, add html, then find the parent
		return $(tag)
			.find('*:not(:has("*"))')
			.html(html)
			.parentsUntil()
			.slice(-1)
			.html();
	}

/**
 * The jQuery plugin function. See the top of this file for information on the
 * options
 */
	$.fn.splitLines = function(options) {
		var settings = {
			width: 'auto',
			tag: '<div>',
			wrap: '',
			keepHtml: true
		};
		if (options) {
			$.extend(settings, options);
		}
		var newHtml = _createTemp(this);
		var contents = this.contents();
		var text = this.text();
		this.append(newHtml);
		newHtml.text('42');
		var maxHeight = newHtml.height()+2;
		newHtml.empty();

		var tempLine = _createTemp(newHtml);
		if (settings.width !== 'auto') {
			tempLine.width(settings.width);
		}
		this.append(tempLine);
		var words = settings.keepHtml ? _splitHtmlWords(contents) : _splitWords(text);
		var prev;
		for (var w=0; w<words.length; w++) {
			var html = tempLine.html();
			tempLine.html(html+words[w]+' ');
			if (tempLine.html() == prev) {
				// repeating word, it will never fit so just use it instead of failing
				prev = '';
				newHtml.append(_markupContent(settings.tag, tempLine.html()));
				tempLine.html('');
				continue;
			}
			if (tempLine.height() > maxHeight) {
				prev = tempLine.html();
				tempLine.html(html);
				newHtml.append(_markupContent(settings.tag, tempLine.html()));
				tempLine.html('');
				w--;
			}
		}
		newHtml.append(_markupContent(settings.tag, tempLine.html()));

		this.html(newHtml.html());

	};
})(jQuery);


/*=====  End of WRAP LINE  ======*/

$(document).ready(function() {

	if (window.matchMedia("(min-width: 1250px)").matches) {
		$('.wrapLine').each(function (index) {
		    $(this).splitLines({tag:'<span>'});
		});

		$('#tr-el .container-slides .slide .slg .line').each(function (index) {
		    var characters = $(this).text().split("");
		    
		    $this = $(this);
		    $this.empty();
		    $.each(characters, function (i, el) {
		    $this.append("<span>" + el + "</span>");
		    });

		});
	}

	if (document.location.href.indexOf('#delay') > -1) {

		$('#tr-el').addClass('hide').show();
		$('#tr-el .container-slides .slide .slg').addClass('show');

	};

	/* BTN HOVER ANIM */

	$('.anim-btnHover-1, .anim-btnHover-2').each(function (index) {
	    var characters = $(this).text().split("");
	    
	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	    $this.append("<span>" + el + "</span>");
	    });

	});

	/* END BTN HOVER ANIM */

});


$(window).on('load', function() {


	setTimeout(function() {
		$('#tr-el').removeClass('hide').addClass('show');
		$('#tr-el .container-slides .slide .slg').addClass('show hide');
		
		setTimeout(function() {
			$('#tr-el').removeClass('hide show').hide();
		}, 1050);
	}, 50);

	/* position RS */
	$('#header-desktop .container-rs').css({'top' : + (parseInt($('#container-general section:nth-child(1)').outerHeight()) - 210) + 'px'});
	
	/* REMOVE DELAY */
	var myUrl = document.location.href;
	var newURL = myUrl.replace("#delay","");
	history.pushState(null, null, newURL);
	/* END REMOVE DELAY */

})


/*window resize */

$( window ).resize(function() {
	if (window.matchMedia("(min-width: 1250px)").matches) {
		$('.wrapLine').each(function (index) {
		    $(this).splitLines({tag:'<span>'});
		});

		$('#tr-el .container-slides .slide .slg .line').each(function (index) {
		    var characters = $(this).text().split("");
		    
		    $this = $(this);
		    $this.empty();
		    $.each(characters, function (i, el) {
		    $this.append("<span>" + el + "</span>");
		    });

		});
	}

	if (document.location.href.indexOf('#delay') > -1) {

		$('#tr-el').addClass('hide').show();
		$('#tr-el .container-slides .slide .slg').addClass('show');

	};

	/* BTN HOVER ANIM */

	$('.anim-btnHover-1, .anim-btnHover-2').each(function (index) {
	    var characters = $(this).text().split("");
	    
	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	    $this.append("<span>" + el + "</span>");
	    });

	});


	/*load slide */ 
	setTimeout(function() {
		$('#tr-el').removeClass('hide').addClass('show');
		$('#tr-el .container-slides .slide .slg').addClass('show hide');
		
		setTimeout(function() {
			$('#tr-el').removeClass('hide show').hide();
		}, 1050);
	}, 50);

	/* position RS */
	$('#header-desktop .container-rs').css({'top' : + (parseInt($('#container-general section:nth-child(1)').outerHeight()) - 210) + 'px'});
	
	/* REMOVE DELAY */
	var myUrl = document.location.href;
	var newURL = myUrl.replace("#delay","");
	history.pushState(null, null, newURL);
	/* END REMOVE DELAY */
});



