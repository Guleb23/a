<?php
  $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
  $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
  $pass = md5($pass."123fdsa2");
  $mysqli = new mysqli('localhost','root','root','reg_bg');
  $mysqli->query("INSERT INTO `users`(`Login`,`Password`,`Email`) VALUES('$login','$pass','$email')");
  $mysqli->close();
  header('Location:/');
?>