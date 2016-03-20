<?php
if(isset($_POST['cfemail'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "caballero.iniesta@gmail.com";
$email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['cfname']) ||
!isset($_POST['cfemail']) ||
!isset($_POST['cfsubject']) ||
!isset($_POST['cfmessage'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['cfname'] . "\n";
$email_message .= "E-mail: " . $_POST['cfemail'] . "\n";
$email_message .= "Asunto: " . $_POST['cfsubject'] . "\n";
$email_message .= "Mensaje: " . $_POST['cfmessage'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
/*$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();*/
@mail($email_to, $email_subject, $email_message);

echo "¡El formulario se ha enviado con éxito!";
    header( 'Location: index.html' );
}
?>