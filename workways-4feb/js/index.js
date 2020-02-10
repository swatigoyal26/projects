



/*nav bar*/
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
 

  $('.js-scroll-trigger').click(function() {
  //  $('.navbar-collapse').collapse('hide');

  });


  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };


  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
});


  // Material Select Initialization


   // $(".showHide").on('click', function() {
   //    var blkId = $(this).attr('data-showHideId');
   //    $("#"+blkId).toggle();
   //    if($("#"+blkId).is(":visible")){
   //      $(this).text('Less...');
   //    } else{
   //      $(this).text('More...');
   //    }
   //  });
  

