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



// Contact Form

// $(function() {
//   $(".button").click(function() {
//
//   });
// });

$(function() {
  $('.error').hide();
  $('.button').click(function() {
    // validate and process form here
    $('.error').hide();
    var name = $('input#name').val();
    if (name ==="") {
      $('label#name_error').show();
      $('input#name').focus();
      return false;
    }
    var email = $('input#email').val();
    if (email ==="") {
      $('label#email_error').show();
      $('input#email').focus();
      return false;
    }
    var message = $('textarea#message').val();
    if (message =="") {
      $('label#message_error').show();
      $('textarea#message').focus();
      return false;
    }

    var dataString = "name=" + name +'&email=' + email + '&message' + message;
    $.ajax({
      type: 'POST',
      success: function() {
        $('#contact_form').html('<div id="msg"></div>');
        $('#msg').html('<h2>Contact Form Submitted!</h2>')
        .append('<p>We will be in touch soon. </p>')
        .hide()
      }
    });
    return false;
  })
})
