<?php
$username = $_POST['username'];
$phone = $_POST['phone'];
$username = htmlspecialchars($username);
$phone = htmlspecialchars($phone);
$username = urldecode($username);
$phone = urldecode($phone);
$username = trim($username);
$phone = trim($phone);
if (mail("kockin.tema@yandex.ru", "Заявка на обратный звонок", "Имя:".$username.". Телефон:".$phone, "From: info@cn20106.tmweb.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>