<?php
$to = "email@gmail.com"; // емайл получателя данных из формы
$subject = "Форма обратной связи на PHP"; // тема полученного емайла
$message = "Ваше имя: ".$_POST['nameGR']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['emailGR']."<br>"; //полученное из формы name=email
$message .= "Сообщение: ".$_POST['messageGR']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $subject, $message, $headers); //отправляет получателю на емайл значения переменных
?>