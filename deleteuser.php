<?php
    include_once 'header.php';
?>
    <div class="bgimg">
    <section class="container-deleteuserform">
    <h7 class="deleteuser-info">Wenn der Benutzer gelöscht wird werden auch seine Wahldaten gelöscht!</h7>
    <form action="includes/deletuser.inc.php" class="deleteinputform, deleteinput" method="post">
        <input type="text" name="Uid" placeholder="Benutzername" class="deleteuser-user" autocomplete="off">
        <input type="text" name="class" placeholder="Jahrgang" class="deleteuser-class" autocomplete="off">
        <input type="password" name="Pwd" placeholder="Admin-Passwort" class="deleteuser-apwd" autocomplete="off" required>
        <button type="submit" name="submit" class="deleteuser-button">löschen</button>
    </form>
    <form action="admin.php" class="deleteback" method="post">
        <button type="submit" class="deleteback-button">zurück</button>
    </form>
    </section>
    </div>
<?php
    include_once 'footer.php';
?>