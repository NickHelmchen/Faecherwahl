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
    <link rel="stylesheet" href="style_output.css" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title> Fächerwahl </title>
    <script src="script.js"></script>
    <script src="logic.js"></script>
    <script src="output.js"></script>
    <script src="https://unpkg.com/downloadjs@1.4.7"></script>
    <script>
        function post(){
            var data = new FormData;
            for (let i = 1; i < 6; i++) {
                switch (sessionStorage.getItem('pfach' + i)) {
                    case 'Mathe':
                        data.append(i, 1)
                        break;
                    case 'Chemie':
                        data.append(i, 2)
                        break;
                    case 'Englisch':
                        data.append(i, 3)
                        break;
                    case 'Physik':
                        data.append(i, 4)
                        break;
                    case 'Biologie':
                        data.append(i, 5)
                        break;
                    case 'Französisch':
                        data.append(i, 6)
                        break;
                    case 'Latein':
                        data.append(i, 7)
                        break;
                    case 'Musik':
                        data.append(i, 8)
                        break;
                    case 'Informatik':
                        data.append(i, 9)
                        break;
                    case 'Kunst':
                        data.append(i, 10)
                        break;
                    case 'Spanisch':
                        data.append(i, 11)
                        break;
                    case 'Deutsch':
                        data.append(i, 12)
                        break;
                    case 'Geschichte':
                        data.append(i, 13)
                        break;
                    case 'Politik Wirtschaft':
                        data.append(i, 14)
                        break;
                    case 'Religion':
                        data.append(i, 15)
                        break;
                    case 'Erdkunde':
                        data.append(i, 16)
                        break;
                    case 'Sport':
                        data.append(i, 17)
                        break;
                }
                if (sessionStorage.getItem('extra12') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(6, help)

                if (sessionStorage.getItem('extra2') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(7, help)

                if (sessionStorage.getItem('extra14') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(8, help)

                if (sessionStorage.getItem('extra1') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(9, help)

                if (sessionStorage.getItem('extra4') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(10, help)

                if (sessionStorage.getItem('extra5') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(11, help)

                if (sessionStorage.getItem('extra7') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(12, help)

                if (sessionStorage.getItem('extra17') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(13, help)

                if (sessionStorage.getItem('extra11') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(14, help)
                if (sessionStorage.getItem('extra13') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(15, help)

                if (sessionStorage.getItem('extra10') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(16, help)

                if (sessionStorage.getItem('extra3') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(17, help)

                if (sessionStorage.getItem('extra9') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(18, help)

                if (sessionStorage.getItem('extra8') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(19, help)

                if (sessionStorage.getItem('extra15') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(20, help)

                if (sessionStorage.getItem('extra16') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(21, help)

                if (sessionStorage.getItem('extra18') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(22, help)

                if (sessionStorage.getItem('extra6') == 'true') {
                    help = 1
                } else {
                    help = 0
                }
                data.append(23, help)

                switch (sessionStorage.getItem('wish_for_p4_p5')) {
                    case 'Geschichte':
                        help = 13
                        break;
                    case 'Religion':
                        help = 15
                        break;
                    case 'Politik Wirtschaft':
                        help = 14
                        break;
                    case 'Kunst':
                        help = 10
                        break;
                    case 'Musik':
                        help = 8
                        break;
                }
                data.append(24, help)
            }

            var xhr = new XMLHttpRequest()
            xhr.open("POST", "../includes/post.inc.php", true)
            xhr.onload = function(){
                if (this.response != "") {
                    console.log(this.response)
                    alert('Ihre Daten wurden erfolgreich abgeschickt!')
                }
            }
            xhr.send(data)
        }
    </script>
</head>

<body onload="output(), check_for_gewaehlt_output(), set_stundenlabel()" class="bgimg">
    <div class="grid-container3">
        <textarea name="stundenlabel" id="stundenlabel" cols="40" rows="1" class="stundenlabel" readonly>Durchschnittliche Wochenstunden: </textarea>
        <form action='../includes/logout.inc.php' method='post'>
                <button type='submit' name='submit' class='logoutbutton1 buttonfertig next-button'>logout</button>
            </form>
        <button class="printbutton button1" onclick="post()" id="printbutton">Abschicken</button>
        <button class="resetbutton button1" onclick="location.href='info.php'" type="button"
            id="resetbutton">Nochmal wählen</button>
        
        <?php 
                echo '<input type="text" class="name" name="name" id="name" readonly value=' . $_SESSION['userName'] . '>';
                /*echo "<form action='../includes/logout.inc.php' method='post'>";
                echo "<button type='submit' name='submit' class='logoutbutton'>logout</button>";
                echo "</form>";*/
        ?>
        <label for="name" class="namelabel" id="namelabel"> Name: </label>
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


        <label for="extragk" class="extragk" id="extragklabel"> Gewählte Grundkurse: </label>
        <input type="text" class="extra1" name="extra1" id="extra1" readonly>
        <label for="extra1" class="extra1label" id="extra1label">Biologie:</label>
        <input type="text" class="extra2" name="extra2" id="extra2" readonly>
        <label for="extra2" class="extra2label" id="extra2label">Chemie:</label>
        <input type="text" class="extra3" name="extra3" id="extra3" readonly>
        <label for="extra3" class="extra3label" id="extra3label">Darstellendes Spiel:</label>
        <input type="text" class="extra4" name="extra4" id="extra4" readonly>
        <label for="extra4" class="extra4label" id="extra4label">Deutsch:</label>
        <input type="text" class="extra5" name="extra5" id="extra5" readonly>
        <label for="extra5" class="extra5label" id="extra5label">Englisch:</label>
        <input type="text" class="extra6" name="extra" id="extra6" readonly>
        <label for="extra6" class="extra6label" id="extra6label">Erdkunde:</label>
        <input type="text" class="extra7" name="extra7" id="extra7" readonly>
        <label for="extra7" class="extra7label" id="extra7label">Französisch:</label>
        <input type="text" class="extra8" name="extra8" id="extra8" readonly>
        <label for="extra8" class="extra8label" id="extra8label">Geschichte:</label>
        <input type="text" class="extra9" name="extra9" id="extra9" readonly>
        <label for="extra9" class="extra9label" id="extra9label">Informatik:</label>
        <input type="text" class="extra10" name="extra10" id="extra10" readonly>
        <label for="extra10" class="extra10label" id="extra10label">Kunst:</label>
        <input type="text" class="extra11" name="extra11" id="extra11" readonly>
        <label for="extra11" class="extra11label" id="extra11label">Latein:</label>
        <input type="text" class="extra12" name="extra12" id="extra12" readonly>
        <label for="extra12" class="extra12label" id="extra12label">Mathematik:</label>
        <input type="text" class="extra13" name="extra13" id="extra13" readonly>
        <label for="extra13" class="extra13label" id="extra13label">Musik:</label>
        <input type="text" class="extra14" name="extra14" id="extra14" readonly>
        <label for="extra14" class="extra14label" id="extra14label">Physik:</label>
        <input type="text" class="extra15" name="extra15" id="extra15" readonly>
        <label for="extra15" class="extra15label" id="extra15label">Politik Wirtschaft:</label>
        <input type="text" class="extra18" name="extra18" id="extra16" readonly>
        <label for="extra18" class="extra18label" id="extra16label">Religion:</label>
        <input type="text" class="extra16" name="extra16" id="extra17" readonly>
        <label for="extra16" class="extra16label" id="extra17label">Spanisch:</label>
        <input type="text" class="extra17" name="extra17" id="extra18" readonly>
        <label for="extra17" class="extra17label" id="extra18label">Werte und Normen:</label>

        <br>
        <script>
            look_for_extra()
        </script>
    </div>
    <script>
        function set_stundenlabel(params) {
            document.getElementById("stundenlabel").innerText = "Durchschnittliche Wochenstunden: " + parseFloat(sessionStorage.getItem("stundenanzahl_gesamt") / 4).toFixed(2)
        }
    </script>
</body>

</html>
