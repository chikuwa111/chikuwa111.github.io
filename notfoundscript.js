$(function(){

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
