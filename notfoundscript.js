$(function(){

  $('#scroll-top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      scrollTop: position
    }, 'slow');
  });

  $('#logo').click(function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#happy').text("Congratulation!");
    } else {
      $(this).addClass('open');
      $('#happy').fadeIn();
    }
  });

});
