/* RANDOM COVER FUNCTION */

shuffle = function (v) {
      for (var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
      return v;
};

var cmLyEl = [ 
      "show-qonto",
      "show-slide2",
      "show-slide3",
      "show-slide4"
];

shuffle(cmLyEl);  

var openDelayCover = 0;
var countElNum = 0;

var pagecover = function(){

      $('#section-home .container-caroussel').removeClass(function (index, className) {
            return (className.match(/\bshow-\S+/g) || []).join(' ');
      });

      $('#section-home .container-caroussel').addClass(cmLyEl[countElNum]);

      if (countElNum >= 3) {
            countElNum = 0;
      } else {
            countElNum++;
      }

      $('#section-home .container-caroussel .container-bg .bg').removeClass('show');

      if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
            $('#section-home .container-caroussel .container-bg .bg.bg-qonto').addClass('show');
      }else if($('#section-home .container-caroussel').hasClass('show-slide2')){
            $('#section-home .container-caroussel .container-bg .bg.bg-slide2').addClass('show'); 
      }else if($('#section-home .container-caroussel').hasClass('show-slide3')){
            $('#section-home .container-caroussel .container-bg .bg.bg-slide3').addClass('show'); 
      }else if($('#section-home .container-caroussel').hasClass('show-slide4')){
            $('#section-home .container-caroussel .container-bg .bg.bg-slide4').addClass('show'); 
      }

       

      setTimeout(function () {

            $('#section-home .container-caroussel .wrapper-container-el .container-el .el').removeClass('displayBlock').removeClass('hide show');

            if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
                  $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-qonto').addClass('displayBlock');
            }else if($('#section-home .container-caroussel').hasClass('show-slide2')){ 
                  $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-slide2').addClass('displayBlock');
            }else if($('#section-home .container-caroussel').hasClass('show-slide3')){ 
                  $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-slide3').addClass('displayBlock');
            }else if($('#section-home .container-caroussel').hasClass('show-slide4')){ 
                  $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-slide4').addClass('displayBlock');
            }

            if (openDelayCover == 0) {
                  setTimeout(function () {
                        $('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
                  }, 500);
                  openDelayCover = 1;
            } else {
                  setTimeout(function () {
                        $('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
                  }, 50);
            }

      }, 500); 

            
      
}

var autoType = function(elementClass, typingSpeed){
      var thhis = $(elementClass);

      thhis.css({
            "position": "relative",
            "display": "inline-block"
      });

      thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
      thhis = thhis.find(".text-js");
      var text = thhis.text().trim().split('');
      var amntOfChars = text.length;
      var newString = "";
      thhis.text("|");
      setTimeout(function(){
            thhis.css("opacity",1);
            thhis.prev().removeAttr("style");
            thhis.text("");
            for(var i = 0; i < amntOfChars; i++){
                  (function(i,char){
                        setTimeout(function() {        
                              newString += char;
                              thhis.text(newString);
                        },i*typingSpeed);
                  })(i+1,text[i]);
            } 
      },1500); 
} 
var delayCoverCaroussel = 6000; 

var pageintro = function(){

      $('#section-home .container-caroussel .container-bg .bg.bg-qonto').addClass('show');
      setTimeout(function () {
            $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-qonto').removeClass('displayBlock').removeClass('hide show');
            $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-qonto').addClass('displayBlock');
            setTimeout(function () {
                  $('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
            }, 500);
      },4000);


      setTimeout(function () {
            $('#section-home .container-caroussel .container-bg').addClass('active');
            $('.logo-header > div').fadeIn(); 
      },500)
      setTimeout(function () {
            $('.logo-born').addClass('active');
      },700)
      setTimeout(function () {
            $('.logo-triad').addClass('active'); 
            var char = $('.intro-text-1 h1').html().split(" ");  
            $('.intro-text-1 h1').html(' '); 
            for(var i=0; i<char.length; i++){
                  $('.intro-text-1 h1').append('<span class="char">'+char[i]+'</span>');
            }  
            setTimeout(function(){
                  $('.intro-text-1 h1 span:nth-child(1)').addClass('active')
            },100)
            setTimeout(function(){
                  $('.intro-text-1 h1 span:nth-child(2)').addClass('active')
            },600)
            setTimeout(function(){
                  $('.intro-text-1 h1 span:nth-child(3)').addClass('active')
            },1200)

            setTimeout(function(){
                  $('.intro-text-1 h1').fadeOut();
                  setTimeout(function(){
                        $('.intro-text-2').fadeIn();
                  },1500); 

                  var intervalCoverCaroussel = setInterval(function () {
                        pagecover(); 
                  }, delayCoverCaroussel);

            },2000)  
      },900) 

}
pageintro()

//

 


/*=======================================
=            COVER CAROUSSEL            =
=======================================*/
/* 
function coverCarousselBg() {

      $('#section-home .container-caroussel .container-bg .bg').removeClass('show');
      if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
            $('#section-home .container-caroussel .container-bg .bg.bg-qonto').addClass('show');
      } 

      $('#header-desktop, #loader-anim, #nav-btn').removeClass(function (index, className) {
            return (className.match(/\bstyle-\S+/g) || []).join(' ');
      });

      var dataClass = $('#section-home .container-caroussel .container-bg .bg.show').data('header');

      $('#header-desktop, #loader-anim, #nav-btn').addClass(dataClass);
};

var openDelayCover = 0;
function coverCarousselEl() {

      $('#section-home .container-caroussel .wrapper-container-el .container-el .el').addClass('hide');

      setTimeout(function () {

            $('#section-home .container-caroussel .wrapper-container-el .container-el .el').removeClass('displayBlock').removeClass('hide show');
            if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
                  $('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-qonto').addClass('displayBlock');
            } 

            if (openDelayCover == 0) {
                  setTimeout(function () {
                        $('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
                  }, 500);
                  openDelayCover = 1;
            } else {
                  setTimeout(function () {
                        $('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
                  }, 50);
            }

      }, 500);

};

function progressCoverCarousselReset() {
      $('#section-home .container-caroussel > .btn .progress').removeClass('active');
}

function progressCoverCarousselActive() {
      setTimeout(function () {
            $('#section-home .container-caroussel > .btn .progress').addClass('active');
      }, 50);

}


var countElNum = 0;
var delayCoverCaroussel = 6000; 

function initCoverCaroussel() {

      $('#section-home .container-caroussel').removeClass(function (index, className) {
            return (className.match(/\bshow-\S+/g) || []).join(' ');
      })

      $('#section-home .container-caroussel').addClass(cmLyEl[countElNum]); 

      coverCarousselBg();
      coverCarousselEl();
      progressCoverCarousselReset();
      progressCoverCarousselActive(); 

};

$('#section-home .container-caroussel > .btn').click(function () {
      initCoverCaroussel();
}) */


/*=====  End of COVER CAROUSSEL  ======*/


/*==============================================
=            SECTION TEAM CAROUSSEL            =
==============================================*/


var numberEl = $("#section-team .container-text .container-caroussel-name > .el-name").length;
var countEl = 0;
var delayTeamCaroussel = 4000;

function sectionTeamCarousselPrg() {

      var elPp = '#section-team .wrapper-caroussel-pp .container-caroussel-pp .el-pp';

      if (countEl < numberEl) {
            $('#section-team .container-text .container-caroussel-name .el-name.show').removeClass('show');

            $(elPp + '.show').removeClass('show').addClass('hide');

            setTimeout(function () {
                  $(elPp + '.hide').hide().removeClass('hide');
            }, 700);

            countEl++;

            $('#section-team .container-text .container-caroussel-name .el-name:nth-child(' + countEl + ')').addClass('show');

            $('.' + $('#section-team .container-text .container-caroussel-name .el-name.show').data('pp')).show();

            setTimeout(function () {
                  $(elPp + ':visible').addClass('show');

            }, 50);

            setTimeout(function () {
                  sectionTeamCarousselPrg();
            }, delayTeamCaroussel);

      } else {
            countEl = 0;
            sectionTeamCarousselPrg();
      };
};

function sectionTeamCarousselInit() {
      var parent = $("#section-team .container-text .container-caroussel-name");
      var divs = parent.children();
      while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }

      $('#section-team .container-text .container-caroussel-name .el-name:nth-child(1)').addClass('show');
      sectionTeamCarousselPrg();
};

/*=====  End of SECTION TEAM CAROUSSEL  ======*/


/*================================
=            SPONSORS            =
================================*/

function animSponsors() {
      $('#section-sponsors .container-li .li-el').hide();
      $('#section-sponsors .sep').addClass('anim');
      var delayAnimSponsors = 6000;
      var delayScaleSponsors = 700 + 300;
      $('#section-sponsors .container-li .li-el:nth-child(1)').show();
      setTimeout(function () {
            $('#section-sponsors .container-li .li-el:nth-child(1)').addClass('anim');
      }, 50);
      setTimeout(function () {
            $('#section-sponsors .container-li .li-el:nth-child(1)').removeClass('anim');
            setTimeout(function () {
                  $('#section-sponsors .container-li .li-el:nth-child(1)').hide().insertAfter('#section-sponsors .container-li .li-el:last-child()');
                  animSponsors();
            }, delayScaleSponsors);
      }, delayAnimSponsors);
};

/*=====  End of SPONSORS  ======*/



/*==================================
=            RESPONSIVE            =
==================================*/

function parallaxScrollEl() {

      $('.section-pr-el .container-el .el .title').each(function () {
            $(this).attr('data-parallax', '{"y": -35, "smoothness": 18}');
      })

      $('.section-pr-el .container-el .el .wrapper .container-img.parral').each(function () {
            $(this).attr('data-parallax', '{"y": -75, "smoothness": 28}');
      })

      $('#section-work .container-illu img.cloud-1').attr('data-parallax', '{"x": 160, "y": 80, "smoothness": 200}');
      $('#section-work .container-illu img.cloud-2').attr('data-parallax', '{"x": 40, "smoothness": 50}');
      $('#section-work .container-illu img.cloud-3').attr('data-parallax', '{"x": 60, "smoothness": 50}');
      $('#section-work .container-illu img.cloud-4').attr('data-parallax', '{"x": 100, "y": 40, "smoothness": 50}');

}

function initResponsive() { 
      if (window.matchMedia("(max-width: 970px)").matches) {
            $('.section-pr-el .container-el .el .title').each(function () {
                  $(this).insertAfter($(this).closest('.el').find('.container-img'));
            })
      } else {
            parallaxScrollEl();
      } 
}

/*=====  End of RESPONSIVE  ======*/



$(document).ready(function () {  
      initResponsive(); 
});


$(window).on('load', function () {

      //initCoverCaroussel();

      $window = $(window);

      var windowHeight = $window.height() / 2;


      var distanceSectionContact = $('#section-contact').offset().top - windowHeight;

      var distanceEl1 = $('#section-pr-1 .container-el .el:nth-child(1)').offset().top - windowHeight;
      var distanceEl2 = $('#section-pr-2 .container-el .el:nth-child(1)').offset().top - windowHeight;
      var distanceEl3 = $('#section-pr-3 .container-el .el:nth-child(1)').offset().top - windowHeight;
      var distanceEl4 = $('#section-pr-4 .container-el .el:nth-child(1)').offset().top - windowHeight;
      var distanceEl5 = $('#section-pr-5 .container-el .el:nth-child(1)').offset().top - windowHeight;
      var distanceEl6 = $('#section-pr-6 .container-el .el:nth-child(1)').offset().top - windowHeight;
      //var distanceEl6 = $('#section-deployment .container-el .el:nth-child(2)').offset().top - windowHeight;

      //var distanceSectionDP = $('#section-deployment').offset().top - windowHeight;

     // var distanceSectionTeam = $('#section-team').offset().top - windowHeight;

      function scrollAnim() {
            if ($window.scrollTop() >= distanceSectionContact) {
                  if (!$('#section-contact').hasClass('reach')) {
                        $('#section-contact').addClass('reach');
                  };
            };
            if ($window.scrollTop() >= distanceEl1-windowHeight) {
                  if (!$('#section-pr-1 .container-el .el:nth-child(1)').hasClass('reach')) {
                        $('#section-pr-1 .container-el .el:nth-child(1)').addClass('reach');
                  };
            };
            if ($window.scrollTop() >= distanceEl2-windowHeight) {
                  if (!$('#section-pr-2 .container-el .el:nth-child(1)').hasClass('reach')) {
                        $('#section-pr-2 .container-el .el:nth-child(1)').addClass('reach');
                  };
            };
            if ($window.scrollTop() >= distanceEl3-windowHeight) {
                  if (!$('#section-pr-3 .container-el .el:nth-child(1)').hasClass('reach')) {
                        $('#section-pr-3 .container-el .el:nth-child(1)').addClass('reach');
                  };
            };
            if ($window.scrollTop() >= distanceEl4-windowHeight) {
                  if (!$('#section-pr-4 .container-el .el:nth-child(1)').hasClass('reach')) {
                        $('#section-pr-4 .container-el .el:nth-child(1)').addClass('reach');
                  };
            };
            if ($window.scrollTop() >= distanceEl5-windowHeight) {
                  if (!$('#section-pr-5 .container-el .el:nth-child(1)').hasClass('reach')) {
                        $('#section-pr-5 .container-el .el:nth-child(1)').addClass('reach');
                  };
            };
            if ($window.scrollTop() >= distanceEl6-windowHeight) {
                  if (!$('#section-pr-6 .container-el .el:nth-child(1)').hasClass('reach')) {
                        $('#section-pr-6 .container-el .el:nth-child(1)').addClass('reach');
                  };
            };
            /* if ($window.scrollTop() >= distanceEl6) {
                  if (!$('#section-deployment .container-el .el:nth-child(2)').hasClass('reach')) {
                        $('#section-deployment .container-el .el:nth-child(2)').addClass('reach');
                  };
            }; */

            /* if ($window.scrollTop() >= distanceSectionDP) {
                  if (!$('#section-deployment .container-el .el:nth-child(2)').hasClass('reach')) {
                        $('#section-deployment .container-el .el:nth-child(2)').addClass('reach');
                  };
            }; */

           /*  if ($window.scrollTop() >= distanceSectionTeam) {
                  if (!$('#section-team').hasClass('reach')) {
                        $('#section-team').addClass('reach');
                        sectionTeamCarousselInit();
                  };
            }; */

            if ($window.scrollTop() + $window.height() == $(document).height()) {
                  if (!$('#section-sponsors').hasClass('reach')) {
                        $('#section-sponsors').addClass('reach');

                  };
            };
      }

      animSponsors();

      $window.scroll(function () {
            scrollAnim();
      });

      scrollAnim();  

      $('.qaslide').slick({
            dots: true,
            infinite: true,
            arrows:false,
            autoplay:true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            asNavFor: '.qaslide',
            adaptiveHeight:true
          });

})
