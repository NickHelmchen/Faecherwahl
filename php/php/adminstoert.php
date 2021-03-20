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
  </head>
<?php
    if (!isset($_SESSION["userid"])) {
        header("location: ../index.php?error=donttryme");
    }
    if ($_SESSION["userid"] == 1 || $_SESSION["userid"] == 5 || $_SESSION["userid"] == 6 || $_SESSION["userid"] == 7 || $_SESSION["userid"] == 8 || $_SESSION["userid"] == 9) {

    }
    else {
        header("location: ../index.php?error=donttryme");
    }
?>
    <div class="stoer">
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