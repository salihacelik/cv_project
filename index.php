<?php
if ($_SERVER['REMOTE_ADDR'] == 'KENDI_IP_ADRESIN') {
    echo "<div class='box'><h3>Gelen Mesajlar</h3><pre>";
    @readfile("mesajlar.txt");
    echo "</pre></div>";
}
?>
