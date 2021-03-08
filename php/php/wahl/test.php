<?php
function change(){
    echo 'console.log(\'hi\')
    console.log(\'zweiter out\')';
}
?>
<html>
<body onload="<?php change() ?>">
<form action="test.php" method="post">
    <input type="radio" method="post" name="pfach1" id="pfach1.1" value="Mathe" onclick="<?php $_SESSION['error'] = false; ?>">
    <label for="pfach1.1" title="Kernfach, Bereich C" id="pfach1.1.label">Mathe</label>
    <br>
    <br>
    <input type="radio" method="post" name="pfach1" id="pfach1.2" value="Chemie" onclick="">
    <label for="pfach1.2" title="kein Kernfach, Bereich C" id="pfach1.2.label">Chemie</label>
    <br>
    <br>
    <?php
        if (isset($_POST['error'])) {
            if (isset($_POST['pfach1'])) {
                echo $_POST['pfach1'];
            }
        } 
    ?>
    </form>
</body>
</html>