<?php

if (isset($_POST["save_online"])) {          //Überprüfung ob es eine reale Eingabe gab, um uf die Anmeldung zu gelangen               

    require_once 'dbh.inc.php';         //Databasehandler impotieren
    require_once 'functions.inc.php';   //Functionen importieren

    $Id = $_SESSION["userid"];          
    $P1 = $_SESSION["pfach1"];
    $P2 = $_SESSION["pfach2"];
    $P3 = $_SESSION["pfach3"];
    $P4 = $_SESSION["pfach4"];
    $P5 = $_SESSION["pfach5"];
    $subMathe = $_SESSION["extra"][1];
    $subChemie = $_SESSION["extra"][2];
    $subPhysik = $_SESSION["extra"][3];
    $subBiologie = $_SESSION["extra"][4];
    $subDeutsch = $_SESSION["extra"][5];
    $subEnglisch = $_SESSION["extra"][6];
    $subFranzoesisch = $_SESSION["extra"][7];
    $subSpanisch = $_SESSION["extra"][8];
    $subLatein = $_SESSION["extra"][9];
    $subMusik = $_SESSION["extra"][10];
    $subKunst = $_SESSION["extra"][11];
    $subsubDS = $_SESSION["extra"][12];
    $subInformatik = $_SESSION["extra"][13];
    $subGeschichte = $_SESSION["extra"][14];
    $subPoWi = $_SESSION["extra"][15];
    $subReligion = $_SESSION["extra"][16];
    $subWn = $_SESSION["extra"][17];
    $subErdkunde = $_SESSION["extra"][18];
    $subFuer12 = $_SESSION["fuer12"];

    if(!savedonce($conn, $Id)){
        savePfach($conn, $Id, $P1, $P2, $P3, $P4, $P5, $subMathe, $subChemie, $subPhysik, $subBiologie, $subDeutsch, $subEnglisch, $subFranzoesisch, $subSpanisch, $subLatein, $subMusik, $subKunst, $subsubDS, $subInformatik, $subGeschichte, $subPoWi, $subReligion, $subWn, $subErdkunde, $subFuer12); //Wahl speichern
        header("location: ../output.php?saved=true&oldone=false");
        exit();
    }else {
        deleteoldPfach($conn, $Id);
        savePfach($conn, $Id, $P1, $P2, $P3, $P4, $P5, $subMathe, $subChemie, $subPhysik, $subBiologie, $subDeutsch, $subEnglisch, $subFranzoesisch, $subSpanisch, $subLatein, $subMusik, $subKunst, $subsubDS, $subInformatik, $subGeschichte, $subPoWi, $subReligion, $subWn, $subErdkunde, $subFuer12); //Wahl speichern
        header("location: ../output.php?saved=true&oldone=true");
        exit();
    }
}
else {                                  //Falls keine reale eingabe getätigt wurde
    echo "Keine reale Spericherung";
    exit();
}