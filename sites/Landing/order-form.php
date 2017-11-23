<?php
    $name           =   $_POST['name'];
    $email         =   $_POST['email'];
    $street         =   $_POST['street'];
    $house          =   $_POST['house'];
    $house__part    =   $_POST['house__part'];
    $flat           =   $_POST['flat'];
    $floor          =   $_POST['floor'];
    $comment        =   $_POST['comment'];
    $pay__option    =   $_POST['pay__option'];
    $disturb        =   $_POST['disturb'];
    $disturb = isset($disturb) ? 'нет' : 'да';
    $mail__message = '
    <html lang="ru">
    <head>
        <title>Заказ</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $house__part . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Оплата: ' . $pay__option . '</li>
            <li>Перезвонить: ' . $disturb . '</li>
            <li>Комментарий: ' . $comment . '</li>
        </ul>
    </body>
    </html>
    ';
    echo $mail__message;
    $headers = "From: Создатель письма <mr.romatur@gmail.com>\r\n".
    "MIME-Version: 1.0"."\r\n".
    "Content-type: text/html; charset=UTF-8"."\r\n";
    $to = $email;
    $title = 'Заказ';
    $mail = mail($to, $title, $mail__message, $headers);
    if($mail){
        echo 'done';
    }
    else{
        echo 'error';
    }







?>
