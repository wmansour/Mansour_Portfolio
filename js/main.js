$(document).ready(function() {
  $('#submit-btn').click(function() {
    $('#contact-form').attr('action','mailto:wmans619@gmail.com?subject=' + $('#name').val() + '&body=' + $('#email').val() + $('#message').val());
    $('#contact-form').submit();
  });
});
