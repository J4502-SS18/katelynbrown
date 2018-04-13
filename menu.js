$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.navigation').slideToggle(500);
  });

$(window).resize(function() {
  if ( $(window).width() > 700 ) {
    $('.navigation').removeAttr('style')
  }

});

});
