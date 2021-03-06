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
          if (check_for_complete_gk_muku() == true) {
            end()
            wahl3()
          } else {
            alert('Es wurde noch nicht alles gewählt. Bitte wählen Sie alle benötigten Fächer aus.')
          }
      }
    </script>
  </head>

  <body onload="page2(), muku()">
    <div class="bgimg grid-container4">
        <textarea name="name" id="name" cols="40" rows="1" class="head-input2" readonly></textarea>
        <button onclick="check()" id="nextpage1" class="next-button2 buttonfertig">weiter</button>
        <div class="reli4 w3-animate-left toggle-buttons" title="Entweder Religion oder Werte und Normen als Grundkurs belegen" id="div_rewn">
            <p class="header">Religion / Werte und Normen</p>
            <input type="radio" name="extra1" id="religion" onclick="set_religion()">
            <label for="religion" id="religion.label">Religion</label>
            <br>
            <br>
            <input type="radio" name="extra1" id="wn" onclick="set_wn()">
            <label for="wn" id="wn.label">Werte und Normen</label>
        </div>
        <div class="muku4 w3-animate-top toggle-buttons" title="Ein 2. musisch-künstlerisches Fach als Grundkurs belegen" id="div_muku">
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
        <div class="erdkunde4 w3-animate-top toggle-buttons" title="Erdkunde als zusätzlichen Grundkurs belegen" id="div_ek">
            <p class="header">Erdkunde</p>
            <input type="radio" name="extra4" id="erdkundja" onclick="set_erdkunde()">
            <label for="erdkundja" id="erdkundja.label">Ja</label>
            <br>
            <br>
            <input type="radio" name="extra4" id="erdkundne" onclick="set_erdkunde_false()">
            <label for="erdkundne" id="erdkundne.label">Nein</label>
        </div>
        <div class="informatik4 w3-animate-top toggle-buttons" title="Informatik als zusätzlichen Grundkurs belegen" id="div_inf">
            <p class="header">Informatik</p>
            <input type="radio" name="extra5" id="informatikja" onclick="set_informatik_voluntary()">
            <label for="informatikja" id="informatikja.label">Ja</label>
            <br>
            <br>
            <input type="radio" name="extra5" id="informatikne" onclick="set_informatik_false()">
            <label for="informatikne" id="informatikne.label">Nein</label>
        </div>
        <div class="natu4 w3-animate-right toggle-buttons" title="Eine Naturwissenschaft als Grundkurs belegen" id="div_nw">
            <p class="header">Naturwissenschaften</p>
            <input type="radio" name="extra6" id="chemie" onclick="set_chemie()">
            <label for="chemie" id="chemie.label">Chemie</label>
            <br>
            <br>
            <input type="radio" name="extra6" id="bio" onclick="set_biologie()">
            <label for="bio" id="bio.label">Biologie</label>
            <br>
            <br>
            <input type="radio" name="extra6" id="physik" onclick="set_physik()">
            <label for="physik" id="physik.label">Physik</label>
        </div>
        <div class="fsprach4 w3-animate-top toggle-buttons" title="Eine Fremdsprache als Grundkurs belegen" id="div_fs">
            <p class="header">Fremdsprache</p>
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
            <br>
            <br>
            <input type="radio" name="extra3" id="englisch" onclick="set_englisch()">
            <label for="englisch" id="englisch.label">Englisch</label>
        </div>
        <div class="natu4-2 w3-animate-bottom toggle-buttons" title="Hier kannst du einen Wunsch angeben, welches Fach du vielleicht noch als P4 oder P5 festlegen möchtest und daher im 12. Jahrgang belegen möchtest">
          <p class="header">In 12 belegen</p>
          <input type="radio" name="extra7" id="Geschichte2" onclick="set_geschichte_wish()">
          <label for="Geschichte2" id="Geschichte2.label">Geschichte</label> 
          <br>
          <br>
          <input type="radio" name="extra7" id="PoWi2" onclick="set_powi_wish()">
          <label for="PoWi2" id="PoWi2.label">Politik Wirtschaft</label> 
          <br>
          <br>
          <input type="radio" name="extra7" id="Religion2" onclick="set_religion_wish()">
          <label for="Religion2" id="Religion2.label">Religion</label> 
        </div>
    </div>    
  </body>
</html>