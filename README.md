# 🎨 makeGraph

**makeGraph** adalah website sederhana untuk membuat grafik lingkaran (pie chart) berdasarkan input label dan nilai yang dimasukkan satu per satu. Website ini dirancang agar data yang telah dimasukkan bersifat final dan tidak dapat diubah atau dihapus, cocok untuk polling, survei sederhana, atau visualisasi data cepat.

---

## 🚀 Fitur Utama

- ✅ Input label dan nilai **satu per satu**
- 🔒 Data yang sudah disimpan **tidak bisa diubah atau dihapus**
- 📊 Pie Chart otomatis dengan **Chart.js**
- 📝 Judul grafik opsional
- 🔁 Tombol reset untuk menghapus semua data
- 💡 Desain sederhana, cepat, dan tanpa login

---

## 🖥️ Tampilan Pengguna

1. **Form Input**:
   - Input label (teks)
   - Input nilai (angka)
   - Tombol "Simpan & Lanjutkan"

2. **Buat Grafik**:
   - Setelah selesai input, klik tombol "Buat Grafik"
   - Pie chart akan ditampilkan berdasarkan data yang sudah disimpan

3. **Reset**:
   - Menghapus semua input dan grafik
   - Kembali ke kondisi awal

---

## 📦 Teknologi yang Digunakan

- HTML & CSS (Tailwind CSS untuk styling opsional)
- JavaScript (Vanilla JS)
- [Chart.js](https://www.chartjs.org/) untuk visualisasi grafik

---

## 📁 Struktur File

makeGraph/
├── index.html # Halaman utama
├── style.css # Gaya (opsional jika pakai Tailwind)
├── script.js # Logika input dan pembuatan chart
└── README.md # Dokumentasi proyek ini



---

## 📌 Cara Menggunakan

1. Clone repositori ini atau unduh semua file
2. Buka `index.html` di browser modern
3. Masukkan label dan nilai satu per satu, klik "Simpan & Lanjutkan"
4. Setelah selesai, klik "Buat Grafik"
5. Lihat grafik lingkaran di bawahnya 🎉

---

## 🧪 Contoh Kasus

Misalnya pengguna ingin membuat grafik "Pengeluaran Harian":
1. Input: `Makan`, `40` → Simpan
2. Input: `Transportasi`, `30` → Simpan
3. Input: `Hiburan`, `30` → Simpan
4. Klik **Buat Grafik** → Pie chart akan muncul

---
