<?php

$uid = $_POST["Uid"];                                                           //Variable uid wird auf die Eingabe gesetzt
$pwd = $_POST["Pwd"];                                                           //Variable pwd wird auf die Eingabe gesetzt
$pwdRepeat = $_POST["PwdRepeat"];                                               //Variable pwdRepeat wird auf die Eingabe gesetzt

include_once "dbh.inc.php";                                                     //Databasehandler impotieren
include_once "functions.inc.php";                                               //Functionen importieren

if (pwdMatch($pwd, $pwdRepeat) !== false) {                                     //Falls die beiden eingegebenen Passwörter nicht übereinstimmen dann
    header("location: ../passwortreset.php/?error=pwdnotthesame");
    exit();
}

if (uidExists($conn, $uid) == false) {                                         //Falls der benutzer nicht existiert
    header("location: ../passwortreset.php/?error=usernamenichtvorhanden");
    exit();
}

passwordreset($conn, $uid, $pwd);                                              //Passwort wird zurückgesetzt auf eingegebenen Wert