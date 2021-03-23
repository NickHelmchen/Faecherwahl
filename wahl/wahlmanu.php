<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="de">


  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="Seminarfuchs2.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title> Fächerwahl </title>
    <script src="logic.js"></script>
    <script src="script.js"></script>
    <script>
      function check() {
          if (check_for_complete_gk_manu() == true) {
            end()
            sessionStorage.setItem('gks_gewaehlt', true)
            wahl('output')          
          } else {
              alert('Es wurde noch nicht alles gewählt. Bitte wählen Sie alle benötigten Fächer aus.')
          }
      }
    </script>
  </head>

  <body onload="check_for_pfaecher_gewaehlt(), mana()">
    <div class="bgimg grid-container2">
       <?php 
          echo "<textarea class='head-input2'> " . $_SESSION["userName"] . "</textarea>"; 
          /*echo "<form action='../includes/logout.inc.php' method='post'>";
          echo "<button type='submit' name='submit' class='logoutbutton'>logout</button>";
          echo "</form>";*/
        ?>
        <textarea name="pflicht" id="pflicht" cols="40" rows="1" class="pflicht_gk" readonly>Pflicht: </textarea>
        <button class="reset2 buttonfertig" onclick="uncheck_reset_gk_manu()" id="resetbutton">Grundkurse zurücksetzen</button>
        <button class="reset-p-2 buttonfertig" onclick="go_back()" id="resetbutton2">Prüfungsfächer neu wählen</button>
        <button onclick="check()" id="nextpage1" class="next-button2 buttonfertig">weiter</button>
        <div class="reli w3-animate-left toggle-buttons" title="Entweder Religion oder Werte und Normen als Grundkurs belegen" id="div_rewn">
            <p class="header">Religion / Werte und Normen</p>
            <input type="radio" name="extra1" id="religion" onclick="set_religion()">
            <label for="religion" id="religion.label">Religion</label>
            <br>
            <br>
            <input type="radio" name="extra1" id="wn" onclick="set_wn()">
            <label for="wn" id="wn.label">Werte und Normen</label>
        </div>
        <div class="muku w3-animate-top toggle-buttons" title="Entweder Musik, Kunst oder DS als Grundkurs belegen" id="div_muku">
          <p class="header">Musisch- Künstlicherisch</p>
          <input type="radio" name="extra2" id="musik" onclick="set_musik()">
          <label for="musik" id="musik.label">Musik</label>
          <br>
          <br>
          <input type="radio" name="extra2" id="kunst" onclick="set_kunst()">
          <label for="kunst" id="kunst.label">Kunst</label>
          <br>
          <br>
          <input type="radio" name="extra2" id="ds" onclick="set_ds()">
          <label for="ds" id="ds.label">Darstellendes Spiel</label>
      </div>
        <div class="fsprach w3-animate-top toggle-buttons" title="Eine Fremdsprache als Grundkurs belegen" id="div_fs">
            <p class="header">Fremdsprache</p>
            <input type="radio" name="extra3" id="englisch" onclick="set_englisch()">
            <label for="englisch" id="englisch.label">Englisch</label>
            <br>
            <br>
            <input type="radio" name="extra3" id="spanisch" onclick="set_spanisch()">
            <label for="spanisch" id="spanisch.label">Spanisch</label>
            <br>
            <br>
            <input type="radio" name="extra3" id="franzoesisch" onclick="set_franzoesisch()">
            <label for="franzoesisch" id="franzoesisch.label">Französisch</label>
            <br>
            <br>
            <input type="radio" name="extra3" id="latein" onclick="set_latein()">
            <label for="latein" id="latein.label">Latein</label>
        </div>
        <div class="erdkunde w3-animate-top toggle-buttons" title="Erdkunde als zusätzliches Fach wählen" id="div_ek">
            <p class="header">Erdkunde</p>
            <input type="radio" name="extra4" id="erdkundja" onclick="set_erdkunde(true)">
            <label for="erdkundja" id="erdkundja.label">Ja</label>
            <br>
            <br>
            <input type="radio" name="extra4" id="erdkundne" onclick="set_erdkunde(false)">
            <label for="erdkundne" id="erdkundne.label">Nein</label>
        </div>
        <div class="natu w3-animate-right toggle-buttons" title="Eine 2. Naturwissenschaft als Grundkurs belegen" id="div_nw">
            <p class="header">Naturwissenschaften</p>
            <input type="radio" name="extra5" id="chemie" onclick="set_chemie()">
            <label for="chemie" id="chemie.label">Chemie</label>
            <br>
            <br>
            <input type="radio" name="extra5" id="bio" onclick="set_biologie()">
            <label for="bio" id="bio.label">Biologie</label>
            <br>
            <br>
            <input type="radio" name="extra5" id="physik" onclick="set_physik()">
            <label for="physik" id="physik.label">Physik</label>
            <br>
            <br>
            <input type="radio" name="extra5" id="informatik" onclick="set_informatik()">
            <label for="informatik" id="informatik.label">Informatik</label>
        </div>
        <div class="natu1-2 w3-animate-bottom toggle-buttons" title="Hier kannst du einen Wunsch angeben, welches Fach du vielleicht noch als P4 oder P5 festlegen möchtest und daher im 12. Jahrgang belegen möchtest">
          <p class="header">In 12 belegen</p>
          <input type="radio" name="extra6" id="Geschichte2" onclick="set_wish('Geschichte')">
          <label for="Geschichte2" id="Geschichte2.label">Geschichte</label> 
          <br>
          <br>
          <input type="radio" name="extra6" id="PoWi2" onclick="set_wish('Politik Wirtschaft')">
          <label for="PoWi2" id="PoWi2.label">Politik Wirtschaft</label> 
          <br>
          <br>
          <input type="radio" name="extra6" id="Kunst2" onclick="set_wish('Kunst')">
          <label for="Kunst2" id="Kunst2.label">Kunst</label> 
          <br>
          <br>
          <input type="radio" name="extra6" id="Musik2" onclick="set_wish('Musik')">
          <label for="Musik2" id="Musik2.label">Musik</label> 
          <br>
          <br>
          <input type="radio" name="extra6" id="Religion2" onclick="set_wish('Religion')">
          <label for="Religion2" id="Religion2.label">Religion</label> 
        </div>
    </div>    
  </body>
</html>

