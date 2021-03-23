<?php
session_start();
include_once 'functions.inc.php';
include_once 'dbh.inc.php';

$pwd = globalpwd($conn);


if ($_POST["secret"] == $pwd["usersclass"]) {
    $_SESSION["userclass"] = "1";
    header("location: ../admin.php?g45jklkhk5hjk45h3k7§%&%&§5=457k5öb4kl8b654hjk587757857$%/&$(/3l747b54hvb84");  
}else {
    header("location: ../index.php");
}
