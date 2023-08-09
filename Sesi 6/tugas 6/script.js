// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Fungsi untuk mengubah warna teks berdasarkan kondisi
function changeTextColor(elementId) {
  const textElement = document.getElementById(elementId);
  const currentColor = window.getComputedStyle(textElement).getPropertyValue("color");
  const newColor = getRandomColor();

  // Jika warna saat ini sama dengan warna baru, cari warna baru lagi
  if (currentColor === newColor) {
    return changeTextColor(elementId);
  }

  textElement.style.color = newColor;
}

// Jalankan fungsi changeTextColor() setiap 3 detik untuk masing-masing teks
setInterval(() => changeTextColor("text1"), 1000);
setInterval(() => changeTextColor("text2"), 1000);
setInterval(() => changeTextColor("text3"), 1000);