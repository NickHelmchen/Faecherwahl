<?php
session_start();
if ($_GET["tzbky"] == 49173) {                      
    $_SESSION["ident"] = "secretkey";
    header("location: ../secret.php");
}
else {
    header("location: ../index.php?error=shit!");
}
