<?php
    include_once "header.php"
?>
<body class="bgimg">
    <h1 class="pwdreset-info">Passwörter zurücksetzen</h1>
    <div class="container-pwdresetform">
        <form class="pwdreset-input, container-pwdreset" action="includes/passwortreset.inc.php" method="post">
            <input type="text" name="Uid" placeholder="Benutzername" class="pwdreset-user" autocomplete="off" required>
            <input type="password" name="Pwd" placeholder="Passwort" class="pwdreset-pwd" autocomplete="off" required>
            <input type="password" name="PwdRepeat" placeholder="Passwort wiederholen" class="pwdreset-pwdr" autocomplete="off" required>
            <button type="submit" name="submit" class="pwdreset-button">zurücksetzen</button>
        </form>
        <form class="pwdreset-back" action="admin.php" method="post">
            <button class="pwdreset-back-button" type="submit">zurück</button>
        </form>
    </div>
</body>
<?php
    include_once "footer.php"
?>