<?php
session_start();
function logicvariables(){
    //Variablen, die definieren, ob ein Fach als P2 gewählt werden kann
    /* Legende
    0: Mathe
    1: Informatik
    2: Chemie
    3: Biologie
    4: Physik
    5: Deutsch
    6: Englisch
    7: Französisch
    8: Latein
    9: Spanisch
    10: Kunst
    11: Musik
    12: Geschichte
    13: Politik Wirtschaft
    */
    $p2_waehlbar_local = array(
        false, false, false, false, false, false, false, false, false, false, false, false, false
    );
    $_SESSION['p2_waehlbar'] = $p2_waehlbar_local;

    //Variablen in Bezug auf die Kernfächer
    //Zählvariablen für Kernfächer und Nicht-Kernfächer
    $_SESSION['kernfaecher'] = 0;
    $_SESSION['nicht_kernfaecher'] = 0;
    //Variable, die beschreibt, ob Nicht-Kernfächer gewählt werden können
    $_SESSION['w_nk'] = true;

    //Variablen, die definieren, welche Bereiche noch wählbar sind
    /*
    0: A
    1: B
    2: C
    3: Sport
    */
    $w_bereich_local = array(
        true, true, true, false
    );
    $_SESSION['w'] = $w_bereich_local;

    //Variablen zum Zählen der Bereiche A, B, C, der Fremdsprachen und der Naturwissenschaften
    $_SESSION['A_anzahl'] = 0;
    $_SESSION['B_anzahl'] = 0;
    $_SESSION['C_anzahl'] = 0;
    $_SESSION['counter_fs'] = 0;
    $_SESSION['counter_nw'] = 0;

    //Variablen, die definieren, ob ein Fach wählbar ist
    $_SESSION['mathe_w'] = true;
    $_SESSION['informatik_w'] = true;
    $_SESSION['chemie_w'] = true;
    $_SESSION['biologie_w'] = true;
    $_SESSION['physik_w'] = true;
    $_SESSION['deutsch_w'] = true;
    $_SESSION['englisch_w'] = true;
    $_SESSION['franzoesisch_w'] = true;
    $_SESSION['latein_w'] = true;
    $_SESSION['spanisch_w'] = true;
    $_SESSION['kunst_w'] = true;
    $_SESSION['musik_w'] = true;
    $_SESSION['geschichte_w'] = true;
    $_SESSION['religion_w'] = true;
    $_SESSION['erdkunde_w'] = true;
    $_SESSION['powi_w'] = true;
    $_SESSION['sport_w'] = true;

    //Variablen, die definieren, welche Grundkurse gewählt wurden
    //Legende für die Extras
    /*
    0: Frei für eine einfacherere Bearbeitung und weniger umschreiben
    1: Biologie
    2: Chemie
    3: DS
    4: Deutsch
    5: Englisch
    6: Erdkunde
    7: Französisch
    8: Geschichte
    9: Informatik
    10: Kunst
    11: Latein
    12: Mathe
    13: Musik
    14: Physik
    15: PoWi
    16: Religion
    17: Spanisch
    18: WN
    */
    $extra_local = array(
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    );
    $_SESSION['extra'] = $extra_local;
    $_SESSION['sport_gk'] = false;
    $_SESSION['wish_for_p4_p5'] = '';

    $lp_local = array(
        0, 13, 12, 14, 16, 17
    );
    $_SESSION['lp'] = $lp_local;

    $_SESSION['lk_stundenanzahl'] = 5;
    $_SESSION['gk_stundenanzahl'] = 3;
    $_SESSION['sp_sf_stundenanzahl'] = 2;

    $_SESSION['stundenanzahl_gesamt'] = 21;
    $_SESSION['stundenanzahl_minimum'] = 32;

    $_SESSION['deutsch_already_counted'] = false;
    $_SESSION['geschichte_already_counted'] = false;
    $_SESSION['powi_already_counted'] = false;
    $_SESSION['mathe_already_counted'] = false;
}

function kernfaecher_add(){
    $_SESSION['kernfaecher'] = $_SESSION['kernfaecher'] + 1;
}

function kernfaecher_dec(){
    $_SESSION['kernfaecher'] = $_SESSION['kernfaecher'] - 1;
}

function nicht_kernfaecher_add(){
    $_SESSION['nicht_kernfaecher'] = $_SESSION['nicht_kernfaecher'] + 1;
}

function nicht_kernfaecher_dec(){
    $_SESSION['nicht_kernfaecher'] = $_SESSION['nicht_kernfaecher'] - 1;
}

function bereich_add($abc){
    $_SESSION[($abc . '_anzahl')] = $_SESSION[($abc . '_anzahl')] + 1;
}

function bereich_dec($abc){
    $_SESSION[($abc . '_anzahl')] = $_SESSION[($abc . '_anzahl')] - 1;
}

function waehlbarkeit($fach_w, $choose) {
    $_SESSION[$fach_w] = $choose;
}

function check_fach_for_pfach($fach){
    $help = false;
    for ($i = 1; $i < 6; $i++){
        if ($_SESSION['pfach' . $i] == $fach) {
            $help = true;
        }
    }
    return $help;
}

function disable_buttons_p($i){
    $arrays = $_SESSION['lp'];
    for ($j=1; $j <= $_SESSION['lp'][$i]; $j++) { 
            
    }
}

function enable_fachbutton($fach){
    echo 'document.getElementById(' . $fach . ' + ".label").style.opacity = \'1\'';
    echo 'document.getElementById(' . $fach . ').disabled = false';
}

function disable_fachbutton($fach){
    echo 'document.getElementById(' . $fach . ' + ".label").style.opacity = \'0.5\'';
    echo 'document.getElementById(' . $fach . ').disabled = true';
}

function nw_add(){
    $_SESSION['counter_nw'] = $_SESSION['counter_nw'] + 1;
}

function fs_add(){
    $_SESSION['counter_fs'] = $_SESSION['counter_fs'] + 1;
}

function fs_schon_gewaehlt_logic($fach_a, $fach_b, $fach_c, $i){
    $help2 = false;
    for ($k=0; $k < $i && !$help2; $k++) { 
        if($_SESSION['pfach' . $k] != $fach_a && $_SESSION['pfach' . $k] != $fach_b && $_SESSION['pfach' . $k] != $fach_c){
            $help2 = false;
        }else{
            $help2 = true;
        }
    }
    if($help2 == true){
        nicht_kernfaecher_add();
    }else{
        kernfaecher_add();
    }
}

function logicsubjects($i){
    switch ($_SESSION['pfach' . $i]) {
        case 'Mathe':
            if($i == 1){
                $_SESSION['profil'] = 'mana';
                $_SESSION['p2_waehlbar'][1] = true;
                $_SESSION['p2_waehlbar'][2] = true;
                $_SESSION['p2_waehlbar'][3] = true;
                $_SESSION['p2_waehlbar'][4] = true;
            }
            kernfaecher_add();
            bereich_add('C');
            waehlbarkeit('mathe_w', false);
            break;
        case 'Informatik':
            if ($i == 1) {
                $_SESSION['profil'] = 'mana';
                $_SESSION['p2_waehlbar'][0] = true;
                $_SESSION['p2_waehlbar'][2] = true;
                $_SESSION['p2_waehlbar'][3] = true;
                $_SESSION['p2_waehlbar'][4] = true;
                $_SESSION['chemie_w'] = true;
                $_SESSION['biologie_w'] = true;
                $_SESSION['physik_w'] = true;
            }
            nicht_kernfaecher_add();
            bereich_add('C');
            waehlbarkeit('informatik_w', false);
            nw_add();
            break;
        case 'Chemie':
            if($i == 1){
                $_SESSION['profil'] = 'mana';
                $_SESSION['p2_waehlbar'][0] = true;
                $_SESSION['p2_waehlbar'][1] = true;
                $_SESSION['p2_waehlbar'][3] = true;
                $_SESSION['p2_waehlbar'][4] = true;
                $_SESSION['informatik_w'] = true;
                $_SESSION['biologie_w'] = true;
                $_SESSION['physik_w'] = true;
            }
            nicht_kernfaecher_add();
            bereich_add('C');
            waehlbarkeit('chemie_w', false);
            nw_add();
            break;
        case 'Biologie':
            if($i == 1){
                $_SESSION['profil'] = 'mana';
                $_SESSION['p2_waehlbar'][0] = true;
                $_SESSION['p2_waehlbar'][1] = true;
                $_SESSION['p2_waehlbar'][2] = true;
                $_SESSION['p2_waehlbar'][4] = true;
                $_SESSION['informatik_w'] = true;
                $_SESSION['chemie_w'] = true;
                $_SESSION['physik_w'] = true;
            }
            nicht_kernfaecher_add();
            bereich_add('C');
            waehlbarkeit('bologie_w', false);
            nw_add();
            break;
        case 'Physik':
            if($i == 1){
                $_SESSION['profil'] = 'mana';
                $_SESSION['p2_waehlbar'][0] = true;
                $_SESSION['p2_waehlbar'][1] = true;
                $_SESSION['p2_waehlbar'][2] = true;
                $_SESSION['p2_waehlbar'][3] = true;
                $_SESSION['informatik_w'] = true;
                $_SESSION['chemie_w'] = true;
                $_SESSION['biologie_w'] = true;
            }
            nicht_kernfaecher_add();
            bereich_add('C');
            waehlbarkeit('physik_w', false);
            nw_add();
            break;
        case 'Deutsch':
            if($i == 1){
                $_SESSION['profil'] = 'spra';
                $_SESSION['p2_waehlbar'][6] = true;
                $_SESSION['p2_waehlbar'][7] = true;
                $_SESSION['p2_waehlbar'][8] = true;
                $_SESSION['p2_waehlbar'][9] = true;
            }
            kernfaecher_add();
            bereich_add('A');
            waehlbarkeit('deutsch_w', false);
            break;
        case 'Englisch':
            if($i == 1){
                $_SESSION['profil'] = 'spra';
                $_SESSION['p2_waehlbar'][5] = true;
                $_SESSION['p2_waehlbar'][7] = true;
                $_SESSION['p2_waehlbar'][8] = true;
                $_SESSION['p2_waehlbar'][9] = true;
                kernfaecher_add();
            }

            if($i > 1){
                fs_schon_gewaehlt_logic('Latein', 'Französisch', 'Spanisch', $i);
            }
            bereich_add('A');
            waehlbarkeit('englisch_w', false);
            fs_add();
            break;
        case 'Französisch':
            if($i == 1){
                $_SESSION['profil'] = 'spra';
                $_SESSION['p2_waehlbar'][5] = true;
                $_SESSION['p2_waehlbar'][6] = true;
                $_SESSION['p2_waehlbar'][8] = true;
                $_SESSION['p2_waehlbar'][9] = true;
                kernfaecher_add();
            }

            if($i > 1){
                fs_schon_gewaehlt_logic('Latein', 'Englisch', 'Spanisch', $i);
            }
            bereich_add('A');
            waehlbarkeit('franzoesiosch_w', false);
            waehlbarkeit('latein_w', false);
            waehlbarkeit('spanisch_w', false);
            fs_add();
            break;
        case 'Latein':
            if($i == 1){
                $_SESSION['profil'] = 'spra';
                $_SESSION['p2_waehlbar'][5] = true;
                $_SESSION['p2_waehlbar'][6] = true;
                $_SESSION['p2_waehlbar'][7] = true;
                $_SESSION['p2_waehlbar'][9] = true;
                kernfaecher_add();
            }

            if($i > 1){
                fs_schon_gewaehlt_logic('Französisch', 'Englisch', 'Spanisch', $i);
            }
            bereich_add('A');
            waehlbarkeit('franzoesiosch_w', false);
            waehlbarkeit('latein_w', false);
            waehlbarkeit('spanisch_w', false);
            fs_add();
            break;
        case 'Spanisch':
            if($i == 1){
                $_SESSION['profil'] = 'spra';
                $_SESSION['p2_waehlbar'][5] = true;
                $_SESSION['p2_waehlbar'][6] = true;
                $_SESSION['p2_waehlbar'][7] = true;
                $_SESSION['p2_waehlbar'][8] = true;
                kernfaecher_add();
            }

            if($i > 1){
                fs_schon_gewaehlt_logic('Latein', 'Englisch', 'Französisch', $i);
            }
            bereich_add('A');
            waehlbarkeit('franzoesiosch_w', false);
            waehlbarkeit('latein_w', false);
            waehlbarkeit('spanisch_w', false);
            fs_add();
            break;
        case 'Kunst':
            if($i == 1){
                $_SESSION['profil'] = 'muku';
                $_SESSION['p2_waehlbar'][0] = true;
                $_SESSION['p2_waehlbar'][5] = true;
            }
            waehlbarkeit('musik_w', false);
            waehlbarkeit('kunst_w', false);
            nicht_kernfaecher_add();
            bereich_add('A');
            break;
        case 'Musik':
            if($i == 1){
                $_SESSION['profil'] = 'muku';
                $_SESSION['p2_waehlbar'][0] = true;
                $_SESSION['p2_waehlbar'][5] = true;
            }
            waehlbarkeit('musik_w', false);
            waehlbarkeit('kunst_w', false);
            nicht_kernfaecher_add();
            bereich_add('A');
            break;
        case 'Geschichte':
            if($i == 1){
              $_SESSION['profil'] = 'gese';
              for ($j=0; $j < $_SESSION['lp'][1]; $j++) { 
                  $_SESSION['p2_waehlbar'][$j] = true;
              }
              $_SESSION['pfach3'] = 'Politik Wirtschaft';
            }
            nicht_kernfaecher_add();
            bereich_add('B');
            waehlbarkeit('geschichte_w', false);
            break;
        case 'Religion':
            nicht_kernfaecher_add();
            bereich_add('B');
            waehlbarkeit('religion_w', false);
            break;
        case 'Erdkunde':
            nicht_kernfaecher_add();
            bereich_add('B');
            waehlbarkeit('erdkunde_w', false);
            break;
        case 'Politik Wirtschaft':
            nicht_kernfaecher_add();
            bereich_add('B');
            waehlbarkeit('powi_w', false);
            break;
        case 'Sport':
            nicht_kernfaecher_add();
            waehlbarkeit('sport_w', false);
            break;
    }
    if($_SESSION['nicht_kernfaecher'] == 3){
        $_SESSION['w_nk'] = false;
    }
    if($_SESSION['A_anzahl'] != 0 && $_SESSION['B_anzahl'] != 0 && $_SESSION['C_anzahl'] != 0 && $i == 4){
        $_SESSION['w'][3] = true;
    }

    $Anzahlen = array(array('A_anzahl', 'B_anzahl', 'C_anzahl'),array('B_anzahl', 'C_anzahl', 'A_anzahl'),array('C_anzahl', 'A_anzahl', 'B_anzahl'));
    $waehlbarkeit_bereiche = array(array(0, 1, 2),array(1, 2, 0),array(2, 0, 1));
    for ($h=0; $h < count($Anzahlen); $h++) { 
        if($_SESSION[$Anzahlen[$h][0]] == 3){
            $_SESSION['w'][$waehlbarkeit_bereiche[$h][0]] = false;
            #$_SESSION['w'][$waehlbarkeit_bereiche[$h][0]]
            if($_SESSION['kernfaecher'] == 1 && $_SESSION['A_anzahl'] == 3){
                $_SESSION['physik_w'] = false;
                $_SESSION['chemie_w'] = false;
                $_SESSION['informatik_w'] = false;
                $_SESSION['biologie_w'] = false;
            }
            if($_SESSION[$Anzahlen[$h][1]] == 1){
                $_SESSION['w'][$waehlbarkeit_bereiche[$h][1]] = false;
            }
            if($_SESSION[$Anzahlen[$h][2]] == 1){
                $_SESSION['w'][$waehlbarkeit_bereiche[$h][2]] = false;
            }
        }
    }
    if($_SESSION['A_anzahl'] == 2){
        if($_SESSION['B_anzahl'] == 2){
            $_SESSION['w'][0] = false;
            $_SESSION['w'][1] = false;
            $_SESSION['w'][2] = true;
        }
        if($_SESSION['C_anzahl'] == 2){
            $_SESSION['w'][0] = false;
            $_SESSION['w'][1] = true;
            $_SESSION['w'][2] = false;
            $_SESSION['w_nk'] = true;
            waehlbarkeit('geschichte_w', true);
        }
        if($_SESSION['C_anzahl'] == 1 && $_SESSION['kernfaecher'] == 1){
            waehlbarkeit('musik_w', false);
            waehlbarkeit('kunst_w', false);
            waehlbarkeit('chemie_w', false);
            waehlbarkeit('biologie_w', false);
            waehlbarkeit('physik_w', false);
            waehlbarkeit('informatik_w', false);
            $_SESSION['w'][1] = true;
        }
    }
    if($_SESSION['C_anzahl'] == 2){
        if($_SESSION['B_anzahl'] == 2){
            $_SESSION['w'][0] = true;
            $_SESSION['w'][1] = false;
            $_SESSION['w'][2] = false;
            if($_SESSION['kernfaecher'] < 2){
                $_SESSION['w_nk'] = false;
            }else{
                $_SESSION['w_nk'] = true;
            }
        }
        if($_SESSION['A_anzahl'] == 1 && $_SESSION['kernfaecher'] == 1){
            waehlbarkeit('chemie_w', false);
            waehlbarkeit('biologie_w', false);
            waehlbarkeit('physik_w', false);
            waehlbarkeit('informatik_w', false);
            if(check_fach_for_pfach('Englisch') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Latein') || check_fach_for_pfach('Französisch')){
                waehlbarkeit('englisch_w', false);
                waehlbarkeit('latein_w', false);
                waehlbarkeit('spanisch_w', false);
                waehlbarkeit('franzoesisch_w', false);
            }
        }
    }
    $nw_for_mu_and_ku = 0;
    for ($i=0; $i < 6; $i++) { 
        if($_SESSION['pfach' . $i] == 'Biologie' || $_SESSION['pfach' . $i] == 'Physik' || $_SESSION['pfach' . $i] == 'Informatik'  || $_SESSION['pfach' . $i] == 'Chemie' ){
            $nw_for_mu_and_ku++;
        }
    }
    if($nw_for_mu_and_ku >= 2){
        waehlbarkeit('musik_w', false);
        waehlbarkeit('kunst_w', false);
        waehlbarkeit('biologie_w', false);
        waehlbarkeit('physik_w', false);
        waehlbarkeit('informatik_w', false);
        waehlbarkeit('chemie_w', false);
    }
}

function proof_in_advance($pfach, $i) {
    $all_subjects = array(
        '', 'Mathe', 'Chemie', 'Englisch', 'Physik', 'Biologie', 'Franzoesisch', 'Latein', 'Musik', 'Informatik', 'Kunst', 'Spanisch', 'Deutsch', 'Geschichte', 'Politik Wirtschaft', 'Religion', 'Erdkunde', 'Sport'
    );
    for ($j = 1; $j < 18; $j++) { 
        switch ($all_subjects[$j]) {
            case 'Mathe':
                try {
                    proof_in_advance_visibility($pfach, $i, $j, $_SESSION['w'][2], $_SESSION['p2_waehlbar'][0], $_SESSION['mathe_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Chemie':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][2], $_SESSION['p2_waehlbar'][2], $_SESSION['chemie_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Englisch':
                try {
                    if (check_fach_for_pfach('Latein') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Französisch')) {
                        proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][6], $_SESSION['englisch_w']);
                        break;
                    } else {
                        proof_in_advance_visibility($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][6], $_SESSION['englisch_w']);
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Physik':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][2], $_SESSION['p2_waehlbar'][4], $_SESSION['physik']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Biologie':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][2], $_SESSION['p2_waehlbar'][3], $_SESSION['biologie_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Geschichte':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][1], $_SESSION['p2_waehlbar'][12], $_SESSION['geschichte_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Franzoesisch':
                try {
                    if (check_fach_for_pfach('Latein') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Englisch')) {
                        proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][7], $_SESSION['franzoesisch_w']);
                        break;
                    } else {
                        proof_in_advance_visibility($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][7], $_SESSION['franzoesisch_w']);
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Latein':
                try {
                    if (check_fach_for_pfach('Englisch') || check_fach_for_pfach('Spanisch') || check_fach_for_pfach('Französisch')) {
                        proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][8], $_SESSION['latein_w']);
                        break;
                    } else {
                        proof_in_advance_visibility($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][8], $_SESSION['latein_w']);
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Musik':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][11], $_SESSION['musik_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Informatik':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][1], $_SESSION['informatik_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Kunst':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][10], $_SESSION['kunst_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Politik Wirtschaft':
                try {
                    proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][1], $_SESSION['p2_waehlbar'][13], $_SESSION['powi_w']);
                    if ($_SESSION['profil'] == 'gese' && $i == 3) {
                        echo 'document.getElementById("pfach3.14.label").style.opacity = \'1\'';
                        echo 'document.getElementById("pfach3.14").disabled = false';
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Spanisch':
                try {
                    if (check_fach_for_pfach('Englisch') || check_fach_for_pfach('Latein') || check_fach_for_pfach('Französisch')) {
                        proof_in_advance_visibility_w_nk($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][9], $_SESSION['spanisch_w']);
                        break;
                    } else {
                        proof_in_advance_visibility($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][9], $_SESSION['spanisch_w']);
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Deutsch':
                try {
                    proof_in_advance_visibility($pfach, $i, $j, $_SESSION['w'][0], $_SESSION['p2_waehlbar'][5], $_SESSION['deutsch_w']);
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Religion':
                try {
                    if ($_SESSION['w'][1] == true && $_SESSION['w_nk'] == true && $_SESSION['religion_w'] == true) {
                        if ($i <=3) {
                            echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'0.5\'';
                            echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
                            break;
                        }
                        echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'1\'';
                        echo 'document.getElementById((pfach + j)).disabled = false';
                    } else {
                        echo 'document.getElementById(pfach + ' . $j . '+ ".label").style.opacity = \'0.5\'';
                        echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Erdkunde':
                try {
                    if ($_SESSION['w'][1] == true && $_SESSION['w_nk'] == true && $_SESSION['erdkunde_w'] == true) {
                        if ($i <=3) {
                            echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'0.5\'';
                            echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
                            break;
                        }
                        echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'1\'';
                        echo 'document.getElementById((pfach + j)).disabled = false';
                    } else {
                        echo 'document.getElementById(pfach + ' . $j . '+ ".label").style.opacity = \'0.5\'';
                        echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
            case 'Sport':
                try {
                    if($_SESSION['w'][3] != true){
                        echo 'document.getElementById(pfach + ' . $j . '+ ".label").style.opacity = \'0.5\'';
                        echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
                    } else {
                        if ($_SESSION['w_nk'] == true && $_SESSION['sport_w'] == true) {
                            echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'1\'';
                            echo 'document.getElementById((pfach + ' . $j . ')).disabled = false';
                        } else {
                            echo 'document.getElementById(pfach + ' . $j . '+ ".label").style.opacity = \'0.5\'';
                            echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
                        }
                    }
                } catch (\Throwable $th) {
                    //throw $th;
                }
                break;
        }
    }
}

function proof_in_advance_visibility($pfach, $i, $j, $bereich, $waehlbar, $fachvariable){
    if ($bereich == true && $fachvariable == true) {
        if ($i == 2 && $waehlbar == false) {
            disable_fachbutton($pfach . $j);
        } else {
            if ($i == 3 && $_SESSION['profil'] == 'gese') {
                echo 'document.getElementById(pfach + ' . $j . '+ ".label").style.opacity = \'0.5\'';
                echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
            } else {
                echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'1\'';
                echo 'document.getElementById((pfach + ' . $j . ')).disabled = false';
            }
        }
    } else {
        disable_fachbutton($pfach . $j);
    }
}

function proof_in_advance_visibility_w_nk($pfach, $i, $j, $bereich, $waehlbar, $fachvariable){
    if ($bereich == true && $_SESSION['w_nk'] == true && $fachvariable == true) {
        if ($i == 2 && $waehlbar == false) {
            disable_fachbutton($pfach . $j);
        } else {
            if ($i == 3 && $_SESSION['profil'] == 'gese') {
                echo 'document.getElementById(pfach + ' . $j . '+ ".label").style.opacity = \'0.5\'';
                echo 'document.getElementById((pfach + ' . $j . ')).disabled = true';
            } else {
                echo 'document.getElementById(pfach + ' . $j  . '+ ".label").style.opacity = \'1\'';
            }
        }
    }
}

function disable_wish($fach, $j){
    if ($_SESSION['pfach' . $j] == $fach) {
        echo 'document.getElementById(' . $fach . ' + "2").disabled = true';
        echo 'document.getElementById(' . $fach . '+ "2.label").style.opacity = \'0.5\'';
    }
}

function sport_gk(){
    if ($_SESSION['pfach5'] == 'Sport') {
        $_SESSION['sport_gk'] = true;
    }
}

function checking_for_muku_gk($j){
    if ($_SESSION['extra'][13] == false && $_SESSION['extra'][10] == false && $_SESSION['extra'][3] && ($_SESSION['pfach' . $j] == 'Musik' || $_SESSION['pfach' . $j] == 'Kunst' || $_SESSION['pfach' . $j] == 'DS' )) {
        $_SESSION['extra'][13] = false;
        $_SESSION['extra'][10] = false;
        $_SESSION['extra'][3] = false;
        switch ($_SESSION['pfach' . $j]) {
            case 'Musik':
                $_SESSION['extra'][13] = true;
                break;
            case 'Kunst':
                $_SESSION['extra'][10] = true;
                break;
            case 'DS':
                $_SESSION['extra'][3] = true;
                break;
        }
    }
}

function buttons_muku(){
    if ($_SESSION['extra'][13] == false && $_SESSION['extra'][10] == false && $_SESSION['extra'][3] == false) {
        echo 'document.getElementById("kunst.label").style.opacity = \'1\'';
        echo 'document.getElementById("ds.label").style.opacity = \'1\'';
        echo 'document.getElementById("musik.label").style.opacity = \'1\'';
    } else {
        disable_fachbutton('musik');
        disable_fachbutton('ds');
        disable_fachbutton('kunst');
        disable_fachbutton('Musik2');
        disable_fachbutton('Kunst2');
        echo 'document.getElementById("div_muku").title = "Da bereits ein musisch-künstlerisches Fach gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
}

function buttons_religion_wn(){
    if ($_SESSION['extra'][16] == false && $_SESSION['extra'][18] == false) {
        echo 'document.getElementById("religion.label").style.opacity = \'1\'';
        echo 'document.getElementById("wn.label").style.opacity = \'1\'';
    } else {
        disable_fachbutton('religion');
        disable_fachbutton('wn');
        echo 'document.getElementById("div_rewn").title = "Da bereits Religion oder Werte und Normen gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
}

function checking_for_fs($j){
    if($_SESSION['extra'][5] == false && $_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false && ($_SESSION['pfach' . $j] == 'Englisch' || $_SESSION['pfach' . $j] == 'Latein' || $_SESSION['pfach' . $j] == 'Französisch' || $_SESSION['pfach' . $j] == 'Spanisch')){
        if($_SESSION['pfach' . $j] == 'Englisch'){
            $_SESSION['extra'][5] = true;
            $_SESSION['extra'][11] = false;
            $_SESSION['extra'][7] = false;
            $_SESSION['extra'][17] = false;
        }
        if($_SESSION['pfach' . $j] == 'Latein'){
            $_SESSION['extra'][5] = false;
            $_SESSION['extra'][11] = true;
            $_SESSION['extra'][7] = false;
            $_SESSION['extra'][17] = false;
        }
        if($_SESSION['pfach' . $j] == 'Franzöesisch'){
            $_SESSION['extra'][5] = false;
            $_SESSION['extra'][11] = false;
            $_SESSION['extra'][7] = true;
            $_SESSION['extra'][17] = false;
        }
        if($_SESSION['pfach' . $j] == 'Spanisch'){
            $_SESSION['extra'][5] = false;
            $_SESSION['extra'][11] = false;
            $_SESSION['extra'][7] = false;
            $_SESSION['extra'][17] = true;
        }
    }
}

function buttons_fs(){
    if ($_SESSION['extra'][5] == false && $_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        echo 'document.getElementById("englisch.label").style.opacity = \'1\'';
        echo 'document.getElementById("latein.label").style.opacity = \'1\'';
        echo 'document.getElementById("franzoesisch.label").style.opacity = \'1\'';
        echo 'document.getElementById("spanisch.label").style.opacity = \'1\'';
    } else {
        disable_fachbutton('englisch');
        disable_fachbutton('latein');
        disable_fachbutton('franzoesisch');
        disable_fachbutton('spanisch');
        echo 'document.getElementById("div_fs").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
}

function checking_for_nw($j){
    if($_SESSION['extra'][14] == false && $_SESSION['extra'][1] == false && $_SESSION['extra'][2] && ($_SESSION['pfach' . $j] == 'Physik' || $_SESSION['pfach' . $j] == 'Chemie' || $_SESSION['pfach' . $j] == 'Biologie')){
        if($_SESSION['pfach' . $j] == 'Physik'){
            $_SESSION['extra'][14] = true;
            $_SESSION['extra'][2] = false;
            $_SESSION['extra'][1] = false;
        }
        if($_SESSION['pfach' . $j] == 'Chemie'){
            $_SESSION['extra'][14] = false;
            $_SESSION['extra'][2] = true;
            $_SESSION['extra'][1] = false;
        }
        if($_SESSION['pfach' . $j] == 'Biologie'){
            $_SESSION['extra'][14] = false;
            $_SESSION['extra'][2] = false;
            $_SESSION['extra'][1] = true;
        }
    }
}

function buttons_nw(){
    if ($_SESSION['extra'][14] == false && $_SESSION['extra'][2] == false && $_SESSION['extra'][1] == false) {
        echo 'document.getElementById("physik.label").style.opacity = \'1\'';
        echo 'document.getElementById("chemie.label").style.opacity = \'1\'';
        echo 'document.getElementById("bio.label").style.opacity = \'1\'';
    } else {
        disable_fachbutton('physik');
        disable_fachbutton('chemie');
        disable_fachbutton('bio');
        echo 'document.getElementById("div_nw").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
}

function checking_for_informatik($j, $help_informatik){
    return ($help_informatik == false && $_SESSION['pfach' . $j] == 'Informatik') ? true : false;
}

function buttons_informatik($help_informatik){
    if ($help_informatik == true) {
        disable_fachbutton('informatikja');
        disable_fachbutton('informatikne');
        echo 'document.getElementById("div_inf").title = "Da bereits Informatik gewählt wurde, muss hier nichts mehr gewählt werden"';
    } else {
        echo 'document.getElementById("informatikja.label").style.opacity = \'1\'';
        echo 'document.getElementById("informatikne.label").style.opacity = \'1\'';
    }
}

function mana(){
    for ($j=1; $j < 6 ; $j+1) { 
        disable_wish('Kunst', $j);
        disable_wish('Musik', $j);
        disable_wish('Geschichte', $j);
        disable_wish('Religion', $j);
        if ($_SESSION['pfach' . $j] == 'Politik Wirtschaft') {
            disable_fachbutton('PoWi2');
        }
        pflicht($j);
        checking_for_muku_gk($j);
        checking_for_fs($j);
    }
    calc_stunden_for_pflicht();
    pflicht_label();
    sport_gk();
    buttons_religion_wn();
    buttons_fs();
    buttons_muku();
    if ($_SESSION['counter_nw'] < 2) {
        if (check_fach_for_pfach('Informatik') || $_SESSION['extra'][9] == true) {
            disable_fachbutton('informatik');
        }
        if (check_fach_for_pfach('Biologie') || $_SESSION['extra'][1] == true) {
            disable_fachbutton('bio');
        }
        if (check_fach_for_pfach('Physik') || $_SESSION['extra'][14] == true) {
            disable_fachbutton('physik');
        }
        if (check_fach_for_pfach('Chemie') || $_SESSION['extra'][2] == true) {
            disable_fachbutton('chemie');
        }
    } else {
        disable_fachbutton('informatik');
        disable_fachbutton('bio');
        disable_fachbutton('physik');
        disable_fachbutton('chemie');
        echo 'document.getElementById("div_nw").title = "Da bereits 2 Naturwissenschaften gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
}

function spra(){
    $help_informatik = false;
    for ($j = 1; $j < 6; $j++) { 
        disable_wish('Kunst', $j);
        disable_wish('Musik', $j);
        if ($_SESSION['pfach' . $j] == 'Politik Wirtschaft') {
            disable_fachbutton('PoWi2');
        }
        disable_wish('Geschichte', $j);
        disable_wish('Religion', $j);
        pflicht($j);
        checking_for_muku_gk($j);
        checking_for_nw($j);
        if ($help_informatik == false) {
            $help_informatik = checking_for_informatik($j, $help_informatik);
        }
    }
    calc_stunden_for_pflicht();
    pflicht_label();
    sport_gk();
    buttons_religion_wn();
    buttons_muku();
    buttons_informatik($help_informatik);
    buttons_nw();
    if($_SESSION['counter_fs'] < 2){
        $help_lang = false;
        for ($i=1; $i < 6 ; $i++) { 
            if($_SESSION['pfach' . $i] == 'Englisch'){
                $help_lang = true;
            }
        }
        if($help_lang == true){
            echo 'document.getElementById("spanisch.label").style.opacity = \'1\'';
            echo 'document.getElementById("latein.label").style.opacity = \'1\'';
            echo 'document.getElementById("franzoesisch.label").style.opacity = \'1\'';
        }else{
            $_SESSION['extra'][5] = true;
            disable_fachbutton('spanisch');
            disable_fachbutton('latein');
            disable_fachbutton('franzoesisch');

            #text kommt noch
            $text = "Test";
            $text += ', En';
            echo 'document.getElementById("pflicht").textContent = text';
            echo 'document.getElementById("div_fs").title = "Da bereits eine 2. Fremdsprache gewählt wurde, wird Englisch automatisch als Grundkurs gewählt"';
        }
    }else{
        $_SESSION['extra'][5] = true;
        disable_fachbutton('spanisch');
        disable_fachbutton('latein');
        disable_fachbutton('franzoesisch');
        echo 'document.getElementById("div_fs").title = "Da bereits eine 2. Fremdsprache gewählt wurde, wird Englisch automatisch als Grundkurs gewählt"';
    }
}

function muku(){
    $help_informatik = false;
    for ($j = 1; $j < 6; $j++) { 
        if ($_SESSION['pfach' . $j] == 'Politik Wirtschaft') {
            disable_fachbutton('PoWi2');
        }
        disable_wish('Geschichte', $j);
        disable_wish('Religion', $j);
        pflicht($j);
        checking_for_fs($j);
        checking_for_nw($j);
        if ($help_informatik == false) {
            $help_informatik = checking_for_informatik($j, $help_informatik);
        }
    }
    calc_stunden_for_pflicht();
    pflicht_label();
    sport_gk();
    buttons_religion_wn();
    buttons_fs();
    buttons_nw();
    buttons_informatik($help_informatik);
    if ($_SESSION['pfach1'] == 'Musik') {
        disable_fachbutton('musik');
    }else if($_SESSION['pfach1'] == 'Kunst'){
        disable_fachbutton('kunst');
    }
}

function gese(){
    for ($j = 1; $j < 6; $j++) { 
        disable_wish('Kunst', $j);
        disable_wish('Musik', $j);
        disable_wish('Religion', $j);
        pflicht($j);
        checking_for_muku_gk($j);
    }
    calc_stunden_for_pflicht();
    pflicht_label();
    sport_gk();
    buttons_religion_wn();
    buttons_muku();
    if($_SESSION['counter_nw'] == 0){
        echo 'document.getElementById("physik.label").style.opacity = \'1\'';
        echo 'document.getElementById("bio.label").style.opacity = \'1\'';
        echo 'document.getElementById("chemie.label").style.opacity = \'1\'';
        echo 'document.getElementById("informatik.label").style.opacity = \'1\'';
    } elseif ($_SESSION['counter_nw'] == 1){
        disable_fachbutton('physik');
        disable_fachbutton('bio');
        disable_fachbutton('chemie');
        disable_fachbutton('informatik');
        echo 'document.getElementById("div_nw1").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"';
        if (check_fach_for_pfach('Informatik')) {
            disable_fachbutton('informatik2');
        }
        if (check_fach_for_pfach('Biologie')) {
            disable_fachbutton('bio2');
        }
        if (check_fach_for_pfach('Physik')) {
            disable_fachbutton('physik2');
        }
        if (check_fach_for_pfach('Chemie')) {
            disable_fachbutton('chemie2');
        }
    }elseif ($_SESSION['counter_nw'] == 2) {
        disable_fachbutton('physik');
        disable_fachbutton('bio');
        disable_fachbutton('chemie');
        disable_fachbutton('informatik');
        disable_fachbutton('physik2');
        disable_fachbutton('bio2');
        disable_fachbutton('chemie2');
        disable_fachbutton('informatik2');
        disable_fachbutton('englisch2');
        disable_fachbutton('latein2');
        disable_fachbutton('spanisch2');
        disable_fachbutton('franzoesisch2');
        echo 'document.getElementById("div_2fs2nw").title = "Da bereits eine 2. Fremdsprache oder 2. Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"';
    }

    if($_SESSION['counter_fs'] == 0){
        echo 'document.getElementById("englisch.label").style.opacity = \'1\'';
        echo 'document.getElementById("latein.label").style.opacity = \'1\'';
        echo 'document.getElementById("spanisch.label").style.opacity = \'1\'';
        echo 'document.getElementById("franzoesisch.label").style.opacity = \'1\'';
    }elseif($_SESSION['counter_fs'] == 1){
        disable_fachbutton('englisch');
        disable_fachbutton('latein');
        disable_fachbutton('spanisch');
        disable_fachbutton('franzoesisch');
        echo 'document.getElementById("div_fs1").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"';
        
        if (check_fach_for_pfach('Englisch')) {
            disable_fachbutton('englisch2');
        }
        if (check_fach_for_pfach('Latein')) {
            disable_fachbutton('latein2');
            disable_fachbutton('spanisch2');
            disable_fachbutton('franzoesisch2');
        }
        if (check_fach_for_pfach('Spanisch')) {
            disable_fachbutton('latein2');
            disable_fachbutton('spanisch2');
            disable_fachbutton('franzoesisch2');
        }
        if (check_fach_for_pfach('Französisch')) {
            disable_fachbutton('latein2');
            disable_fachbutton('franzoesisch2');
            disable_fachbutton('spanisch2');
        }
        
    } elseif($_SESSION['counter_fs'] == 2){
        disable_fachbutton('englisch');
        disable_fachbutton('latein');
        disable_fachbutton('spanisch');
        disable_fachbutton('franzoesisch');
        disable_fachbutton('englisch2');
        disable_fachbutton('latein2');
        disable_fachbutton('spanisch2');
        disable_fachbutton('franzoesisch2');
        disable_fachbutton('physik2');
        disable_fachbutton('bio2');
        disable_fachbutton('chemie2');
        disable_fachbutton('informatik2');
        echo 'document.getElementById("div_2fs2nw").title = "Da bereits eine 2. Fremdsprache oder 2. Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
    if($_SESSION['counter_nw'] == 1 && $_SESSION['counter_fs'] == 1){
        enable_2fs_2nw();
    }
    
}

function pflicht_label(){

}

function pflicht($j){
    $_SESSION['extra'][4] = true;
    $_SESSION['extra'][12] = true;
    $_SESSION['extra'][8] = true;
    $_SESSION['extra'][15] = true;

    if ($_SESSION['extra'][16] == false && $_SESSION['extra'][18] == false && ($_SESSION['pfach' . $j] == 'Religion' || $_SESSION['pfach' . $j] == 'WN')) {
        if($_SESSION['pfach' . $j] == 'Religion'){
            $_SESSION['extra'][16] = true;
            $_SESSION['extra'][18] = false;
        }
        if($_SESSION['pfach' . $j] == 'WN'){
            $_SESSION['extra'][16] = false;
            $_SESSION['extra'][18] = true;
        }
    }
    if ($_SESSION['pfach' . $j] == 'Erdkunde') {
        disable_fachbutton('erdkundja');
        disable_fachbutton('erdkundne');
        echo 'document.getElementById("div_ek").title = "Da Erdkunde bereits gewählt wurde, muss hier nichts mehr gewählt werden"';
    }
}

function calc_stunden_for_pflicht(){
    
}

function enable_2fs_2nw() {
    if(($_SESSION['counter_nw'] + $_SESSION['counter_fs']) >= 3){
        return;
    }
    #Bedingung fehlt noch
    if(true){
        enable_fachbutton('spanisch2');
        enable_fachbutton('franzoesisch2');
        enable_fachbutton('latein2');
        enable_fachbutton('englisch2');
        enable_fachbutton('chemie2');
        enable_fachbutton('bio2');
        enable_fachbutton('physik2');
        enable_fachbutton('informatik2');
        for ($i=1; $i < 6; $i++) { 
            #Hier müssen noch überall Document.getElementById hin
            if($_SESSION['pfach' . $i] == 'Spanisch'){
                disable_fachbutton('latein2');
                disable_fachbutton('franzoesisch2');
                disable_fachbutton('spanisch2');
            }
            if($_SESSION['pfach' . $i] == 'Französisch'){
                disable_fachbutton('latein2');
                disable_fachbutton('franzoesisch2');
                disable_fachbutton('spanisch2');
            }
            if($_SESSION['pfach' . $i] == 'Latein'){
                disable_fachbutton('latein2');
                disable_fachbutton('franzoesisch2');
                disable_fachbutton('spanisch2');
            }
            if($_SESSION['pfach' . $i] == 'Englisch'){
                disable_fachbutton('englisch2');
            }
            if($_SESSION['pfach' . $i] == 'Chemie'){
                disable_fachbutton('chemie2');
            }
            if($_SESSION['pfach' . $i] == 'Biologie'){
                disable_fachbutton('bio2');
            }
            if($_SESSION['pfach' . $i] == 'Physik'){
                disable_fachbutton('physik2');
            }
            if($_SESSION['pfach' . $i] == 'Informatik'){
                disable_fachbutton('informatik2');
            }
        }
    }
}

function set_religion(){
    if($_SESSION['extra'][18] == false && $_SESSION['extra'][16] == false){
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    $_SESSION['extra'][16] = true;
    $_SESSION['extra'][18] = false;
    enable_fachbutton('Religion2');
}

function set_wn(){
    if($_SESSION['extra'][18] == false && $_SESSION['extra'][16] == false){
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    $_SESSION['extra'][16] = false;
    $_SESSION['extra'][18] = true;
    echo 'document.getElementById("Religion2").checked = false';
    disable_fachbutton('Religion2');
}

function set_musik(){
    if($_SESSION['extra'][13] == false && $_SESSION['extra'][10] == false && $_SESSION['extra'][3] == false){
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    $_SESSION['extra'][13] = true;
    $_SESSION['extra'][10] = false;
    $_SESSION['extra'][3] = false;
    echo 'document.getElementById("Kunst2").checked = false';
    enable_fachbutton('Musik2');
    disable_fachbutton('Kunst2');
}

function set_kunst(){
    if($_SESSION['extra'][13] == false && $_SESSION['extra'][10] == false && $_SESSION['extra'][3] == false){
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    $_SESSION['extra'][13] = true;
    $_SESSION['extra'][10] = false;
    $_SESSION['extra'][3] = false;
    echo 'document.getElementById("Musik2").checked = false';
    enable_fachbutton('Kunst2');
    disable_fachbutton('Musik2');
}

function set_ds(){
    if($_SESSION['extra'][13] == false && $_SESSION['extra'][10] == false && $_SESSION['extra'][3] == false){
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    $_SESSION['extra'][3] = true;
    $_SESSION['extra'][10] = false;
    $_SESSION['extra'][13] = false;
    echo 'document.getElementById("Musik2").checked = false';
    echo 'document.getElementById("Kunst2").checked = false';
    disable_fachbutton('Kunst2');
    disable_fachbutton('Musik2');
}

function set_englisch(){
    if ($_SESSION['extra'][5] == false && $_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        fs_add();
    }
    $_SESSION['extra'][5] = true;
    $_SESSION['extra'][11] = false;
    $_SESSION['extra'][17] = false;
    $_SESSION['extra'][7] = false;
    echo 'document.getElementById(\'englisch2\').checked = false';
}

function set_franzoesisch(){
    if ($_SESSION['extra'][5] == false && $_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][11] == false && $_SESSION['extra'][5] == false && $_SESSION['extra'][17] == false) {
        fs_add();
    }
    $_SESSION['extra'][7] = true;
    $_SESSION['extra'][11] = false;
    $_SESSION['extra'][17] = false;
    $_SESSION['extra'][5] = false;
    echo 'document.getElementById(\'franzoesisch2\').checked = false';
}

function set_latein(){
    if ($_SESSION['extra'][5] == false && $_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][5] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        fs_add();
    }
    $_SESSION['extra'][11] = true;
    $_SESSION['extra'][5] = false;
    $_SESSION['extra'][17] = false;
    $_SESSION['extra'][7] = false;
    echo 'document.getElementById(\'latein2\').checked = false';
}

function set_spanisch(){
    if ($_SESSION['extra'][5] == false && $_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][17] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][11] == false && $_SESSION['extra'][7] == false && $_SESSION['extra'][5] == false) {
        fs_add();
    }
    $_SESSION['extra'][17] = true;
    $_SESSION['extra'][11] = false;
    $_SESSION['extra'][5] = false;
    $_SESSION['extra'][7] = false;
    echo 'document.getElementById(\'spanisch2\').checked = false';
}

function set_biologie(){
    if ($_SESSION['extra'][1] == false && $_SESSION['extra'][2] == false && $_SESSION['extra'][14] == false && $_SESSION['extra'][9] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][2] == false && $_SESSION['extra'][9] == false && $_SESSION['extra'][14] == false) {
        nw_add();
    }
    $_SESSION['extra'][1] = true;
    $_SESSION['extra'][2] = false;
    $_SESSION['extra'][9] = false;
    $_SESSION['extra'][14] = false;
    echo 'document.getElementById(\'bio2\').checked = false';
}

function set_physik(){
    if ($_SESSION['extra'][1] == false && $_SESSION['extra'][2] == false && $_SESSION['extra'][14] == false && $_SESSION['extra'][9] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][2] == false && $_SESSION['extra'][9] == false && $_SESSION['extra'][1] == false) {
        nw_add();
    }
    $_SESSION['extra'][1] = false;
    $_SESSION['extra'][2] = false;
    $_SESSION['extra'][9] = false;
    $_SESSION['extra'][14] = true;
    echo 'document.getElementById(\'physik2\').checked = false';
}

function set_chemie(){
    if ($_SESSION['extra'][1] == false && $_SESSION['extra'][2] == false && $_SESSION['extra'][14] == false && $_SESSION['extra'][9] == false) {
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if ($_SESSION['extra'][1] == false && $_SESSION['extra'][9] == false && $_SESSION['extra'][14] == false) {
        nw_add();
    }
    $_SESSION['extra'][1] = false;
    $_SESSION['extra'][2] = true;
    $_SESSION['extra'][9] = false;
    $_SESSION['extra'][14] = false;
    echo 'document.getElementById(\'chemie2\').checked = false';
}

function set_informatik(){
    if($_SESSION['extra'][1] == false && $_SESSION['extra'][2] == false && $_SESSION['extra'][14] == false && $_SESSION['extra'][9] == false){
        $_SESSION['stundenanzahl_gesamt'] = $_SESSION['stundenanzahl_gesamt'] + $_SESSION['gk_stundenanzahl'];
    }
    if($_SESSION['extra'][2] == false && $_SESSION['extra'][1] == false && $_SESSION['extra'][14] == false){
        nw_add();
    }
    $_SESSION['extra'][1] = false;
    $_SESSION['extra'][2] = false;
    $_SESSION['extra'][9] = true;
    $_SESSION['extra'][14] = false;
}

function set_englisch_gese2(){
    $_SESSION['extra'][5] = true;
}

function set_franzoesisch_gese2(){
    $_SESSION['extra'][7] = true;
}

function set_latein_gese2(){
    $_SESSION['extra'][11] = true;
}

function set_spanisch_gese2(){
    $_SESSION['extra'][17] = true;
}

function set_physik_gese2(){
    $_SESSION['extra'][14] = true;
}

function set_informatik_gese2(){
    $_SESSION['extra'][9] = true;
}

function set_chemie_gese2(){
    $_SESSION['extra'][2] = true;
}

function set_biologie_gese2(){
    $_SESSION['extra'][1] = true;
}

function set_erdkunde($choose){
    $_SESSION['extra'][6] = $choose;
}

function set_informatik_voluntary($choose){
    $_SESSION['extra'][9] = $choose;
}

function set_wish($fach){
    $_SESSION['wish_for_p4_p5'] = $fach;
}

function schluss_jetzt(){
    for ($i=1; $i < 6; $i++) { 
        switch ($_SESSION['pfach' . $i]) {
            case 'Mathe':
                $_SESSION['extra'][12] = false;
                break;
              case 'Informatik':
                $_SESSION['extra'][9] = false;
                break;
              case 'Chemie':
                $_SESSION['extra'][2] = false;
                break;
              case 'Biologie':
                $_SESSION['extra'][1] = false;
                break;
              case 'Physik':
                $_SESSION['extra'][14] = false;
                break;
              case 'Deutsch':
                $_SESSION['extra'][4] = false;
                break;
              case 'Englisch':
                $_SESSION['extra'][5] = false;
                break;
              case 'Französisch':
                $_SESSION['extra'][7] = false;
                break;
              case 'Latein':
                $_SESSION['extra'][11] = false;
                break;
              case 'Spanisch':
                $_SESSION['extra'][17] = false;
                break;
              case 'Kunst':
                $_SESSION['extra'][10] = false;
                break;
              case 'Musik':
                $_SESSION['extra'][13] = false;
                break;
              case 'Geschichte':
                $_SESSION['extra'][8] = false;
                break;
              case 'Religion':
                $_SESSION['extra'][16] = false;
                break;
              case 'Erdkunde':
                $_SESSION['extra'][6] = false;
                break;
              case 'Politik Wirtschaft':
                $_SESSION['extra'][15] = false;
                break;
              case 'Sport':
                $_SESSION['sport_gk'] = false;
                break;
        }
    }
        
}
 
function check_for_complete_p(){

}

function check_for_pfaecher_gewaehlt(){
    if($_SESSION['pfaecher_gewaehlt'] == false || !isset($_SESSION['gks_gewaehlt'])){
        header("location: ../faecherwahl_main.php");
    }
}

function check_for_gk_gewaehlt(){
    if($_SESSION['pfaecher_gewaehlt'] == false || !isset($_SESSION['gks_gewaehlt'])){
        if (!isset($_SESSION['profil'])) {
            header("location: ../wahl" . $_SESSION['profil'] . ".php");
        } else {
            header("location: ../faecherwahl_main.php");
        }
    }
}

function check_for_gewaehlt_output(){
    if ($_SESSION['gks_gewaehlt'] == false || !isset($_SESSION['gks_gewaehlt'])) {
        if ($_SESSION['pfaecher_gewaehlt'] == false || !isset($_SESSION['pfaecher_gewaehlt'])) {
            header("location: ../faecherwahl_main.php");
        } else {
            check_for_gk_gewaehlt();
        }
    }
}

function check_for_complete_gk_gese(){

}

function check_for_complete_gk_manu(){

}

function check_for_complete_gk_muku(){

}

function check_for_complete_gk_spra(){
    
}

function show_kf_abc(){

}

function uncheck_reset_gk_manu(){
    echo '<script type="text/javascript>
    document.getElementById("religion").checked = false
    document.getElementById("wn").checked = false

    document.getElementById("musik").checked = false
    document.getElementById("ds").checked = false
    document.getElementById("kunst").checked = false

    document.getElementById("spanisch").checked = false
    document.getElementById("latein").checked = false
    document.getElementById("englisch").checked = false
    document.getElementById("franzoesisch").checked = false

    document.getElementById("erdkundja").checked = false
    document.getElementById("erdkundne").checked = false

    document.getElementById("chemie").checked = false
    document.getElementById("physik").checked = false
    document.getElementById("informatik").checked = false
    document.getElementById("bio").checked = false
    </script>';

    enable_fachbutton("Religion2");
    enable_fachbutton("PoWi2");
    enable_fachbutton("Geschichte2");
    enable_fachbutton("Kunst2");
    enable_fachbutton("Musik2");

    for ($i=1; $i < sizeof($_SESSION['extra']); $i++) { 
        $_SESSION['extra'][$i] = false;
    }
    $_SESSION['sport_gk'] = false;
    $_SESSION['wish_for_p4_p5'] = '';

    echo '<script type="text/javascript>
    document.getElementById("PoWi2").checked = false
    document.getElementById("Geschichte2").checked = false
    document.getElementById("Kunst2").checked = false
    document.getElementById("Musik2").checked = false
    document.getElementById("Religion2").checked = false
    document.getElementById("pflicht").textContent = \'Pflicht: \'
    </script>';
    mana();
}

function uncheck_reset_gk_spra(){
    echo '<script type="text/javascript>
    document.getElementById("religion").checked = false
    document.getElementById("wn").checked = false

    document.getElementById("musik").checked = false
    document.getElementById("ds").checked = false
    document.getElementById("kunst").checked = false

    document.getElementById("spanisch").checked = false
    document.getElementById("latein").checked = false
    document.getElementById("franzoesisch").checked = false

    document.getElementById("erdkundja").checked = false
    document.getElementById("erdkundne").checked = false

    document.getElementById("informatikja").checked = false
    document.getElementById("informatikne").checked = false

    document.getElementById("chemie").checked = false
    document.getElementById("physik").checked = false
    document.getElementById("bio").checked = false
    </script>';

    enable_fachbutton("Religion2");
    enable_fachbutton("PoWi2");
    enable_fachbutton("Geschichte2");
    enable_fachbutton("Kunst2");
    enable_fachbutton("Musik2");

    for ($i=1; $i < sizeof($_SESSION['extra']); $i++) { 
        $_SESSION['extra'][$i] = false;
    }
    $_SESSION['sport_gk'] = false;
    $_SESSION['wish_for_p4_p5'] = '';

    echo '<script type="text/javascript">
    document.getElementById("Religion2").checked = false
    document.getElementById("PoWi2").checked = false
    document.getElementById("Geschichte2").checked = false
    document.getElementById("Kunst2").checked = false
    document.getElementById("Musik2").checked = false
    </script>';

    echo '<script type="text/javascript>
    document.getElementById("pflicht").textContent = \'Pflicht: \'
    </script>';
    spra();
}

function uncheck_reset_gk_muku(){
    echo '<script type="text/javascript">
    document.getElementById("religion").checked = false
    document.getElementById("wn").checked = false

    document.getElementById("musik").checked = false
    document.getElementById("ds").checked = false
    document.getElementById("kunst").checked = false

    document.getElementById("spanisch").checked = false
    document.getElementById("latein").checked = false
    document.getElementById("franzoesisch").checked = false
    document.getElementById("englisch").checked = false

    document.getElementById("erdkundja").checked = false
    document.getElementById("erdkundne").checked = false

    document.getElementById("informatikja").checked = false
    document.getElementById("informatikne").checked = false

    document.getElementById("chemie").checked = false
    document.getElementById("physik").checked = false
    document.getElementById("bio").checked = false
    </script>';

    for ($i=1; $i < sizeof($_SESSION['extra']); $i++) { 
        $_SESSION['extra'][$i] = false;
    }
    $_SESSION['sport_gk'] = false;
    $_SESSION['wish_for_p4_p5'] = '';
    
    enable_fachbutton("Religion2");
    enable_fachbutton("PoWi2");
    enable_fachbutton("Geschichte2");

    echo '<script type="text/javascript">
    document.getElementById("PoWi2").checked = false
    document.getElementById("Geschichte2").checked = false
    document.getElementById("Religion2").checked = false
    document.getElementById("pflicht").textContent = \'Pflicht: \'
    </script>';

    muku();
}

function uncheck_reset_gk_gese(){
    echo '<script type="text/javascript">
    document.getElementById("religion").checked = false
    document.getElementById("wn").checked = false
    document.getElementById("musik").checked = false
    document.getElementById("ds").checked = false
    document.getElementById("kunst").checked = false
  
    document.getElementById("spanisch").checked = false
    document.getElementById("latein").checked = false
    document.getElementById("franzoesisch").checked = false
    document.getElementById("englisch").checked = false
  
    document.getElementById("erdkundja").checked = false
    document.getElementById("erdkundne").checked = false
  
    document.getElementById("chemie").checked = false
    document.getElementById("physik").checked = false
    document.getElementById("bio").checked = false
    document.getElementById("informatik").checked = false
  
    document.getElementById("chemie2").checked = false
    document.getElementById("physik2").checked = false
    document.getElementById("bio2").checked = false
    document.getElementById("informatik2").checked = false
    document.getElementById("spanisch2").checked = false
    document.getElementById("latein2").checked = false
    document.getElementById("franzoesisch2").checked = false
    document.getElementById("englisch2").checked = false
  
    document.getElementById("chemie2").disabled = true
    document.getElementById("physik2").disabled = true
    document.getElementById("bio2").disabled = true
    document.getElementById("informatik2").disabled = true
    document.getElementById("spanisch2").disabled = true
    document.getElementById("latein2").disabled = true
    document.getElementById("franzoesisch2").disabled = true
    document.getElementById("englisch2").disabled = true
  
    document.getElementById("chemie2.label").style.opacity = \'0.5\'
    document.getElementById("physik2.label").style.opacity = \'0.5\'
    document.getElementById("bio2.label").style.opacity = \'0.5\'
    document.getElementById("informatik2.label").style.opacity = \'0.5\'
    document.getElementById("spanisch2.label").style.opacity = \'0.5\'
    document.getElementById("latein2.label").style.opacity = \'0.5\'
    document.getElementById("franzoesisch2.label").style.opacity = \'0.5\'
    document.getElementById("englisch2.label").style.opacity = \'0.5\'
    </script>';

    for ($i=1; $i < sizeof($_SESSION['extra']); $i++) { 
        $_SESSION['extra'][$i] = false;
    }
    $_SESSION['sport_gk'] = false;
    $_SESSION['wish_for_p4_p5'] = '';
    /*
    sessionStorage.setItem('extra12', false)
    sessionStorage.setItem('extra2', false)
    sessionStorage.setItem('extra5', false)
    sessionStorage.setItem('extra14', false)
    sessionStorage.setItem('extra1', false)
    sessionStorage.setItem('extra7', false)
    sessionStorage.setItem('extra11', false)
    sessionStorage.setItem('extra13', false)
    sessionStorage.setItem('extra9', false)
    sessionStorage.setItem('extra10', false)
    sessionStorage.setItem('extra17', false)
    sessionStorage.setItem('extra4', false)
    sessionStorage.setItem('extra8', false)
    sessionStorage.setItem('extra15', false)
    sessionStorage.setItem('extra16', false)
    sessionStorage.setItem('extra6', false)
    sessionStorage.setItem('extra3', false)
    sessionStorage.setItem('extra18', false)
    sessionStorage.setItem('sport_gk', false)
    sessionStorage.setItem('wish_for_p4_p5', '')
    */
  
    enable_fachbutton("Religion2");
    enable_fachbutton("Kunst2");
    enable_fachbutton("Musik2");
    echo '<script type="text/javascript">
    document.getElementById("Kunst2").checked = false
    document.getElementById("Musik2").checked = false
    document.getElementById("Religion2").checked = false
    document.getElementById("pflicht").textContent = \'Pflicht: \'
    </script>';
    gese();
}
/*
logicvariables();
echo $_SESSION['kernfaecher'];
kernfaecher_add();
echo ' nach add: ';
echo $_SESSION['kernfaecher'];
echo "    Bereich:      ";
echo $_SESSION[('B' . '_anzahl')];
bereich_add('B');
echo ' Nach Add:  ';
echo $_SESSION[('B' . '_anzahl')];
echo '<br>';
echo 'Moin!';
echo '<br>';
disable_buttons_p(2);
*/
