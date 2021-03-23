<?php
    include_once 'header.php';
    include_once 'includes/dbh.inc.php';
    include_once 'includes/functions.inc.php';
?>
<?php
    if (!isset($_SESSION["userid"])) {
        header("location: ../index.php?error=donttryme");
    }
    if ($_SESSION["userclass"] == 1 || $_SESSION["userclass"] == 2) {

    }
    else {
        header("location: ../index.php?error=donttryme");
    }
?>
    <style>
        table {
            border-collapse: collapse;
            border-color: black;
            width: 100%;
            text-align: center;
        }
        th {
            background-color: lightblue;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #a2a2a2;
        }
        tr:nth-child(odd) {
            background-color: #f2f2f2;
        }
    </style>
    <div class="bgimg">
    
    <div class="container-view">
            <?php
                 echo("<h1 class='welcometext'>Hallo " . $_SESSION["userName"] . "</h1>");
            ?>
        <form class="adminviewform" action="admin.php" method="POST">
            <button class="adminviewbutton" type="submit">Adminpanel</button>
        </form>
        <form class="logoutviewform" action='includes/logout.inc.php' method='POST'>
            <button class='logoutview' type='submit'>logout</button>
        </form>
        <form class="viewallform" action="view.php" method="POST">
            <button class="viewall" type="submit">Alle Wahldaten anzeigen</button>
        </form>
        <form class="viewspecialform" action="viewspecial.php" method="POST">
            <input class="viewspecialinput" type="text" name="Name" placeholder="Name des Schülers" autocomplete="off" required>
            <button class="viwspecialbutton" type="submit">Schüler anzeigen</button>
        </form>
        <?php
        echo $datum," - ",$uhrzeit," Uhr";
        ?>
        <table border="1px" class="tableview">
            <tr>
                <th>Name</th>
                <th>Pfach 1</th>
                <th>Pfach 2</th>
                <th>Pfach 3</th>
                <th>Pfach 4</th>
                <th>Pfach 5</th>
                <th>Mathe</th>
                <th>Chemie</th>
                <th>Physik</th>
                <th>Biologie</th>
                <th>Deutsch</th>
                <th>Englisch</th>          
                <th>Französisch</th>
                <th>Spanisch</th>
                <th>Latein</th>
                <th>Musik</th>
                <th>Kunst</th>
                <th>Darstellendes Spiel</th>
                <th>Informatik</th>
                <th>Geschichte</th>
                <th>Politik Wirtschaft</th>
                <th>Religion</th>
                <th>Werte und Normen</th>
                <th>Erdkunde</th>
            </tr>
            <?php
                $result = viewall($conn);

                if (mysqli_num_rows($result) > 0) {
                    while ($data = mysqli_fetch_assoc($result)) {
                        echo "<tr>";
                        echo "<td>" . $data["usersName"] . "</td>";
                        echo "<td>";
                            if ($data["subP1"] == 1) {
                                echo "Mathe";
                            }
                            if ($data["subP1"] == 2) {
                                echo "Chemie";
                            }
                            if ($data["subP1"] == 3) {
                                echo "Englisch";
                            }
                            if ($data["subP1"] == 4) {
                                echo "Physik";
                            }
                            if ($data["subP1"] == 5) {
                                echo "Biologie";
                            }
                            if ($data["subP1"] == 6) {
                                echo "Französisch";
                            }
                            if ($data["subP1"] == 7) {
                                echo "Latein";
                            }
                            if ($data["subP1"] == 8) {
                                echo "Musik";
                            }
                            if ($data["subP1"] == 9) {
                                echo "Informatik";
                            }
                            if ($data["subP1"] == 10) {
                                echo "Kunst";
                            }
                            if ($data["subP1"] == 11) {
                                echo "Spanisch";
                            }
                            if ($data["subP1"] == 12) {
                                echo "Deutsch";
                            }
                            if ($data["subP1"] == 13) {
                                echo "Geschichte";
                            }
                        echo "</td>";
                        echo "<td>";
                            if ($data["subP2"] == 1) {
                                echo "Mathe";
                            }
                            if ($data["subP2"] == 2) {
                                echo "Chemie";
                            }
                            if ($data["subP2"] == 3) {
                                echo "Englisch";
                            }
                            if ($data["subP2"] == 4) {
                                echo "Physik";
                            }
                            if ($data["subP2"] == 5) {
                                echo "Biologie";
                            }
                            if ($data["subP2"] == 6) {
                                echo "Französisch";
                            }
                            if ($data["subP2"] == 7) {
                                echo "Latein";
                            }
                            if ($data["subP2"] == 8) {
                                echo "Musik";
                            }
                            if ($data["subP2"] == 9) {
                                echo "Informatik";
                            }
                            if ($data["subP2"] == 10) {
                                echo "Kunst";
                            }
                            if ($data["subP2"] == 11) {
                                echo "Spanisch";
                            }
                            if ($data["subP2"] == 12) {
                                echo "Deutsch";
                            }
                        echo "</td>";
                        echo "<td>";
                            if ($data["subP3"] == 1) {
                                echo "Mathe";
                            }
                            if ($data["subP3"] == 2) {
                                echo "Chemie";
                            }
                            if ($data["subP3"] == 3) {
                                echo "Englisch";
                            }
                            if ($data["subP3"] == 4) {
                                echo "Physik";
                            }
                            if ($data["subP3"] == 5) {
                                echo "Biologie";
                            }
                            if ($data["subP3"] == 6) {
                                echo "Französisch";
                            }
                            if ($data["subP3"] == 7) {
                                echo "Latein";
                            }
                            if ($data["subP3"] == 8) {
                                echo "Musik";
                            }
                            if ($data["subP3"] == 9) {
                                echo "Informatik";
                            }
                            if ($data["subP3"] == 10) {
                                echo "Kunst";
                            }
                            if ($data["subP3"] == 11) {
                                echo "Spanisch";
                            }
                            if ($data["subP3"] == 12) {
                                echo "Deutsch";
                            }
                            if ($data["subP3"] == 13) {
                                echo "Geschichte";
                            }
                            if ($data["subP3"] == 14) {
                                echo "Politik Wirtschaft";
                            }
                        echo "</td>";
                        echo "<td>";
                            if ($data["subP4"] == 1) {
                                echo "Mathe";
                            }
                            if ($data["subP4"] == 2) {
                                echo "Chemie";
                            }
                            if ($data["subP4"] == 3) {
                                echo "Englisch";
                            }
                            if ($data["subP4"] == 4) {
                                echo "Physik";
                            }
                            if ($data["subP4"] == 5) {
                                echo "Biologie";
                            }
                            if ($data["subP4"] == 6) {
                                echo "Französisch";
                            }
                            if ($data["subP4"] == 7) {
                                echo "Latein";
                            }
                            if ($data["subP4"] == 8) {
                                echo "Musik";
                            }
                            if ($data["subP4"] == 9) {
                                echo "Informatik";
                            }
                            if ($data["subP4"] == 10) {
                                echo "Kunst";
                            }
                            if ($data["subP4"] == 11) {
                                echo "Spanisch";
                            }
                            if ($data["subP4"] == 12) {
                                echo "Deutsch";
                            }
                            if ($data["subP4"] == 13) {
                                echo "Geschichte";
                            }
                            if ($data["subP4"] == 14) {
                                echo "Politik Wirtschaft";
                            }
                            if ($data["subP4"] == 15) {
                                echo "Religion";
                            }
                            if ($data["subP4"] == 16) {
                                echo "Erdkunde";
                            }
                        echo "</td>";
                        echo "<td>";
                            if ($data["subP5"] == 1) {
                                echo "Mathe";
                            }
                            if ($data["subP5"] == 2) {
                                echo "Chemie";
                            }
                            if ($data["subP5"] == 3) {
                                echo "Englisch";
                            }
                            if ($data["subP5"] == 4) {
                                echo "Physik";
                            }
                            if ($data["subP5"] == 5) {
                                echo "Biologie";
                            }
                            if ($data["subP5"] == 6) {
                                echo "Französisch";
                            }
                            if ($data["subP5"] == 7) {
                                echo "Latein";
                            }
                            if ($data["subP5"] == 8) {
                                echo "Musik";
                            }
                            if ($data["subP5"] == 9) {
                                echo "Informatik";
                            }
                            if ($data["subP5"] == 10) {
                                echo "Kunst";
                            }
                            if ($data["subP5"] == 11) {
                                echo "Spanisch";
                            }
                            if ($data["subP5"] == 12) {
                                echo "Deutsch";
                            }
                            if ($data["subP5"] == 13) {
                                echo "Geschichte";
                            }
                            if ($data["subP5"] == 14) {
                                echo "Politik Wirtschaft";
                            }
                            if ($data["subP5"] == 15) {
                                echo "Religion";
                            }
                            if ($data["subP5"] == 16) {
                                echo "Erdkunde";
                            }
                            if ($data["subP5"] == 17) {
                                echo "Sport";
                            }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subMathe"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 1) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subMathe"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subChemie"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 2) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subChemie"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subPhysik"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 4) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subPhysik"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subBiologie"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 5) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subBiologie"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subDeutsch"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 12) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subDeutsch"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subEnglisch"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 3) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subEnglisch"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subFranzoesisch"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 6) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subFranzoesisch"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subSpanisch"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 11) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subSpanisch"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subLatein"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 7) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subLatein"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subMusik"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 8) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subMusik"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subKunst"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 10) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subKunst"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subDS"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 17) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subDS"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subInformatik"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 9) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subInformatik"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subGeschichte"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 13) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subGeschichte"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subPoWi"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 14) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subPoWi"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subReligion"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 15) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subReligion"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subWN"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 15) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subWN"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>";
                            echo "<td>";
                                if ($data["subErdkunde"] == 1) {
                                    echo "gewählt";
                                }
                                if ($data["subFuer12"] == 16) {
                                    echo " / In 12 erteilen";
                                }
                                if ($data["subErdkunde"] == null) {
                                    echo "---/---";
                                }
                            echo "</td>"; 
                            echo "</tr>";    
                    }    
                }
                else {
                    echo "<tr>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "<td>";
                    echo "kein Resultat";
                    echo "</dt>";
                    echo "</tr>";
                }
            ?>
        </table>
    </div>
    </div>
<?php
    include_once 'footer.php'
?>