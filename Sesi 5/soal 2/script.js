// Mengambil referensi ke tombol plus dan minus, serta elemen span untuk menampilkan nilai
const tombolMinus = document.getElementById('tombolMinus');
const tombolPlus = document.getElementById('tombolPlus');
const nilaiElement = document.getElementById('nilai');

// Inisialisasi nilai awal
let nilai = 0;

// Tambahkan event listener untuk tombol minus
tombolMinus.addEventListener('click', function() {
    // Kurangi nilai dan update tampilan
    // jika ingin berhenti di 0 pake kondisi if (nilai > 0)
    nilai--;
    updateNilai();
});

// Tambahkan event listener untuk tombol plus
tombolPlus.addEventListener('click', function() {
    // Tambah nilai dan update tampilan
    nilai++;
    updateNilai();
});

// Fungsi untuk memperbarui nilai yang ditampilkan pada elemen span
function updateNilai() {
    nilaiElement.textContent = nilai;
}
