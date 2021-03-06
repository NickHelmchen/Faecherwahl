<?php
function change(){
    echo 'console.log(\'hi\')
    console.log(\'zweiter out\')';
}
?>
<html>
<body onload="<?php change() ?>">
</body>
</html>