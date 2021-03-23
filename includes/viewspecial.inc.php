<?php

 $name = $_POST["Name"];                            //Variable name wird auf die Eingabe gesetzt

 require_once 'dbh.inc.php';
 require_once 'functions.inc.php';

 $_SESSION["table"] = viewspecial($conn, $name);    //in der _SESSION wird die Rückgabe der Tabellenabfrage gespeicher

 header("location: ../viewspecial.php");