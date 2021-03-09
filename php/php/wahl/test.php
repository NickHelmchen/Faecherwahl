<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body onload="">
<form action="test.php" method="post">
    <input type="radio" method="post" name="pfach1" id="pfach1.1" value="Mathe" onclick="">
    <label for="pfach1.1" title="Kernfach, Bereich C" id="pfach1.1.label">Mathe</label>
    <br>
    <br>
    <input type="radio" method="post" name="pfach1" id="pfach1.2" value="Chemie" onclick="">
    <label for="pfach1.2" title="kein Kernfach, Bereich C" id="pfach1.2.label">Chemie</label>
    <br>
    <br>
    <?php
    ?>
    </form>
    <script>
        <?php
        #test();
        ?>
    </script>
</body>
</html>