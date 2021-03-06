<?php

session_start();                                //Eine Session starten
session_unset();                                //Alles aus der Session löschen
session_destroy();                              //Session schließen

header("location: ../index.php?error=logout");  //umleitung auf die Indexseite