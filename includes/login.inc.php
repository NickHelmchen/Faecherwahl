<?php

if (isset($_POST["submit"])) {          //Überprüfung ob es eine reale Eingabe gab, um uf die Anmeldung zu gelangen
    
    $username = $_POST["Uid"];          //Variable username, die den Wert der Eingabe erhält
    $pwd = $_POST["pwd"];               //Variable pwd, die den Wert der Eingabe erhält

    require_once 'dbh.inc.php';         //Databasehandler impotieren
    require_once 'functions.inc.php';   //Functionen importieren

    uidExists($conn, $username);        //überprüfung, ob der Benutzername existiert 
    loginUser($conn, $username, $pwd);  //Anmeldung des Benutzers
}
else {                                  //Falls keine reale eingabe getätigt wurde
    echo "Kein realer Anmeldeversuch";
    exit();
}