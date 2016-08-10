// Carousel Enable
$(document).ready(function() {
  $('.carousel').carousel('pause');
});


//Scroll
$(function() {
  $('#home-link').click(function(){
    $('html,body').animate({scrollTop: $('header').offset().top},'slow')
  })
  $('#story-link').click(function(){
    $('html,body').animate({scrollTop: $('.story').offset().top},'slow')
  })
  $('#wedding-link').click(function(){
    $('html,body').animate({scrollTop: $('.wedding').offset().top},'slow')
  })
  $('#party-link').click(function(){
    $('html,body').animate({scrollTop: $('.bridal-party-section').offset().top},'slow')
  })
  $('#rsvp-link').click(function(){
    $('html,body').animate({scrollTop: $('.rsvp').offset().top},'slow')
  })
})
