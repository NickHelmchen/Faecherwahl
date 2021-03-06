<?php

    $serverName = "sql200.epizy.com";                                           //Server Name für die Erreichbarkeit
    $dBUsername = "epiz_27688546";                                              //Server Benutzername für die Anmeldung
    $dBPassword = "Okgeuj2GKGnymVh";                                            //Server Passwort für die Anmeldung
    $dBName = "epiz_27688546_data";                                             //Server Datenbankname in der die Tabellen gespeichert sind 

    $conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);     //Variable, mit der global eine Verbindung aufgebaut werden kann

    if(!$conn) {                                                                //Falls die Verbindung nicht möglich ist,
        die("Conection failed:". mysqli_connect_error());                       //wir eine Fehlermelung ausgegeben
    }