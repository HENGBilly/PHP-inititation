<?php
// Définir le fuseau horaire
date_default_timezone_set('Europe/Paris'); 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $prenom = htmlspecialchars($_POST['prénom']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']); // Mot de passe en clair
    $message = htmlspecialchars($_POST['message']);
    $age = isset($_POST['age']) ? "No" : "Yes" ;

    // Préparation des données à stocker
    $newEntry = [
        "name" => $name,
        "prenom" => $prenom,
        "email" => $email,
        "password" => $password, // Stocké en clair pour l'instant (non recommandé)
        "message" => $message,
        "age" => $age
    ];

    // Chemin vers le fichier JSON
    $filePath = 'data.json';

    // Lecture du fichier JSON
    if (file_exists($filePath)) {
        $jsonData = file_get_contents($filePath);
        $data = json_decode($jsonData, true); // Conversion en tableau PHP
    } else {
        $data = [];
    }

    // Vérification si l'email existe déjà
    $emailExists = false;
    foreach ($data as $entry) {
        if ($entry['email'] === $email) {
            $emailExists = true;
            break;
        }
    }

    if ($emailExists) {
        echo "<h2>Erreur : L'email existe déjà dans la base de données.</h2>";
    } else {
        // Ajout de la nouvelle entrée
        $data[] = $newEntry;

        // Écriture dans le fichier JSON
        if (file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT))) {
            echo "<h2>Données enregistrées avec succès.</h2>";
            echo "<p><strong>Name:</strong> $name</p>";
            echo "<p><strong>First name:</strong> $prenom</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Message:</strong> $message</p>";
            echo "<p><strong>I am of age:</strong> $age</p>";
        } else {
            echo "<h2>Erreur : Impossible d'enregistrer les données.</h2>";
        }
    }
}
?>
