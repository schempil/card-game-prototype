<?

include 'pdfFunctions.php';
// Variablen beziehen

$m = $_POST["txt_female"];
$j = $_POST["txt_male"];
//$m = 20;
//$j = 20;

$s = $m + $j;

$lang = $_POST["lang"];
//$lang = 1;

//$bottle = 1;
$bottle = 2.25 - (0.25 * $_POST["radio_bottle"]);



// Berechnungen durchf�hren -- Adventure Edition --

$zb_geg0 = ceil(0.5 * $s);
$hp_geg0 = ceil($bottle*0.75 * $s);


$zb1_geg1_j = ceil(0.15 * $j);
$zb1_geg1_m = ceil(0.15 * $m);
$zb2_geg1   = ceil(0.1 * $s);

$hp_geg1_m = ceil ($bottle*(0.25 * $s)*2 + ceil(0.1*$s) + max(2,2*ceil(0.15*$m)));
$hp_geg1_j = ceil ($bottle*(0.25 * $s)*2 + ceil(0.1*$s) + max(2,2*ceil(0.15*$j)));


$zb1_geg21 = ceil(0.1 * $s);
$zb2_geg21 = ceil(0.05 * $s);
$hp_geg21 = ceil($bottle*(3*ceil(0.3*$s - ceil(0.1 * $s) - ceil(0.05 * $s)) + ceil(0.1 * $s)*4 + ceil(0.05 * $s)*5));

$zb1_geg22 = ceil(0.3 * $s);
$zb2_geg22 = floor(0.5 * $s);
$hp_geg22 = ceil($bottle*0.5 * $s);

$zb1_geg23 = max(4,ceil(0.3 * $s));
$zb2_geg23 = ceil(0.03 * $s);
$hp_geg23 = ceil($bottle*(9*ceil(0.03 * $s)+ ($zb1_geg23 - 4*ceil(0.03 * $s))*($j/$s*3 + $m/$s*1.5)*0.5));

$hp_geg3 = ceil($bottle*($m*2/5*2 + $j*2/5*3.5));

$zb1_geg4 = ceil(0.8 * $s);
$zb2_geg4 = ceil(0.04 * $s);
$hp_geg4 = ceil($bottle*0.9*(3*$m+5*$j));



// Strings in allen Sprachen

$orcnames = array("Urgr", "Schesch", "Orl", "Zorzat", "Iggy", "Zerzorg", "Ernarg",
    "Ozhe", "Zecho", "Azkrer", "Ezurg", "Zegl", "Gnach", "Sozz",
    "Amm", "Avukh", "Ochos", "Amm", "Unek", "Nurgh", "Ukrugg",
    "Grakul", "Ogh", "Mukh", "Amorg", "Kach", "Rugar");


$nameaddons_de = array(	" der Schreckliche", " der Dumme", " der Zornige", " der Brutale",
    " der Boese", " der Starke", " der Launische", " der Erbarmungslose",
    " der Teuflische", " der Unbarmherzige", " der Witwenmacher",
    " der Besessene", " der Wahnsinnige", " der Gierige", " der Wilde",
    " der Gnadenlose", " der Barbarische");


$nameaddons_en = array(	" the tremendous", " the evil", " the cruel", " the hateful", " the dumb",
    " the wrathful", " the  merciless", " the brutal", " the bestial", " the vigorous",
    " the powerful", " the cranky", " the dispiteous", " the diabolic", " the demonical",
    " the ruthless", " the widow maker", " the frenzied",  " the insane", " the lunatic",
    " the maniacal", " the avaricious", " the voracious", " the barbarous");

$geg0_name	= array("Die 0-Promille Grenze","DUI River");
$warrior	= array("K�mpfer:","Warriors:");

shuffle($orcnames);
shuffle($nameaddons_de);
shuffle($nameaddons_en);





$txt_zb_geg0	= array("� Mindestens " . $zb_geg0 . " mit Level " . floor(2 * $bottle), "� At least " . $zb_geg0 . " with level " . floor(2 * $bottle));

$txt_zb1_geg1_1 = array("� Mindestens " . $zb1_geg1_m . " Feen", "� At least " . $zb1_geg1_m . " fairies");
$txt_zb1_geg1_2 = array("� Mindestens " . $zb1_geg1_j . " Riesen", "� At least " . $zb1_geg1_j . " giants");
$txt_zb1_geg1_3 = array("� Mindestens " . $zb1_geg1_m . " Amazonen", "� At least " . $zb1_geg1_m . " amazons");
$txt_zb1_geg1_4 = array("� Mindestens " . $zb1_geg1_j . " Zwerge", "� At least " . $zb1_geg1_j . " dwarfs");

$txt_zb2_geg1	= array("� Mindestens " . $zb2_geg1 . " mit Level " . floor(3 * $bottle), "� At least " . $zb2_geg1 . " with level " . floor(3 * $bottle));

$txt_zb3_geg1_1	= array("� Feen bringen +2 Hitpoints", "� Fairies contribute +2 hitpoints");
$txt_zb3_geg1_2	= array("� Riesen bringen +2 Hitpoints", "� Giants contribute +2 hitpoints");
$txt_zb3_geg1_3	= array("� Amazonen bringen +2 Hitpoints", "� Amazons contribute +2 hitpoints");
$txt_zb3_geg1_4	= array("� Zwerge bringen +2 Hitpoints", "� Dwarfs contribute +2 hitpoints");

$txt_zb1_geg2_1	= array("� Mindestens " . $zb1_geg21 . " mit Level " . floor(4 * $bottle), "� At least " . $zb1_geg21 . " with level " . floor(4 * $bottle));
$txt_zb2_geg2_1	= array("� Mindestens " . $zb2_geg21 . " mit Level " . floor(5 * $bottle), "� At least " . $zb2_geg21 . " with level " . floor(5 * $bottle));

$txt_zb1_geg2_2	= array("� Mindestens " . $zb1_geg22 . " Mitspieler", "� At least " . $zb1_geg22 . " players");
$txt_zb2a_geg2_2	= array('� Die ' . $zb2_geg22 . " mit den h�chsten Leveln", "� The " . $zb2_geg22 . " players with the highest");
$txt_zb2b_geg2_2	= array(" d�rfen nicht mitspielen", " levels are forbidden to fight");

$txt_zb1_geg2_3	= array("� Genau " . $zb1_geg23 . " Mitspieler", "� Exact " . $zb1_geg23 . " players");
$txt_zb2_geg2_3	= array("� Alle Rassen mindestens " . $zb2_geg23 . " Mal vertreten", "� At least " . $zb1_geg21 . " fighters of every race");

$txt_zb1_geg3_1	= array("� Nur Amazonen und Zwerge erlaubt" , "� Only amazons and dwarfs allowed");
$txt_zb1_geg3_2	= array("� Nur Feen und Riesen erlaubt" , "� Only fairies and giants allowed");

$txt_zb2_geg3	= array("� " . $orcnames[5] . " besiegt", "� " . $orcnames[5] . " defeated");

$txt_zb1_geg4	= array("� Alle anderen Gegner sind besiegt", "� All other enemies are defeated");
$txt_zb2_geg4	= array("� Mindestens " . $zb1_geg4 . " Mitspieler", "� At least " . $zb1_geg4 . " players");
$txt_zb3_geg4	= array("� Mindestens " . $zb2_geg4 . " mit Level " . floor(7 * $bottle), "� At least " . $zb2_geg4 . " with level " . floor(7 * $bottle));



$nameaddons = array($nameaddons_de,$nameaddons_en);
$nameaddon_schwach = array(" der Schwache", " the weak");
$nameaddon_neo = array(" der fette Kater", " the big hangover");

// Schriften und Pfad zu fpdf definieren
define('FPDF_FONTPATH','fpdf/font/');
include("fpdf/fpdf.php");

// Create PDF
// Initialize Top Page
$pdf = new FPDF('L', 'pt', 'A4');
$pdf->AddPage();
$pdf->Image('gfx/back_top.jpg',0,0);

$pdf->SetFont('Arial','B',18);

// Set HitPoints

$pdf->Text(152 + hitpoint_offset($hp_geg21),410,$hp_geg21);	// Gegner 2_1
$pdf->Text(635 + hitpoint_offset($hp_geg22),348,$hp_geg22);	// Gegner 2_2
$pdf->Text(627 + hitpoint_offset($hp_geg23),480,$hp_geg23);	// Gegner 2_3
$pdf->Text(144 + hitpoint_offset($hp_geg3),21,$hp_geg3);	// Gegner 3_1
$pdf->Text(460 + hitpoint_offset($hp_geg3),25,$hp_geg3);	// Gegner 3_2
$pdf->Text(635 + hitpoint_offset($hp_geg4),165,$hp_geg4);	// Gegner 4

// Set Names

printMaxText($pdf,$orcnames[4] . $nameaddons[$lang][4],35,413,107,10,1);	// 1. Gegnerreihe 1. Gegner
printMaxText($pdf,$orcnames[5] . $nameaddon_schwach[$lang],523,352,105,10,1);	// 1. Gegnerreihe 2. Gegner
printMaxText($pdf,$orcnames[6] . $nameaddons[$lang][5],511,483,105,10,1);	// 1. Gegnerreihe 3. Gegner
printMaxText($pdf,$orcnames[7] . $nameaddons[$lang][6],26,21,109,10,1);	// 1. Gegnerreihe 4. Gegner
printMaxText($pdf,$orcnames[8] . $nameaddons[$lang][7],341,24,110,10,1);	// 1. Gegnerreihe 4. Gegner
printMaxText($pdf,"Neo" . $nameaddon_neo[$lang],512,164,115,10,1);	// 1. Gegnerreihe 4. Gegner

// Set special Requirements
$pdf->SetFont('Arial','',18);
printMaxText($pdf,$txt_zb1_geg2_1[$lang],16,435,167,8,0);		// Gegner 2_1
printMaxText($pdf,$txt_zb2_geg2_1[$lang],16,446,167,8,0);

printMaxText($pdf,$txt_zb1_geg2_2[$lang],504,380,161,8,0);		// Gegner 2_2
printMaxText($pdf,$txt_zb2a_geg2_2[$lang],504,391,161,8,0);
printMaxText($pdf,$txt_zb2b_geg2_2[$lang],507,402,161,8,0);

printMaxText($pdf,$txt_zb1_geg2_3[$lang],494,503,162,8,0);		// Gegner 2_3
printMaxText($pdf,$txt_zb2_geg2_3[$lang],494,514,162,8,0);

printMaxText($pdf,$txt_zb1_geg3_1[$lang],15,41,155,8,0);		// Gegner 3_1
printMaxText($pdf,$txt_zb2_geg3[$lang],15,52,105,8,0);

printMaxText($pdf,$txt_zb1_geg3_2[$lang],317,48,171,8,0);		// Gegner 3_2
printMaxText($pdf,$txt_zb2_geg3[$lang],317,59,171,8,0);

printMaxText($pdf,$txt_zb1_geg4[$lang],492,183,173,8,0);		// Gegner 4
printMaxText($pdf,$txt_zb2_geg4[$lang],492,194,173,8,0);
printMaxText($pdf,$txt_zb3_geg4[$lang],492,205,173,8,0);


// Initialize Bottom Page
$pdf->AddPage();
$pdf->Image('gfx/back_bottom4.jpg',0,0);

// Set HitPoints
$pdf->SetFont('Arial','B',18);

$pdf->Text(587 + hitpoint_offset($hp_geg0)  ,514,$hp_geg0);		// 0-Promille-Grenze
$pdf->Text(173 + hitpoint_offset($hp_geg1_m),222,$hp_geg1_m);	// 1. Gegnerreihe 1. Gegner
$pdf->Text(408 + hitpoint_offset($hp_geg1_j),297,$hp_geg1_j);	// 1. Gegnerreihe 2. Gegner
$pdf->Text(521 + hitpoint_offset($hp_geg1_m),210,$hp_geg1_m);	// 1. Gegnerreihe 3. Gegner
$pdf->Text(692 + hitpoint_offset($hp_geg1_j),200,$hp_geg1_j);	// 1. Gegnerreihe 4. Gegner

// Set Names

printMaxText($pdf,$geg0_name[$lang],485,511,95,10,1);						// 0-Promille-Grenze
printMaxText($pdf,$orcnames[0] . $nameaddons[$lang][0],40,222,125,10,1);	// 1. Gegnerreihe 1. Gegner
printMaxText($pdf,$orcnames[1] . $nameaddons[$lang][1],272,296,127,10,1);	// 1. Gegnerreihe 2. Gegner
printMaxText($pdf,$orcnames[2] . $nameaddons[$lang][2],403,208,110,10,1);	// 1. Gegnerreihe 3. Gegner
printMaxText($pdf,$orcnames[3] . $nameaddons[$lang][3],585,198,100,10,1);	// 1. Gegnerreihe 4. Gegner


// Set special Requirements
$pdf->SetFont('Arial','',18);
printMaxText($pdf,$txt_zb_geg0[$lang],468,525,120,8,0);			// 0-Promille-Grenze

printMaxText($pdf,$txt_zb1_geg1_1[$lang],16,246,190,8,0);		// Gegner 1_1
printMaxText($pdf,$txt_zb2_geg1[$lang],16,257,120,8,0);

printMaxText($pdf,$txt_zb1_geg1_2[$lang],227,317,210,8,0);		// Gegner 1_2
printMaxText($pdf,$txt_zb2_geg1[$lang],227,328,210,8,0);

printMaxText($pdf,$txt_zb1_geg1_3[$lang],371,228,180,8,0);		// Gegner 1_3
printMaxText($pdf,$txt_zb2_geg1[$lang],371,239,180,8,0);

printMaxText($pdf,$txt_zb1_geg1_4[$lang],567,216,155,8,0);		// Gegner 1_4
printMaxText($pdf,$txt_zb2_geg1[$lang],567,227,155,8,0);


$pdf->SetFont('Arial','I',18);									//Zusatz Gegnerreihe 1
printMaxText($pdf,$txt_zb3_geg1_1[$lang],16,267,120,8,0);
printMaxText($pdf,$txt_zb3_geg1_2[$lang],227,339,210,8,0);
printMaxText($pdf,$txt_zb3_geg1_3[$lang],371,250,180,8,0);
printMaxText($pdf,$txt_zb3_geg1_4[$lang],567,238,155,8,0);


$pdf->Output();

?>