<?php
include_once 'header.php';

if (!isset($_SESSION["ident"])){
    header("location: index.php?error=sessionshit");
}
else if ($_SESSION["ident"] == "secretkey") {
    
}
else {
    header("location: index.php?error=donttryme");
}

?>

<div class="bgimg">
    <form action="includes/secret.inc.php" method="post">
        <input type="password" name="secret" id="secret">
        <button type="submit">weiter</button>
    </form>
</div>


<?php
include_once 'footer.php';
session_unset();
session_destroy();
?>