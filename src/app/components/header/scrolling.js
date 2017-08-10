$(document).ready(function() {
  $("#scroll-btn").click(function(){
    $('html, body').animate({scrollTop: $('#graph').offset().top}, 1200);
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $("#filter_div").animate({opacity: 1}, 1000);
    $("#filter_div2").delay(500).animate({opacity: 1}, 1000);
  }
});
