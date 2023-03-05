<?php
  $login = filter_var(trim($_POST['login_log']), FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['password_pass']), FILTER_SANITIZE_STRING);
  $email = filter_var(trim($_POST['emailEm']), FILTER_SANITIZE_STRING);
  $pass = md5($pass."123fdsa2");
  $mysqli = new mysqli('localhost','root','root','reg_bg');
  $result = $mysqli->query("SELECT * FROM `users` WHERE `Login`= '$login' and `Password` = '$pass' and `Email` = '$email'");
  $user = $result -> fetch_assoc();
  if(empty($user) or count($user) == 0) {
    echo "Пользователь не найден";
    exit();
  }
  setcookie('user_',$user['Login'], time() + 3600,"/");
  $mysqli->close();
  header('Location:/');
?>