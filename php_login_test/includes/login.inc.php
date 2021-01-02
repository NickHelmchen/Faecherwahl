<?php

if (isset($_POST["submit"])) {
    
    $username = $_POST["Uid"];
    $pwd = $_POST["pwd"];

    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    Uid($conn, $username);
    loginUser($conn, $username, $pwd);
}
else {
    echo "fuck of!!";
    exit();
}