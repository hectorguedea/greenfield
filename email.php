<?php


$to = "";
$subject = "Prueba Mensaje de Formulario";


$message = "
<html>
<head>
<title>Contact Information</title>
</head>
<body>";

$message .= "
<p> <strong>Name:</strong> " . $_POST['name'] . "</p>
 <p><strong>Email:</strong> " . $_POST['email'] . "</p>
 <p><strong>Teléfono:</strong> " . $_POST['phone'] . "</p>
 <p><strong>Message:</strong> " . $_POST['message'] . "</p>";



$message .= "</body>
</html>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$headers .= 'From: Dassaev Novela <dassaev86@gmail.com>' . "\r\n";

// echo "<div>" . $message . "</div>";

$success = mail($to, $subject, $message, $headers);

if (!$success) {
    echo "<div class='alert alert-danger'>Hubo un error al mandar la información.</div>";
} else {
    echo "<div class='alert alert-success'>¡Gracias por contactarnos! Tu información se mandó correctamente.</div>";
}


?>
