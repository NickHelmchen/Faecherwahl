<?php

    $serverName = "sql7.freesqldatabase.com";
    $dBUsername = "sql7384660";
    $dBPassword = "BrG3k3hh2d";
    $dBName = "sql7384660";

    $conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

    if(!$conn) {
        die("Conection failed:". mysqli_connect_error());
    }