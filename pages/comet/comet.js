$(function() {
  $('.nav-toggle').on('click', function() {
    $('.wrapper').toggleClass('open');
    $('nav').toggleClass('open');
  });
});

$(function() {
  $('#home-link').click(function(){
    $('html,body').animate({scrollTop: $('body').offset().top},'slow')
  })
  $('#about-link').click(function(){
    $('html,body').animate({scrollTop: $('.about').offset().top},'slow')
  })
  $('#show-link').click(function(){
    $('html,body').animate({scrollTop: $('.shows').offset().top},'slow')
  })
  $('#team-link').click(function(){
    $('html,body').animate({scrollTop: $('.team').offset().top},'slow')
  })
})
