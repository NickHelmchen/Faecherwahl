<?php
    include_once 'header.php';
?>

<body class="bgimg">
<h1 class="signup-info">Benutzer hinzufügen</h1>
    <div class="container-signupform">
        <form class="signup-input, container-signup" action="includes/signup.inc.php" method="POST">
            <input type="text" name="Name" placeholder="Name" class="signup-name" autocomplete="off" required>
            <input type="text" name="Uid" placeholder="Benutzername" class="signup-user" autocomplete="off" required>
            <input type="text" name="class" placeholder="Klasse" class="signup-class" autocomplete="off">
            <input type="password" name="Pwd" placeholder="Passwort" class="signup-pwd" autocomplete="off" required>
            <input type="password" name="PwdRepeat" placeholder="Passwort wiederholen" class="signup-pwdr" autocomplete="off" required>
            <button type="submit" class="signup-button">erstellen</button>
        </form>
        <form class="signup-back" action="./admin.php" method="post">
            <button type="submit" class="signup-back-button">zurück</button>
        </form>
    </div>
</body>

<?php
    include_once 'footer.php';
?>