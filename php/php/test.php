<?php

include_once 'header.php';

include_once 'includes/dbh.inc.php';
include_once 'includes/functions.php';

/*
$Id = 16;
$P1 = 1;
$P2 = 2;
$P3 = 3;
$P4 = 9;
$P5 = 14;
$subMathe = 0;
$subChemie = 0;
$subPhysik = 0;
$subBiologie = 0;
$subDeutsch = 1;
$subEnglisch = 0;
$subFranzoesisch = 0;
$subSpanisch = 0;
$subLatein = 0;
$subMusik = 0;
$subKunst = 1;
$subsubDS = 0;
$subInformatik = 0;
$subGeschichte = 1;
$subPoWi = 0;
$subReligion = 1;
$subWn = 0;
$subErdkunde = 0;
$subFuer12 = 13;
*/

$Id = 16;

echo 'test';


savePfach($conn, $Id);


echo '<br>';
echo 'works';

include_once 'footer.php';