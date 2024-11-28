<?php

    $email = $_POST["email"]; 
    $subject = $_POST["subject"]; 
    $message = $_POST["message"];
    
    $returnMessage = "email: $email, subject: $subject, message: $message";

    $result = array(
        "email" => $email,
        "subject" => $subject,
        "message" => $message,
    );

    $output = json_encode($result);
    echo $output;
?>