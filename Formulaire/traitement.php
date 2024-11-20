<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $prenom = htmlspecialchars($_POST['prénom']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $message = htmlspecialchars($_POST['message']);
    $age = isset($_POST['age']) ? "Yes" : "No"; // Vérifie si la case "I am of age" est cochée

    // Affichage des données
    echo "<h2>Données reçues:</h2>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>First name:</strong> $prenom</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Password:</strong> $password</p>";
    echo "<p><strong>Message:</strong> $message</p>";
    echo "<p><strong>I am of age:</strong> $age</p>";
}
?>
