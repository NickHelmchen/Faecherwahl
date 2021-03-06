<?php
    include_once 'header.php';
    include_once 'includes/dbh.inc.php';
    include_once 'includes/functions.inc.php';
?>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            text-align: center;
        }
        th {
            background-color: lightblue;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
    <?php
        if (!isset($_SESSION["userid"]) && ($_SESSION["userid"] == 4 || $_SESSION["userid"] == 5 || $_SESSION["userid"] == 11 || $_SESSION["userid"] == 12)) {
            header("location: ../index.php/?error=donttryme!");
        }
    ?>
    <div class="bgimg">
            <?php
                 echo("<h1 class='welcometext'>Hallo " . $_SESSION["userName"] . "</h1>");
            ?>
        <form class="logoutadminform" action='includes/logout.inc.php' method='POST'>
            <button class='logoutadmin' type='submit'>logout</button>
        </form>
        <form action="">
            <button type="submit">Alle Wahldaten anzeigen</button>
        </form>
        <form action="">
            <input type="text" name="name" placeholder="Name">
            <button type="submit">Schüler anzeigen</button>
        </form>
        <table align="center" border="1px">
            <tr>
                <th>Name</th>
                <th>Pfach 1</th>
                <th>Pfach 2</th>
                <th>Pfach 3</th>
                <th>Pfach 4</th>
                <th>Pfach 5</th>
            </tr>
            <?php
                $result = viewall($conn);

                while ($data = mysqli_fetch_assoc($result)) {
            ?>
                <tr>
                    <td><?php echo $data["usersName"] ?></td>
                    <td><?php if ($data["subP1"] == 1) {echo "Mathe";} ?></td>
                    <td><?php echo $data["subP2"] ?></td>
                    <td><?php echo $data["subP3"] ?></td>
                    <td><?php echo $data["subP4"] ?></td>
                    <td><?php echo $data["subP5"] ?></td>
                <tr>
            <?php
                }  
            ?>
        </table>
            
    </div>
<?php
    include_once 'footer.php';
?>