$(document).ready(function() {
  $("#scroll-btn").click(function(){
    $('html, body').animate({scrollTop: $("#graph").offset().top}, 1200);
  });
});
