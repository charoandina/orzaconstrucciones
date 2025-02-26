<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["phone"]) || empty($_POST["message"])) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    $name = htmlspecialchars(strip_tags($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags($_POST["phone"]));
    $message = htmlspecialchars(strip_tags($_POST["message"]));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El email no es válido.";
        exit;
    }

    $to = "noobstudioagency@gmail.com";  // CAMBIAR POR ORZA UNA VEZ QUE VAYAMOS AO VIVO
    $subject = "Nuevo mensaje de contacto de $name";
    $body = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nMensaje:\n$message";
    $headers = "From: orza@orzaconstrucciones.com\n";
    $headers .= "Reply-To: $email\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Método no permitido.";
}

?>
