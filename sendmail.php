<?php

  if(count($_POST) > 0) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $header = "Content-Type: text/html\r\nReply-To: $email\r\nFrom: #name <$email>";

    $body =
    @"Email sent from ".$_SERVER['REMOTE_ADDR']." at ".date("d/m/Y H:i",time())."<br>
    <hr>
    $message
    <hr>
    Email end";

    if(mail("wmans619@gmail.com", "A user sent you an email", $body, $header)) {
      die("true");
    }
    else {
      die('There was an error');
    }
  }

?>
