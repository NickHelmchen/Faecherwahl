<?php
    session_start();
    $a = array($_POST['1'], $_POST['2'], $_POST['3'], $_POST['4'], $_POST['5'], $_POST['6'], $_POST['7'], $_POST['8'], $_POST['9'], $_POST['10'], $_POST['11'], $_POST['12'], $_POST['13'], $_POST['14'], $_POST['15'], $_POST['16'], $_POST['17'], $_POST['18'], $_POST['19'], $_POST['20'], $_POST['21'], $_POST['22'], $_POST['23'], $_POST['24']);
    include_once 'includes/dbh.inc.php';
    include_once 'includes/functions.inc.php';
    
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
    print_r($a);
?>