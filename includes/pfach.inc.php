<?php
    session_start();                            //Session wird gestartet

if (isset($_POST["speichern"])) {               //Überprüfung auf reelle Eingabe
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    $Id = $_SESSION["userid"];                  //Variable Id wird auf die UserId aus der _SESSION gesetzt

   if (!savedonce($conn, $Id)) {                //Falls nicht bereits eine wahl gespeichert wurde
        savePfach($conn, $Id);      	        //Wahl speichern
        exit();                  
    }
    else {                                      //Falls eine Wahl gespeichet wurde
        deleteoldPfach($conn, $Id);             //Alte wahl löschen
        savePfach($conn, $Id);                  //Neue Wahl speichern
        exit();                  
    }

}
else {                                          //Falls keine reelle Eingabe getätigt wurde
    echo "keine reelle Speicherung";
    exit();
}