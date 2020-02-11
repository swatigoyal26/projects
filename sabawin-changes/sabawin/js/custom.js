$(document).ready(function() {
  $('#shortImage img').on('click', function(e) {
    var imgSrc = $(this).attr('src');
    console.log(imgSrc);
    $('#bigImage').attr('src', imgSrc);
  });


  // $('#popUpWindow').on('click', function(e){
  	
  // }
  /*Dropdown*/
  $(".drop-product").click(function(e){
            e.preventDefault();
            if( $(this).hasClass("active")){
                $(this).removeClass("active");
                $(this).next(".dropdown-menu").fadeOut()
            }
            else{
                $(".drop-product").removeClass("active");
                $(".dropdown-menu").fadeOut();
                $(this).addClass("active");
                $(this).next(".dropdown-menu").fadeIn()
            }
        })
        // $(".drop-product").focusout(function(){
        //     $(".drop-product").removeClass("active");
        //         $(".dropdown-menu").fadeOut();
        // })
});
