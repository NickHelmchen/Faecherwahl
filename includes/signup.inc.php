<?php

 $name = $_POST["Name"];                                          //Variable name wird auf die Eingabe gesetzt
 $uid = $_POST["Uid"];                                            //Variable uid wird auf die Eingabe gesetzt
 $class = $_POST["class"];                                        //Variable class wird auf die Eingabe gesetzt
 $pwd = $_POST["Pwd"];                                            //Variable pwd wird auf die Eingabe gesetzt
 $pwdRepeat = $_POST["PwdRepeat"];                                //Variable pwdRepeat wird auf die Eingabe gesetzt

 require_once 'dbh.inc.php';
 require_once 'functions.inc.php';

 if (pwdMatch($pwd, $pwdRepeat) !== false) {                      //Falls die Passwörter nicht übereinstimmen
    header("location: ../signup.php/?error=pwdnotsame");
    exit();
 }

 if (uidExists($conn, $uid) !== false) {                          //Falls der Benutzer bereits existiert
    header("location: ../signup.php/?error=usernametaken");
 }

 createUser($conn, $name, $uid, $class,$pwd);                     //Benutzer wird erstellt
