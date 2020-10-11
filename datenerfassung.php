<?php
    if ( empty ( $_GET['name']) == TRUE )
    {
        echo 
        '
            <div class="bgimg">
                <form action="datenerfassung.php" method="get">
                    <input class="inputname" type="text" id="name" name="name" autocomplete="off" placeholder="Name">
                    <input class="inputlastname" type="text" id="lasname" name="lastname" autocomplete="off" placeholder="Nachname">
                    <input class="buttonstart" type="submit" value="Start">
                </form>
            </div>
        ';
    }
    else
    {
     echo "Name: ". $_GET['name'];
    }
?>
