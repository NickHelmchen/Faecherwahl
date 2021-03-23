<?php

date_default_timezone_set("Europe/Berlin");     //Zeitzohne wird gesetzt
        $timestamp = time();                    //Zeit wird ausgelesen und gespeicher
        $datum = date("d.m.Y",$timestamp);      //
        $uhrzeit = date("H:i",$timestamp);      // Datum und Uhrzeit werden in lesbare Formate umgewandelt

function pwdMatch($pwd, $PwdRepeat) {           //Überprüfung ob eingebebenes Passwort mit der Wiederholung übereinstimmt
    $result = null;

    if ($pwd !== $PwdRepeat) {                  //Wenn sie nicht übereinstimmen wird true zurückgegeben
        $result = true;
    }
    else {                                      //Wenn sie übereinstimmen wird false zurückgegeben
        $result = false;
    }
    return $result;                             //Rückgabeparameter
}

function uidExists($conn, $username) {                                          //Überprüfung, ob der Benutzer existiert
    $sql = "SELECT * FROM users WHERE usersUid = ?;";                           //Aus der Tabelle users wird alles ausgelesen wo der Benutzername dem eingegebenen Wert entspricht
    $stmt = mysqli_stmt_init($conn);                                            //statement wird initialisiert und gibt ein objekt zurück
    if (!mysqli_stmt_prepare($stmt, $sql)) {                                    //SQL Statement auf ausführung vorbereiten
        header("location: ../signup.php?error=connectionfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $username);                              //Bindet Variablen als Parameter an eine vorbereitete Anweisung
    mysqli_stmt_execute($stmt);                                                 //Ausführung des Statements

    $resultData = mysqli_stmt_get_result($stmt);                                //Erhaltene Daten werden in variable resultData gespeichert

    if ($row = mysqli_fetch_assoc($resultData)) {                               //Umwandeln der Daten in ein Assioziatives Array für einfachere Datenverwendung fals daten vorhanden
        return $row;                                                            //Daten als Ausgabeparameter
    }
    else {                                                                      //An sonsten
        $result = false;                                                        //Ausgabe von false
        return $result;
    }

    mysqli_stmt_close($stmt);                                                   //Statement wird Geschlossen an sonsten zu viele Anfragen ==> Error
}

function createUser($conn, $name, $username, $class, $pwd) {                                        //Benutzer erstellen
    $sql = "INSERT INTO users (usersName, usersUid, usersclass, usersPwd) VALUES( ?, ?, ?, ?)";     //in die Tabelle users wird in die Spalten (usersName, usersUid, usersclass, usersPwd) die Werte eingetragen die überreicht wurden 
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../signup.php?error=connectionfailed");
        exit();
    }

    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);                                             //Eingegebenes passwort bekommt hash nach neustem Sicherheitsstandart, der bei der PHP version am besten ist

    mysqli_stmt_bind_param($stmt, "ssss", $name, $username, $class, $hashedPwd);                    //s steht für String. Da vier Stings übergeben werden sollen also vier mal s (für int dementsprechend ein i) ($name, $username, $class, $hashedPwd) die Reihenfolge der Variablen muss mit der Reihenfolge der in $sql angegebenen Reihenfolge übereinstimmen
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../signup.php");
    exit();
}

function passwordreset($conn, $username, $pwd) {                            //Passwort zurücksetzen
    $sql = "UPDATE users SET usersPwd = ? WHERE users.usersUid = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../passwortreset.php?error=connectionfailed");
        exit();
    }

    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "ss", $hashedPwd, $username);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../passwortreset.php?error=worked");
    exit();
}

function adminpwd($conn, $username, $pwd) {             //Überprüfung, ob es sich um ein Admin Passwort handelt
    $uid = uidExists($conn, $username);

    $pwdHashed = $uid["usersPwd"];
    $checkPwd = password_verify($pwd, $pwdHashed);      //Passwort wird mit dem hashed Passwort verglichen und boolean zurückgegeben

    if ($checkPwd === false) {                          //Wenn die Passwörter nicht übereinstimmen
        $result = false;
        return $result;                                 //rückgabe von false
        exit();
    }
    else {                                              //wenn die Passwörter übereinstimmen
        $result = true;
        return $result;                                 //rückgabe von true
        exit();
    }
}

function loginUser($conn, $username, $pwd) {                    //Benutzer anmelden
    $uid = uidExists($conn, $username);

    if ($uid === false) {                                       //Falls der Benutzer nicht existiert
        header("location: ../index.php?error=wronglogin");
        exit();
    }

    $pwdHashed = $uid["usersPwd"];                              //Benutzerpasswort wird aus Datenbank ausgelesen (hashed)
    $checkPwd = password_verify($pwd, $pwdHashed);              //Eingegebenes Passwort wird mit hashed Passwort verglichen und boolean zurückgegeben

    if ($checkPwd === false) {                                  //Wenn die Passwörter nicht übereinstimmen
        header("location: ../index.php?error=wronglogin");
        exit();
    }
    else if ($checkPwd === true){                               //Wenn die Passwörter übereinstimmen
        session_start();                                        //starten einer _SESSION
        $_SESSION["userid"] = $uid["usersId"];                  //In der _SESSION wird die Id des Benutzers aus der Datenbank gespeichert
        $_SESSION["userUid"] = $uid["usersUid"];                //In der _SESSION wird der Benutzername des Benutzers aus der Datenbank gespeichert
        $_SESSION["userName"] = $uid["usersName"];              //In der _SESSION wird der echte Name des Benutzers aus der Datenbank gespeichert
        $_SESSION["userclass"] = $uid["usersclass"];            //In der _SESSION wird die Klasse des Benutzers aus der Datenbank gespeichert
        if ($_SESSION["userid"] == 1) {                         //Wenn sich der Benutzer Admin anmeldet wird das Secret aus der _SESSION gelöscht und stattdessen 1 eingetragen (Wichtig für sicherheit das Secret nicht ausgelesen wird. Gleichzeitig in der Datenbank gespeicht und nicht in Code einsichtbar)
            $_SESSION["userclass"] = 1;                         
        }
        if ($_SESSION["userclass"] == 1) {                      //Wenn die Klasse des Users 1 (Administrator) ist, wird er auf das Adminpanel geleitet
            header("location: ../admin.php");
        }
        else if ($_SESSION["userclass"] == 2) {                 //Wenn die Klasse des Users 2 (Auswertung) ist, wird er auf die Seite der Wahlanschau geleitet
            header("location: ../view.php");
        }
        else {
            header("location: ../wahl/info.php");
            //header("location: ../wahl/wahl.php");               //Wenn die Klasse des Users etwas anderes als 1 oder 2 ist, wird er auf die Wahl seite geleitet
        }
    }
}

function savePfach($conn, $Id, $P1, $P2, $P3, $P4, $P5, $subMathe, $subChemie, $subPhysik, $subBiologie, $subDeutsch, $subEnglisch, $subFranzoesisch, $subSpanisch, $subLatein, $subMusik, $subKunst, $subsubDS, $subInformatik, $subGeschichte, $subPoWi, $subReligion, $subWn, $subErdkunde, $subFuer12) { //Wahl speichern


    $sql = "INSERT INTO sub ( subId, subP1, subP2, subP3, subP4, subP5, subMathe, subChemie, subPhysik, subBiologie, subDeutsch, subEnglisch, subFranzoesisch, subSpanisch, subLatein, subMusik, subKunst, subsubDS, subInformatik, subGeschichte, subPoWi, subReligion, subWn, subErdkunde, subFuer12 ) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../save.php?error=Pafachtransition");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "iiiiiiiiiiiiiiiiiiiiiiiii", $Id, $P1, $P2, $P3, $P4, $P5, $subMathe, $subChemie, $subPhysik, $subBiologie, $subDeutsch, $subEnglisch, $subFranzoesisch, $subSpanisch, $subLatein, $subMusik, $subKunst, $subsubDS, $subInformatik, $subGeschichte, $subPoWi, $subReligion, $subWn, $subErdkunde, $subFuer12);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
}

function globalpwd($conn) {                                             //globales Passwort (Sicherheitsfunktion!! darf nicht geändert werden)
    $sql = "SELECT usersclass FROM users WHERE usersId = 1;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../index.php?errpr=sqlnotpossible");
        exit();
    }

    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    }

    mysqli_stmt_close($stmt);
}

function savedonce($conn, $Id) {                                        //Überprüfung ob bereits eine Wahl gespeicher wurde
    $sql = "SELECT * FROM sub WHERE subId = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../mainpage.php?error=Pafachtransition");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "i", $Id);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if (mysqli_fetch_assoc($resultData)) {
        $result = true;
        return $result;
    }
    else {
        header("location: ../mainpage.php?error=Idnichtverwendet");
        $result = false;
        return $result;
    }

    mysqli_stmt_close($stmt);
}

function deleteoldPfach($conn, $Id) {                               //Altes Pfach löschen wenn neues gespeichert werden soll
    $sql = "DELETE FROM sub WHERE sub.subId = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../mainpage.php?error=norealentery");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "i", $Id);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
}

function deleteuser($conn, $username) {                         //Benutzer mit Benutzername löschen sowie seine Wahldaten
    $sql = "DELETE users, sub 
            FROM users 
            LEFT JOIN sub ON users.usersId = sub.subId
            WHERE users.usersUid = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../admin.php?error=norealentery");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../deleteuser.php?error=works");
    exit();
}

function deletebyclass($conn, $class) {                         //Alle Benutzer mit der gleichen Klasse löschen sowie deren Wahldaten
    $sql = "DELETE users, sub
            FROM users
            LEFT JOIN sub ON users.usersId = sub.subId
            WHERE users.usersclass = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../admin.php?error=norealentery");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "i", $class);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../deleteuser.php?error=works");
    exit();
}

function adminuser($conn, $user){                                   //Ausgabe der Daten eines Users
    $sql = "SELECT * FROM users WHERE users.usersName = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../deleteuser.php?error=sqlnotpossible");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $user);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);
    
    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    }

    mysqli_stmt_close($stmt);
}

function adminclass($class) {               //Überprüfung, ob die Klasse eines Nutzers die eines Administrators ist
    if ($class == 1 ||$class == 2) {
        return false;
    }
    else {
        return true;
    }
}

function viewall($conn) {                                       //Alle Daten der Wahl auslesen
    $sql = "SELECT * 
            FROM sub 
            LEFT JOIN users ON users.usersId = sub.subId";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../view.php");
        exit();
    }

    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = $resultData) {
        return $row;
    }
    else {
        $result = false;
        return $result;
        exit();
    }

    mysqli_stmt_close($stmt);
}

function viewspecial($conn, $name) {                                    //Die Wahldaten einer eingegebenen Person auslesen
    $sql = "SELECT * 
            FROM sub 
            LEFT JOIN users ON users.usersId = sub.subId
            WHERE users.usersName = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../view.php?error=namenichtvorhanden");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $name);
    mysqli_stmt_execute($stmt);
    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = $resultData) {
        return $row;
        exit();
    }
    mysqli_stmt_close($stmt);
    exit();
}