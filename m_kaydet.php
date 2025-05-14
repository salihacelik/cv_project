<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = htmlspecialchars($_POST["ad"]);
    $email = htmlspecialchars($_POST["email"]);
    $mesaj = htmlspecialchars($_POST["mesaj"]);
    $tarih = date("Y-m-d H:i:s");

    $satir = "[$tarih] $ad <$email>: $mesaj" . PHP_EOL;
    file_put_contents("mesajlar.txt", $satir, FILE_APPEND | LOCK_EX);
}
?>
