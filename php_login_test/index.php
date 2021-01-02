<?php
   include_once 'header.php'
?>
  <body class="bgimg">
    <form action="includes/login.inc.php" method="POST">
      <div class="grid-container-index">
        <h1 class="font hold">Fächerwahl für die Sekundarstufe II</h1>
        <input class="inputname indexname" type="text" id="Uid" name="Uid" autocomplete="off" placeholder="Benutzername" required>
        <input class="inputlastname indexlastname" type="password" id="pwd" name="pwd" autocomplete="off" placeholder="Passwort" required>
        <input class="buttonstart indexbutton" type="submit" value="Start" name="submit">
      </div>
    </form>
  </body>
<?php
  include_once 'footer.php'
?>