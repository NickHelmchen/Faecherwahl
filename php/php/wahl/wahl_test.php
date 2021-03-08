<?php 
    session_start();
    include "logic.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="Seminarfuchs2.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <title>Fächerwahl</title>
        <script src="script.js"></script>
        <script src="output.js"></script>
        <script src="logic.js"></script>
        <script>
        function check() {
            if (check_for_complete_p() == true) {
                wahl2()
            } else {
                alert('Es wurde noch nicht alles gewählt. Bitte wählen Sie alle benötigten Fächer aus.')
            }
        }
        function change_kf_text_lang() {
            var help = false
            var help_englisch = false
            var help_spanisch = false
            var help_latein = false
            var help_franzoesisch = false
            var help_p_index = ''
            for (let index = 1; index < 6 && help == false; index++) {
                if (sessionStorage.getItem("pfach" + index) == 'Englisch' || sessionStorage.getItem("pfach" + index) == 'Spanisch' || sessionStorage.getItem("pfach" + index) == 'Latein' || sessionStorage.getItem("pfach" + index) == 'Französisch') {
                    help = true
                    if (sessionStorage.getItem("pfach" + index) == 'Englisch') {
                        help_englisch = true
                    }
                    if (sessionStorage.getItem("pfach" + index) == 'Spanisch') {
                        help_spanisch = true
                    }
                    if (sessionStorage.getItem("pfach" + index) == 'Latein') {
                        help_latein = true
                    }
                    if (sessionStorage.getItem("pfach" + index) == 'Französisch') {
                        help_franzoesisch = true
                    }
                    help_p_index = 'pfach' + index  
                } else {
                    help = false
                }
            }
            for (let i = 1; i < 6; i++) {                    
                if (help == true) {
                    document.getElementById("pfach" + i + ".3.label").title = "kein Kernfach, Bereich A"    
                    document.getElementById("pfach" + i + ".6.label").title = "kein Kernfach, Bereich A"    
                    document.getElementById("pfach" + i + ".7.label").title = "kein Kernfach, Bereich A"    
                    document.getElementById("pfach" + i + ".11.label").title = "kein Kernfach, Bereich A"    
                    
                } else {
                    document.getElementById("pfach" + i + ".3.label").title = "Kernfach, Bereich A"    
                    document.getElementById("pfach" + i + ".6.label").title = "Kernfach, Bereich A"    
                    document.getElementById("pfach" + i + ".7.label").title = "Kernfach, Bereich A"    
                    document.getElementById("pfach" + i + ".11.label").title = "Kernfach, Bereich A"  
                }
            }
            if (help_englisch == true) {
                document.getElementById(help_p_index + ".3.label").title = "Kernfach, Bereich A" 
            }
            if (help_spanisch == true) {
                document.getElementById(help_p_index + ".11.label").title = "Kernfach, Bereich A" 
            }
            if (help_franzoesisch == true) {
                document.getElementById(help_p_index + ".6.label").title = "Kernfach, Bereich A" 
            }
            if (help_latein == true) {
                document.getElementById(help_p_index + ".7.label").title = "Kernfach, Bereich A" 
            }
        }
        </script>
    </head>

    <body onload="afterwards()">
        <div class="bgimg grid-container">
            <textarea name="info" id="info" cols="30" rows="1" class="info" readonly>

                Blaue Felder sind die gewählten Fächer.
                Ausgegraute Felder können nicht gewählt werden.
                Fächer, die im letzten Jahr nicht erteilt wurden dürfen nicht gewählt werden.  
            </textarea>
            <?php 
                echo "<textarea class='head-input1'> " . $_SESSION["userName"] . "</textarea>"; 
                /*echo "<form action='../includes/logout.inc.php' method='post'>";
                echo "<button type='submit' name='submit' class='logoutbutton'>logout</button>";
                echo "</form>";*/
            ?>
            <form action='../includes/logout.inc.php' class='logoutbutton' method='post'>
                <button type='submit' name='submit' class='logoutbutton1'>logout</button>
            </form>
            <button onclick="check()" id="nextpage1" class="next-button buttonfertig">weiter</button>
            <button onclick="restart(), terminator()" id="restart" class="buttonfertig restartbutton next-button">neu wählen</button>
            <div class="gp1 w3-animate-left toggle-buttons">
                <p class="header" title="schriftliches Prüfungsfach mit erhöhtem Anforderungsniveau (5-stündig)">Prüfungsfach 1</p>
                <input type="radio" name="pfach1" id="pfach1.1" value="Mathe" onclick="<?php save2('Mathe');?>, selected('pfach1.', '1'), visible('pfach1.', '1')">
                <label for="pfach1.1" title="Kernfach, Bereich C" id="pfach1.1.label">Mathe</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.2" value="Chemie" onclick="<?php save2('Chemie');?>, selected('pfach1.', '2'), visible('pfach1.', '2'), save(), change_kf_text_lang()">
                <label for="pfach1.2" title="kein Kernfach, Bereich C" id="pfach1.2.label">Chemie</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.3" value="Englisch" onclick="selected('pfach1.', '3'), visible('pfach1.', '3'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.3" title="Kernfach, Bereich A" id="pfach1.3.label">Englisch</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.4" value="Physik" onclick="selected('pfach1.', '4'), visible('pfach1.', '4'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.4" title="kein Kernfach, Bereich C" id="pfach1.4.label">Physik</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.5" value="Biologie" onclick="selected('pfach1.', '5'), visible('pfach1.', '5'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.5" title="kein Kernfach, Bereich C" id="pfach1.5.label">Biologie</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.6" value="Französisch" onclick="selected('pfach1.', '5'), selected('pfach1.', '6'), visible('pfach1.', '6'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.6" title="Kernfach, Bereich A" id="pfach1.6.label">Französisch</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.7" value="Latein" onclick="selected('pfach1.', '5'), selected('pfach1.', '7'), visible('pfach1.', '7'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.7" title="Kernfach, Bereich A" id="pfach1.7.label">Latein</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.8" value="Musik" onclick="selected('pfach1.', '5'), selected('pfach1.', '8'), visible('pfach1.', '8'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.8" title="kein Kernfach, Bereich A" id="pfach1.8.label">Musik</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.9" value="Informatik" onclick="selected('pfach1.', '5'), selected('pfach1.', '9'), visible('pfach1.', '9'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.9" title="kein Kernfach, Bereich C" id="pfach1.9.label">Informatik</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.10" value="Kunst" onclick="selected('pfach1.', '10'), visible('pfach1.', '10'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.10" title="kein Kernfach, Bereich A" id="pfach1.10.label">Kunst</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.11" value="Spanisch" onclick="selected('pfach1.', '11'), visible('pfach1.', '11'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.11" title="Kernfach, Bereich A" id="pfach1.11.label">Spanisch</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.12" value="Deutsch" onclick="selected('pfach1.', '12'), visible('pfach1.', '12'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.12" title="Kernfach, Bereich A" id="pfach1.12.label">Deutsch</label>
                <br>
                <br>
                <input type="radio" name="pfach1" id="pfach1.13" value="Geschichte" onclick="selected('pfach1.', '13'), visible('pfach1.', '13'), save(), change_kf_text_lang(), logicvariables(), logicsubjects(1), proof_in_advance('pfach2.', 2)">
                <label for="pfach1.13" title="kein Kernfach, Bereich B" id="pfach1.13.label">Geschichte</label>
                <br>
                <br>
                <br>
            </div>
            <?php
                if(isset($_SESSION['pfach1'])){
                logicvariables();
                logicsubjects(1);
                proof_in_advance('pfach2.', 2);
            }
            ?>
            <div class="gp2 w3-animate-top toggle-buttons">
                <p class="header" title="schriftliches Prüfungsfach mit erhöhtem Anforderungsniveau (5-stündig)">Prüfungsfach 2</p>
                <input type="radio" name="pfach2" id="pfach2.1" value="Mathe" onclick="selected('pfach2.', '1'), visible('pfach2.', '1'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.1" title="Kernfach, Bereich C" id="pfach2.1.label">Mathe</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.2" value="Chemie" onclick="selected('pfach2.', '2'), visible('pfach2.', '2'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.2" title="kein Kernfach, Bereich C" id="pfach2.2.label">Chemie</label>
                        <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.3" value="Englisch" onclick="selected('pfach2.', '3'), visible('pfach2.', '3'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.3" title="Kernfach, Bereich A" id="pfach2.3.label">Englisch</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.4" value="Physik" onclick="selected('pfach2.', '4'), visible('pfach2.', '4'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.4" title="kein Kernfach, Bereich C" id="pfach2.4.label">Physik</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.5" value="Biologie" onclick="selected('pfach2.', '5'), visible('pfach2.', '5'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.5" title="kein Kernfach, Bereich C" id="pfach2.5.label">Biologie</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.6" value="Französisch" onclick="selected('pfach2.', '6'), visible('pfach2.', '6'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.6" title="Kernfach, Bereich A" id="pfach2.6.label">Französisch</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.7" value="Latein" onclick="selected('pfach2.', '7'), visible('pfach2.', '7'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.7" title="Kernfach, Bereich A" id="pfach2.7.label">Latein</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.8" value="Musik" onclick="selected('pfach2.', '8'), visible('pfach2.', '8'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.8" title="kein Kernfach, Bereich A" id="pfach2.8.label">Musik</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.9" value="Informatik" onclick="selected('pfach2.', '9'), visible('pfach2.', '9'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.9" title="kein Kernfach, Bereich C" id="pfach2.9.label">Informatik</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.10" value="Kunst" onclick="selected('pfach2.', '10'), visible('pfach2.', '10'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.10" title="kein Kernfach, Bereich A" id="pfach2.10.label">Kunst</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.11" value="Spanisch" onclick="selected('pfach2.', '11'), visible('pfach2.', '11'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.11" title="Kernfach, Bereich A" id="pfach2.11.label">Spanisch</label>
                <br>
                <br>
                <input type="radio" name="pfach2" id="pfach2.12" value="Deutsch" onclick="selected('pfach2.', '12'), visible('pfach2.', '12'), save(), change_kf_text_lang(), disable_buttons(2), logicsubjects(2), proof_in_advance('pfach3.', 3)">
                <label for="pfach2.12" title="Kernfach, Bereich A"id="pfach2.12.label">Deutsch</label>
                <br>
                <br>
                <br>
            </div>
            <div class="gp3 w3-animate-top toggle-buttons">
                <p class="header" title="schriftliches Prüfungsfach mit erhöhtem Anforderungsniveau (5-stündig)">Prüfungsfach 3</p>
                <input type="radio" name="pfach3" id="pfach3.1" value="Mathe" onclick="selected('pfach3.', '1'), visible('pfach3.', '1'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.1" title="Kernfach, Bereich C" id="pfach3.1.label">Mathe</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.2" value="Chemie" onclick="selected('pfach3.', '2'), visible('pfach3.', '2'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.2" title="kein Kernfach, Bereich C" id="pfach3.2.label">Chemie</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.3" value="Englisch" onclick="selected('pfach3.', '3'), visible('pfach3.', '3'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.3" title="Kernfach, Bereich A" id="pfach3.3.label">Englisch</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.4" value="Physik" onclick="selected('pfach3.', '4'), visible('pfach3.', '4'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.4" title="kein Kernfach, Bereich C" id="pfach3.4.label">Physik</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.5" value="Biologie" onclick="selected('pfach3.', '5'), visible('pfach3.', '5'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.5" title="kein Kernfach, Bereich C" id="pfach3.5.label">Biologie</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.6" value="Französisch" onclick="selected('pfach3.', '6'), visible('pfach3.', '6'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.6" title="Kernfach, Bereich A" id="pfach3.6.label">Französisch</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.7" value="Latein" onclick="selected('pfach3.', '7'), visible('pfach3.', '7'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.7" title="Kernfach, Bereich A" id="pfach3.7.label">Latein</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.8" value="Musik" onclick="selected('pfach3.', '8'), visible('pfach3.', '8'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.8" title="kein Kernfach, Bereich A" id="pfach3.8.label">Musik</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.9" value="Informatik" onclick="selected('pfach3.', '9'), visible('pfach3.', '9'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.9" title="kein Kernfach, Bereich C" id="pfach3.9.label">Informatik</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.10" value="Kunst" onclick="selected('pfach3.', '10'), visible('pfach3.', '10'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.10" title="kein Kernfach, Bereich A" id="pfach3.10.label">Kunst</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.11" value="Spanisch" onclick="selected('pfach3.', '11'), visible('pfach3.', '11'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.11" title="Kernfach, Bereich A" id="pfach3.11.label">Spanisch</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.12" value="Deutsch" onclick="selected('pfach3.', '12'), visible('pfach3.', '12'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.12" title="Kernfach, Bereich A" id="pfach3.12.label">Deutsch</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.13" value="Geschichte" onclick="selected('pfach3.', '13'), visible('pfach3.', '13'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.13" title="kein Kernfach, Bereich B" id="pfach3.13.label">Geschichte</label>
                <br>
                <br>
                <input type="radio" name="pfach3" id="pfach3.14" value="Politik Wirtschaft" onclick="selected('pfach3.', '14'), visible('pfach3.', '14'), save(), change_kf_text_lang(), disable_buttons(3), logicsubjects(3), proof_in_advance('pfach4.', 4)">
                <label for="pfach3.14" title="kein Kernfach, Bereich B" id="pfach3.14.label">Politik Wirtschaft</label>
                <br>
                <br>
                <br>
            </div>
            <div class="gp4 w3-animate-top toggle-buttons">
                <p class="header" title="Fach mit grundlegendem Anforderungsniveau (3-stündig)">Prüfungsfach 4</p>
                <input type="radio" name="pfach4" id="pfach4.1" value="Mathe" onclick="selected('pfach4.', '1'), visible('pfach4.', '1'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.1" title="Kernfach, Bereich C" id="pfach4.1.label">Mathe</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.2" value="Chemie" onclick="selected('pfach4.', '2'), visible('pfach4.', '2'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.2" title="kein Kernfach, Bereich C" id="pfach4.2.label">Chemie</label>
                        <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.3" value="Englisch" onclick="selected('pfach4.', '3'), visible('pfach4.', '3'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.3" title="Kernfach, Bereich A" id="pfach4.3.label">Englisch</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.4" value="Physik" onclick="selected('pfach4.', '4'), visible('pfach4.', '4'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.4" title="kein Kernfach, Bereich C" id="pfach4.4.label">Physik</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.5" value="Biologie" onclick="selected('pfach4.', '5'), visible('pfach4.', '5'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.5" title="kein Kernfach, Bereich C" id="pfach4.5.label">Biologie</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.6" value="Französisch" onclick="selected('pfach4.', '6'), visible('pfach4.', '6'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.6" title="Kernfach, Bereich A" id="pfach4.6.label">Französisch</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.7" value="Latein" onclick="selected('pfach4.', '7'), visible('pfach4.', '7'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.7" title="Kernfach, Bereich A" id="pfach4.7.label">Latein</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.8" value="Musik" onclick="selected('pfach4.', '8'), visible('pfach4.', '8'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.8" title="kein Kernfach, Bereich A" id="pfach4.8.label">Musik</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.9" value="Informatik" onclick="selected('pfach4.', '9'), visible('pfach4.', '9'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.9" title="kein Kernfach, Bereich C" id="pfach4.9.label">Informatik</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.10" value="Kunst" onclick="selected('pfach4.', '10'), visible('pfach4.', '10'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.10" title="kein Kernfach, Bereich A" id="pfach4.10.label">Kunst</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.11" value="Spanisch" onclick="selected('pfach4.', '11'), visible('pfach4.', '11'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.11" title="Kernfach, Bereich A" id="pfach4.11.label">Spanisch</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.12" value="Deutsch" onclick="selected('pfach4.', '12'), visible('pfach4.', '12'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.12" title="Kernfach, Bereich A" id="pfach4.12.label">Deutsch</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.13" value="Geschichte" onclick="selected('pfach4.', '13'), visible('pfach4.', '13'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.13" title="kein Kernfach, Bereich B" id="pfach4.13.label">Geschichte</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.14" value="Politik Wirtschaft" onclick="selected('pfach4.', '14'), visible('pfach4.', '14'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.14" title="kein Kernfach, Bereich B" id="pfach4.14.label">Politik Wirtschaft</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.15" value="Religion" onclick="selected('pfach4.', '15'), visible('pfach4.', '15'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.15" title="kein Kernfach, Bereich B" id="pfach4.15.label">Religion</label>
                <br>
                <br>
                <input type="radio" name="pfach4" id="pfach4.16" value="Erdkunde" onclick="selected('pfach4.', '16'), visible('pfach4.', '16'), save(), change_kf_text_lang(), disable_buttons(4), logicsubjects(4), proof_in_advance('pfach5.', 5)">
                <label for="pfach4.16" title="kein Kernfach, Bereich B" id="pfach4.16.label">Erdkunde</label>
                <br>
                <br>
                <br>
            </div>
            <div class="gp5 w3-animate-right toggle-buttons">
                <p class="header" title="Fach mit grundlegendem Anforderungsniveau (3-stündig)">Prüfungsfach 5</p>
                <input type="radio" name="pfach5" id="pfach5.1" value="Mathe" onclick="selected('pfach5.', '1'), visible('pfach5.', '1'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.1" title="Kernfach, Bereich C" id="pfach5.1.label">Mathe</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.2" value="Chemie" onclick="selected('pfach5.', '2'), visible('pfach5.', '2'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.2" title="kein Kernfach, Bereich C" id="pfach5.2.label">Chemie</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.3" value="Englisch" onclick="selected('pfach5.', '3'), visible('pfach5.', '3'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.3" title="Kernfach, Bereich A" id="pfach5.3.label">Englisch</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.4" value="Physik" onclick="selected('pfach5.', '4'), visible('pfach5.', '4'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.4" title="kein Kernfach, Bereich C" id="pfach5.4.label">Physik</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.5" value="Biologie" onclick="selected('pfach5.', '5'), visible('pfach5.', '5'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.5" title="kein Kernfach, Bereich C" id="pfach5.5.label">Biologie</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.6" value="Französisch" onclick="selected('pfach5.', '6'), visible('pfach5.', '6'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.6" title="Kernfach, Bereich A" id="pfach5.6.label">Französisch</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.7" value="Latein" onclick="selected('pfach5.', '7'), visible('pfach5.', '7'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.7" title="Kernfach, Bereich A" id="pfach5.7.label">Latein</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.8" value="Musik" onclick="selected('pfach5.', '8'), visible('pfach5.', '8'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.8" title="kein Kernfach, Bereich A" id="pfach5.8.label">Musik</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.9" value="Informatik" onclick="selected('pfach5.', '9'), visible('pfach5.', '9'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.9" title="kein Kernfach, Bereich C" id="pfach5.9.label">Informatik</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.10" value="Kunst" onclick="selected('pfach5.', '10'), visible('pfach5.', '10'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.10" title="kein Kernfach, Bereich A" id="pfach5.10.label">Kunst</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.11" value="Spanisch" onclick="selected('pfach5.', '11'), visible('pfach5.', '11'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.11" title="Kernfach, Bereich A" id="pfach5.11.label">Spanisch</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.12" value="Deutsch" onclick="selected('pfach5.', '12'), visible('pfach5.', '23'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.12" title="Kernfach, Bereich A" id="pfach5.12.label">Deutsch</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.13" value="Geschichte" onclick="selected('pfach5.', '13'), visible('pfach5.', '13'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.13" title="kein Kernfach, Bereich B" id="pfach5.13.label">Geschichte</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.14" value="Politik Wirtschaft" onclick="selected('pfach5.', '14'), visible('pfach5.', '14'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.14" title="kein Kernfach, Bereich B" id="pfach5.14.label">Politik Wirtschaft</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.15" value="Religion" onclick="selected('pfach5.', '15'), visible('pfach5.', '15'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.15" title="kein Kernfach, Bereich B" id="pfach5.15.label">Religion</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.16" value="Erdkunde" onclick="selected('pfach5.', '16'), visible('pfach5.', '16'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.16" title="kein Kernfach, Bereich B" id="pfach5.16.label">Erdkunde</label>
                <br>
                <br>
                <input type="radio" name="pfach5" id="pfach5.17" value="Sport" onclick="selected('pfach5.', '17'), visible('pfach5.', '17'), save(), change_kf_text_lang(), disable_buttons(5), logicsubjects(5)">
                <label for="pfach5.17" title="kein Kernfach, keinem Bereich zuzuordnen"id="pfach5.17.label">Sport</label>
                <br>
                <br>
            </div>
        </div>
    </body>
</html>