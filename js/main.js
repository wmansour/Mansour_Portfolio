// $(document).ready(function() {
//   $('#submit-btn').click(function() {
//     $('#contact-form').attr('action','mailto:wmans619@gmail.com?subject=' + $('#name').val() + '&body=' + $('#email').val() + $('#message').val());
//     $('#contact-form').submit();
//   });
// });


$(function() {
  $('#home-link').click(function(){
    $('html,body').animate({scrollTop: $('header').offset().top},'slow')
  })
  $('#about-link').click(function(){
    $('html,body').animate({scrollTop: $('.about').offset().top},'slow')
  })
  $('#portfolio-link').click(function(){
    $('html,body').animate({scrollTop: $('.portfolio').offset().top},'slow')
  })
  $('#contact-link').click(function(){
    $('html,body').animate({scrollTop: $('.contact').offset().top},'slow')
  })
})
