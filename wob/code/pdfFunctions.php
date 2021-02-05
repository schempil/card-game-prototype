<?

// Funktionen für die PDF-Erstellung

function hitpoint_offset($hitpoints){
    switch (strlen($hitpoints))
    {case 1: return 10; break;
        case 2: return  5; break;
        default: return 0;};
}

function printMaxText(&$fpdf,$input_text,$x_pos,$y_pos,$max_width,$max_size,$setoffset){
    $current_size = 8;
    $fpdf->SetFontSize($current_size);
    while ($fpdf->GetStringWidth($input_text) <= $max_width){
        $current_size++;
        $fpdf->SetFontSize($current_size);
    }
    $fpdf->SetFontSize(min($current_size-1,$max_size));

    // Calculate Offset if required
    if ($setoffset == 1)
    {
        $x_offset = (int)(($max_width - $fpdf->GetStringWidth($input_text))/2);
    }
    $fpdf->Text($x_pos + $x_offset,$y_pos,$input_text);
}
?>