<?php
session_start();
?>
<html>
<body onload="">
<form action="test.php" method="post">
    <input type="radio" method="post" name="pfach1" id="pfach1.1" value="Mathe" onclick="this.form.submit()">
    <label for="pfach1.1" title="Kernfach, Bereich C" id="pfach1.1.label">Mathe</label>
    <br>
    <br>
    <input type="radio" method="post" name="pfach1" id="pfach1.2" value="Chemie" onclick="this.form.submit()">
    <label for="pfach1.2" title="kein Kernfach, Bereich C" id="pfach1.2.label">Chemie</label>
    <br>
    <br>
    <?php
        if (isset($_POST['pfach1'])) {
            $_SESSION['pfach1'] = $_POST['pfach1'];
            echo $_SESSION['pfach1'];
        }
    ?>
    </form>
</body>
</html>