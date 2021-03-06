<?php
    include_once 'header.php'
?>
<?php
    if ($_SESSION["userclass"] == 1 || $_SESSION["userclass"] == 2) {
    }
    else { 
        header("location: ../nichtvorhanden.php");
    }
?>
    <div class="bgimg">
            <?php
                 echo("<h1 class='welcometext'>Hallo " . $_SESSION["userName"] . "</h1>");
            ?>
        <section class="container-admin">
            <form class="newuserform" action='signup.php' method='POST'>
                <button class='newuser' type='submit'>Nutzer hinzufügen</button>
            </form>
            <form class="resetpwdform" action='passwortreset.php' method='POST'>
                <button class='resetpwd' type='submit'>Passwörter zurücksetzen</button>
            </form>
            <form class="deleteuserform" action='deleteuser.php' method='POST'>
                <button class='deleteuser' type='submit'>Benutzer löschen</button>
            </form>
            <form class="tableadminviewform" action="view.php" method="POST">
                <button class="tableadminview" type="submit">Wahl ansehen</button>
            </form>
            <form class="logoutadminform" action='includes/logout.inc.php' method='POST'>
                <button class='logoutadmin' type='submit'>logout</button>
            </form>
        </section>
    </div>
<?php
    include_once 'footer.php'
?>