<?php
    include_once '../includes/dbh.inc.php';
    include_once '../includes/functions.inc.php';
    
    $a = array($_POST['1'], $_POST['2'], $_POST['3'], $_POST['4'], $_POST['5'], $_POST['6'], $_POST['7'], $_POST['8'], $_POST['9'], $_POST['10'], $_POST['11'], $_POST['12'], $_POST['13'], $_POST['14'], $_POST['15'], $_POST['16'], $_POST['17'], $_POST['18'], $_POST['19'], $_POST['20'], $_POST['21'], $_POST['22'], $_POST['23'], $_POST['24']);
    if(!savedonce($conn, $Id)){
        savePfach($conn, $Id, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $a[7], $a[8], $a[9], $a[10], $a[11], $a[12], $a[13], $a[14], $a[15], $a[16], $a[17], $a[18], $a[19], $a[20], $a[21], $a[22], $a[23]); //Wahl speichern
        header("location: ../output.php?saved=true&oldone=false");
        exit();
    }else {
        deleteoldPfach($conn, $Id);
        savePfach($conn, $Id, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $a[7], $a[8], $a[9], $a[10], $a[11], $a[12], $a[13], $a[14], $a[15], $a[16], $a[17], $a[18], $a[19], $a[20], $a[21], $a[22], $a[23]); //Wahl speichern
        header("location: ../output.php?saved=true&oldone=true");
        exit();
    }
    print_r($a);
?>