window.onscroll = function() {headerFix()};

var navbar = document.getElementById("searcheaderNav");
var contentBlock = document.getElementById("contentBlock")
var sticky = navbar.offsetTop;

function headerFix() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    contentBlock.classList.add('main-content');
  } else {
    navbar.classList.remove("sticky");
    contentBlock.classList.remove('main-content');
  }
}


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
    });
        // $(".drop-product").focusout(function(){
        //     $(".drop-product").removeClass("active");
        //         $(".dropdown-menu").fadeOut();
        // })
$(".showHide").on('click', function() {
      var blkId = $(this).attr('data-showHideId');
      $("#"+blkId).toggle();
      if($("#"+blkId).is(":visible")){
        $(this).text('-Less...');
      } else{
        $(this).text('+More...');
      }
    });
});
function showImage(){

  document.getElementById("orangeDiv").style.display = "block";
  // document.getElementById("grapeDiv").style.display = "block";
  // document.getElementById("pineDiv").style.display = "block";
}
function vegImage(){
  document.getElementById("carrotDiv").style.display = "block";
}
function smoothyImage(){
  document.getElementById("sDiv").style.display = "block";
}
function herbImage(){
  document.getElementById("hDiv").style.display = "block";
}