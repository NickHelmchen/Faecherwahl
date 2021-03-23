<?php
   include_once 'header.php'
?>
  <body class="bgimg">
    <div class='container-indexform'>
    <form class='login-indexform, container-index' action='includes/login.inc.php' method='POST'>
        <h1 class='indextext'>Fächerwahl für die Sekundarstufe II</h1>
        <input class='username' type='text' id='Uid' name='Uid' autocomplete='off' placeholder='Benutzername' required>
        <input class='password' type='password' id='pwd' name='pwd' autocomplete='off' placeholder='Passwort' required>
        <input class='indexbutton' type='submit' value='Start' name='submit'>
        <br>
    </form>
    <?php
      if (isset($_GET["error"])) {
        if ($_GET["error"] == "logout") {
          echo "<form class='message-indexform'>";
          echo "<h4 class='message-index'>Du wurdest abgemeldet.</h4>";
          echo "</form>";
        }
        if ($_GET["error"] == "sicherheit") {
          header("location: includes/passwort.inc.php?tzbky=49173");
        }
        else if ($_GET["error"] == "wronglogin") {
          echo "<form class='message-indexform'>";
          echo "<h4 class='message-index'>Falscher Benutzername oder Passwort.</h4>";
          echo "</form>";
        }
      }
    ?>
    </div>
  </body>
<?php
  include_once 'footer.php'
?> 