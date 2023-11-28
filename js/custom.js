 $(document).ready(function () {
var owl = $('.owl-carousel.type1');
      owl.owlCarousel({
         loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dots:false,
   animateOut: 'fadeOut',
    animateIn: 'slideInRight',
    smartSpeed: 3000,
    autoplayTimeout:3000,
     autoplayHoverPause:false,
     navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
});

var owl = $('.owl-carousel.type2');
      owl.owlCarousel({
         loop:true,
    margin:15,
    autoplay:true,
    nav:false,
    dots:false,
   animateOut: 'fadeOut',
    animateIn: 'slideInRight',
    smartSpeed: 3000,
    autoplayTimeout:3000,
     autoplayHoverPause:true,
      navText:["<div class='nav-btn prev-slider'></div>","<div class='nav-btn next-slider'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


var owl = $('.owl-carousel.type3');
      owl.owlCarousel({
         loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false,
   animateOut: 'fadeOut',
    animateIn: 'slideInRight',
    smartSpeed: 3000,
    autoplayTimeout:3000,
     autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



});

 function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function openCity1(evt1, cityName1) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName1).style.display = "block";
  evt1.currentTarget.className += " active";
}

  // jQuery(document).ready(function ($) { 
  // var jssor_1_SlideshowTransitions = [];
  //   var jssor_1_options = {
  //     $AutoPlay: true,
  //     $SlideshowOptions: {
  //     $Class: $JssorSlideshowRunner$,
  //     $Transitions: jssor_1_SlideshowTransitions,
  //     $TransitionsOrder: 1
  //     },
  //     $ArrowNavigatorOptions: {
  //     $Class: $JssorArrowNavigator$
  //     },
  //     $ThumbnailNavigatorOptions: {
  //     $Class: $JssorThumbnailNavigator$,
  //     $Cols: 10,
  //     $SpacingX: 8,
  //     $SpacingY: 8,
  //     $Align: 360
  //     }
  //   };
    
  //   var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  //   function ScaleSlider() {
  //     var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
  //     if (refSize) {
  //       refSize = Math.min(refSize, 100+'%');
  //       jssor_1_slider.$ScaleWidth(refSize);
  //     }
  //     else {
  //       window.setTimeout(ScaleSlider, 25);
  //     }
  //   }
  //   ScaleSlider();
  //   $(window).bind("load", ScaleSlider);
  //   $(window).bind("resize", ScaleSlider);
  //   $(window).bind("orientationchange", ScaleSlider);
  // });


   $(document).ready(function() {
      $("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:5,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
    });
    
    
    $(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#carousel"
  });
  
  
  /*$(".menuIcon2").click(function(){
    $(".header_top .rht").toggle();
  });*/
  
});
    

