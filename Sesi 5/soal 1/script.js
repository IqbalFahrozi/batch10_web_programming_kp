// Mengambil referensi ke tombol menggunakan ID
const tombol = document.getElementById('tombol');

// Menambahkan event listener untuk menangkap klik pada tombol
tombol.addEventListener('click', function() {
    // Cek apakah teks tombol saat ini adalah "klik aku"
    if (tombol.innerHTML === 'Klik Aku') {
        // Jika ya, maka ganti teksnya menjadi "hallo yal"
        tombol.innerHTML = 'Hallo Yal';
    } else {
        // Jika tidak, maka kembalikan teksnya menjadi "klik aku"
        tombol.innerHTML = 'Klik Aku';
    }
});
