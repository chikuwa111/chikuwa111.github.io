$(function(){

  $('#scroll-top-btn').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 'slow');
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 'slow');
    return false;
  });

  $('.how-it-works h1').click(function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.how-it-works p').slideUp();
    } else {
      $(this).addClass('open');
      $('.how-it-works p').slideDown();
    }
  });

});
