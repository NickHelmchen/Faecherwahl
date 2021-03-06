<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="Seminarfuchs2.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="style_output.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <title> Fächerwahl </title>
        <script src="script.js"></script>
        <script src="output.js"></script>
      </head>

    <body onload="output(), look_for_extra()"class="bgimg">
        <div class="grid-container3"> 

            <button class="printbutton button1" onclick="buttonprint()" id="printbutton">Drucken</button>
            <input type="text" class="name" name="name" id="name" readonly>
            <label for="name" class="namelabel" id="namelabel"> Name: </label>
            <input type="text" class="lastname" name="lastname" id="lastname" readonly>
            <label for="lastname" class="lastnamelabel" id="lastnamelabel"> Nachname: </label>
            <input type="text" class="pfach1" name="pfach1" id="pfach1" readonly>
            <label for="pfach1" class="pfach1label" id="pfach1label">Prüfungsfach 1:</label>
            <input type="text" class="pfach2" name="pfach2" id="pfach2" readonly>
            <label for="pfach2" class="pfach2label" id="pfach2label">Prüfungsfach 2:</label>
            <input type="text" class="pfach3" name="pfach3" id="pfach3" readonly>
            <label for="pfach3" class="pfach3label" id="pfach3label">Prüfungsfach 3:</label>
            <input type="text" class="pfach4" name="pfach4" id="pfach4" readonly>
            <label for="pfach4" class="pfach4label" id="pfach4label">Prüfungsfach 4:</label>
            <input type="text" class="pfach5" name="pfach5" id="pfach5" readonly>
            <label for="pfach5" class="pfach5label" id="pfach5label">Prüfungsfach 5:</label>
            

            <input type="text" class="extra1" name="extra1" id="extra1" readonly>
            <label for="extra1" class="extra1label" id="extra1label">Mathe:</label>
            <input type="text" class="extra2" name="extra2" id="extra2" readonly>
            <label for="extra2" class="extra2label" id="extra2label">Chemie:</label>
            <input type="text" class="extra3" name="extra3" id="extra3" readonly>
            <label for="extra3" class="extra3label" id="extra3label">Englisch:</label>
            <input type="text" class="extra4" name="extra4" id="extra4" readonly>
            <label for="extra4" class="extra4label" id="extra4label">Physik:</label>
            <input type="text" class="extra5" name="extra5" id="extra5" readonly>
            <label for="extra5" class="extra5label" id="extra5label">Biologie:</label>
            <input type="text" class="extra6" name="extra" id="extra6" readonly>
            <label for="extra6" class="extra6label" id="extra6label">Französisch:</label>
            <input type="text" class="extra7" name="extra7" id="extra7" readonly>
            <label for="extra7" class="extra7label" id="extra7label">Latein:</label>
            <input type="text" class="extra8" name="extra8" id="extra8" readonly>
            <label for="extra8" class="extra8label" id="extra8label">Musik:</label>
            <input type="text" class="extra9" name="extra9" id="extra9" readonly>
            <label for="extra9" class="extra9label" id="extra9label">Informatik:</label>
            <input type="text" class="extra10" name="extra10" id="extra10" readonly>
            <label for="extra10" class="extra10label" id="extra10label">Kunst:</label>
            <input type="text" class="extra11" name="extra11" id="extra11" readonly>
            <label for="extra11" class="extra11label" id="extra11label">Spanisch:</label>
            <input type="text" class="extra12" name="extra12" id="extra12" readonly>
            <label for="extra12" class="extra12label" id="extra12label">Deutsch:</label>
            <input type="text" class="extra13" name="extra13" id="extra13" readonly>
            <label for="extra13" class="extra13label" id="extra13label">Geschichte:</label>
            <input type="text" class="extra14" name="extra14" id="extra14" readonly>
            <label for="extra14" class="extra14label" id="extra14label">Politik Wirtschaft:</label>
            <input type="text" class="extra15" name="extra15" id="extra15" readonly>
            <label for="extra15" class="extra15label" id="extra15label">Religion:</label>
            <input type="text" class="extra18" name="extra18" id="extra18" readonly>
            <label for="extra18" class="extra18label" id="extra18label">Werte und Normen:</label>
            <input type="text" class="extra16" name="extra16" id="extra16" readonly>
            <label for="extra16" class="extra16label" id="extra16label">Erdkunde:</label>
            <input type="text" class="extra17" name="extra17" id="extra17" readonly>
            <label for="extra17" class="extra17label" id="extra17label">Darstellendes Spiel:</label>

            <br>

            <textarea name="signature" id="signature" cols="30" rows="1" class="signature">Unterschrift des/der Schüler(in)</textarea>
            <textarea name="signature" id="signature2" cols="30" rows="1" class="signature2">Unterschrift eines Erziehungsberechtigten</textarea>
            <textarea name="signature" id="signature3" cols="30" rows="1" class="signature3">Datum</textarea>

        </div>
    </body>
</html>