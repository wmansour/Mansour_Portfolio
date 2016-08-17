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

$(function() {
  $('.nav-toggle').on('click', function() {
    $('.wrapper').toggleClass('open');
    $('nav').toggleClass('open');
    $('#open').toggleClass('turn');
  });
});


// Contact Form
var ajax = {
  send: function() {
    var userName = $('#name').val();
    var userEmail = $('#email').val();
    var userMessage = $('#message').val();

    if (userName === '' || userEmail === '' || userMessage === '') {
      alert('Form Not Complete');
    }
    else {
      ajax.SetText("Sending...");
      $.post("sendmail.php", {
        name: userName, email: userEmail, message: userMessage
      }, function(data) {
        if(data === "true") {
          ajax.SetText("Sent!");
        } else {
          ajax.SetText('Send Mail');
          alert('Not Good');
        }
      });
    }
  },
  SetText: function(text) {
    $('#submit-btn').val(text);
  }
}
