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
    <script src="script.js"></script>
    <script src="cookies.js"></script>
  </head>

  <body class="bgimg" onload="terminator(), url()">
    <div class="grid-container1">
      <?php 
      echo '<textarea name="name" id="name" cols="20" rows="1" class="head-input1" readonly value="' . $_SESSION['userName'] . '"></textarea>'
      ?>
      <button class="button1 next-button" onclick="wahl('wahl')">weiter</button>
      <textarea name="infotext" id="infotext" cols="60" rows="25" class="infotext" readonly>
        
        Info für die Fächerwahl

        Diese Webseite hilft dabei, Profile zu wählen, die den Regelungen entsprechen, berücksichtigt aber keine Sonderwünsche.

          1. Auf der ersten Seite werden die Prüfungsfächer (P1 - P5) gewählt.
          2. P1 - P3 werden dabei auf erhöhtem Niveau unterrichtet, während P4 und P5 auf grundlegendem Niveau unterrichtet werden. 
          3. Es müssen 2 aus 3 Kernfächern (Mathe, Deutsch, Fremdsprache) gewählt werden.
          4. Dabei müssen die Bereiche A (Sprachlich/Musisch-Künstlerisch), B (Gesellschaftlich), 
              C (Naturwissenschaftlich) beachtet werden.
          5. Aus der Wahl von P1 bildet sich das Profil, wobei nachfolgenden Profilen 
              unterschieden wird:

              1. Mathematisch-Naturwissenschaftliches Profil (2 Naturwissenschaften müssen gewählt werden)
              2. Gesellschaftliches Profil (Geschichte und Politik/Wirtschaft werden als Prüfungsfächer gewählt)
              3. Sprachliches Profil (Hier müssen 2 Fremdsprachen belegt werden)
              4. Musisch-Künstlerisches Profil (Hier müssen 2 von 3 musisch-künstlerischen Fächern gewählt werden)

          6. Wenn Sport als P5 gewählt werden soll, müssen bei P1 bis P4 zwei Kernfächer und 
             die Bereiche A,B,C vertreten sein
          7. Sollten Deutsch, Mathematik, Geschichte und Politik/Wirtschaft nicht als
              Prüfungsfächer gewählt werden, werden sie als Grundkurse gewählt. 
          8. Auf der zweiten Seite werden die Kurse auf grundlegendem Niveau gewählt.
          9. Oben im Dropdownmenu kann man ein "Hassfach" angeben, dass bei den Prüfungsfächern nicht wählbar ist. Bei den Grundkursen gibt es keine Veränderung.
      </textarea>
     <div class="dropdown">
        <button class="dropbtn">"Hassfach"</button>
        <div class="dropdown-content">
          <a onclick="nicht_waehlen_Fach('mathe')">Mathe</a>
          <a onclick="nicht_waehlen_Fach('chemie')">Chemie</a>
          <a onclick="nicht_waehlen_Fach('englisch')">Englisch</a>
          <a onclick="nicht_waehlen_Fach('physik')">Physik</a>
          <a onclick="nicht_waehlen_Fach('biologie')">Biologie</a>
          <a onclick="nicht_waehlen_Fach('franzoesisch')">Französisch</a>
          <a onclick="nicht_waehlen_Fach('latein')">Latein</a>
          <a onclick="nicht_waehlen_Fach('musik')">Musik</a>
          <a onclick="nicht_waehlen_Fach('informatik')">Informatik</a>
          <a onclick="nicht_waehlen_Fach('kunst')">Kunst</a>
          <a onclick="nicht_waehlen_Fach('spanisch')">Spanisch</a>
          <a onclick="nicht_waehlen_Fach('deutsch')">Deutsch</a>
          <a onclick="nicht_waehlen_Fach('geschichte')">Geschichte</a>
          <a onclick="nicht_waehlen_Fach('powi')">Politik Wirtschaft</a>
          <a onclick="nicht_waehlen_Fach('religion')">Religion</a>
          <a onclick="nicht_waehlen_Fach('erdkunde')">Erdkunde</a>
          <a onclick="nicht_waehlen_Fach('sport')">Sport</a>
        </div>
      </div>
      <textarea name="info_nicht_waehlen" id="info_nicht_waehlen" cols="60" rows="1" class="infotext2" readonly>Dieses Fach wird in der nächsten Auswahlmöglichkeit nicht mehr wählbar sein:</textarea>
    </div>
  </body>
</html>

