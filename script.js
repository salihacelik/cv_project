// Koyu Mod Butonu
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ?
        '🌞' : '🌙';
});


// Tarih ve Saat Gösterimi
function updateClock() {
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    document.getElementById('date').textContent = `Tarih: ${dateStr}`;
    document.getElementById('time').textContent = `Saat: ${timeStr}`;
}
setInterval(updateClock, 1000);
updateClock();

// Competence Arama Filtresi
const searchBox = document.getElementById('searchBox');
const listItems = document.querySelectorAll('#competenceList li');

searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    listItems.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
});


  // Form gönderildiğinde çalışacak
  document.getElementById("messageForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Sayfa yenilenmesini engelle
      var form = event.target;

      // AJAX ile formu gönder
      var formData = new FormData(form);

      // Mesajı kaydetmek için PHP'ye gönder
      fetch("m_kaydet.php", {
          method: "POST",
          body: formData
      })
      .then(response => {
          if (response.ok) {
              // Mesaj başarıyla gönderildiğinde sayfayı yenile
              form.reset();  // Formu temizle
              window.location.reload();  // Sayfayı yenile
          }
      })
      .catch(error => {
          console.error("Mesaj gönderilemedi: ", error);
      });
  });


