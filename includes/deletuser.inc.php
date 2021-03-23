<?php
session_start();                                                        //php Session starten um _SESSION auszulesen.

include_once 'dbh.inc.php';                                             //Databasehandler impotieren
include_once 'functions.inc.php';                                       //Functionen importieren

$user = $_POST["Uid"];                                                  //variable user wird auf die eingabe der Seite gesetzt
$pwd = $_POST["Pwd"];                                                   //variable pwd wird auf die eingabe der Seite gesetzt
$class = $_POST["class"];                                               //variable class wird auf die eingabe der Seite gesetzt
$admin = $_SESSION["userUid"];                                          //variable admin wird auf die eingabe der Seite gesetzt
$deletename = false;
$deleteclass = false;
$row = adminuser($conn, $user);                                         //Auslesen des Benutzers der gelöscht wird auß der Datenbank

if (!adminpwd($conn, $admin, $pwd)) {
    header("location: ../deleteuser.php?error=falschesPasswort");       //Wenn das eingegebene Passwort nicht mit dem Passwort des angemeldeten Passworts übereinstimmt wird der Vorgang Abgebrochen
    exit();
}

if ($user != null) {                                                    //Wenn ein Name eingegeben wird dann
    if ($row["usersclass"] == 1 || $row["usersclass"] == 2) {           //Wenn es sich um einen Admin user handelt, kann dieser nicht gelöscht werden
        header("location: ../deleteuser.php?error=adminuser");
        exit();
    }
    $deletename = true;
}

if ($class != null) {                                                   //Wenn eine Klasse eingegeben wird
    if(!adminclass($class)){
        header("location: ../deleteuser.php?error=adminclass");         //Wenn es sich um eine Adminklasse handelt, dann kann diese nicht gelöscht werden
        exit();
    }
    $deleteclass = true;
}

if ($dont != true) {
    if ($deletename == true) {                                          //Wenn ein name eingegeben wurde
        deleteuser($conn, $user);                                       //benuttzer wird gelöscht
    }
    if ($deleteclass == true) {                                         //Wenn eine Klasse eingegeben wird
        deletebyclass($conn, $class);                                   //Klasse wird gelöscht
    }
}