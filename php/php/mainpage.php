<?php
    include_once 'header.php'
?>
    <div class="bgimg">
    <?php
        echo("<h1 class='welcometext'>Hallo " . $_SESSION["userName"] . "</h1>");
    ?>
    <section class="container-mainpage">
        <form class="saveform" action='includes/pfach.inc.php' method='POST'>
            <button class='save' type='submit' name='speichern'>speichern</button>
        </form>
        <form class="logoutmainform" action='includes/logout.inc.php' method='POST'>
            <button class='logoutmain' type='submit'>logout</button>
        </form>
    </section>
    </div>
<?php
    include_once 'footer.php'
?>