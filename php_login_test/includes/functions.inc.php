<?php

function Uid($conn, $username) {
    $sql = "SELECT * FROM users WHERE usersUid = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../index.php?error=youfuckedup");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    }
    else {
        $result = false;
        return $result;
    }

    mysqli_stmt_close($stmt);
}

function loginUser($conn, $username, $pwd) {
    $uid = Uid($conn, $username);

    if ($uid === false) {
        header("location: ../index.php/?error=wronglogin");
        exit();
    }

    $pwdcheck = $uid["usersPwd"];
    if ($pwd == $pwdcheck) {
        session_start();
        $_SESSION["userid"] = $uid["usersId"];
        $_SESSION["userUid"] = $uid["usersUid"];
        $_SESSION["userName"] = $uid["usersName"];
        header("location: ../../info.html");
    }
    else if ($pwd != $pwdcheck){
        header("location: ../index.php/?error=wronglogin");
        exit();
    }
}