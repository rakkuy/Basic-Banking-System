Challenge Chapter 2

# Study Kasus:

Dalam studi kasus ini, kita akan membuat sebuah Basic Banking System sederhana menggunakan konsep Pemrograman Berorientasi Objek (OOP) dan mensimulasikan operasi transaksi yang asynchronous.

# Ketentuan:

1. Membuat repositori baru di GitHub dengan nama "Basic-Banking-System"
2. Salin file bank_account.js Challenge 1 ke direktori proyek di repositori baru
3. Membuat file JavaScript baru dengan nama banking_system.js
4. Implementasikan kelas BankAccount dengan metode deposit() dan withdraw()
5. Gunakan setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous
6. Commit dan push perubahan ke repositori GitHub

# Langkah-Langkah Pengerjaan:

1. Buatlah repositori baru di GitHub dengan nama Basic-Banking-System.
2. Salin file bank_account.js dari Challenge 1 ke direktori proyek di repositori baru tersebut. File ini akan berisi definisi kelas BankAccount yang akan digunakan dalam implementasi sistem perbankan.
3. Buatlah file JavaScript baru dengan nama banking_system.js. File ini akan menjadi pusat implementasi sistem perbankan menggunakan konsep OOP.
4. Implementasikan kelas BankAccount dengan minimal dua metode:
   • deposit(amount): Metode ini akan menerima jumlah uang yang akan disimpan ke dalam akun.
   • withdraw(amount): Metode ini akan menerima jumlah uang yang akan ditarik dari akun, asalkan saldo mencukupi.
5. Gunakan fungsi setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous. Misalnya, setelah melakukan deposit atau withdrawal, Anda dapat menunda eksekusi selama beberapa detik sebelum mengembalikan hasil operasi.
6. Lakukan commit dan push perubahan yang telah Anda buat ke repositori GitHub.

# Langkah – Langkah commit dan push:

1. Git init (Hanya sekali saat pertama membuat repositori)
   git init adalah perintah yang digunakan untuk membuat repository Git baru atau menginisialisasi repository Git pada direktori yang sudah ada. Ketika Anda menjalankan perintah git init dalam sebuah direktori, Git akan membuat direktori tersebut menjadi sebuah repository Git kosong yang dapat digunakan untuk melacak perubahan pada berkas-berkas dalam proyek Anda.

2. Git add nama_file
   git add adalah perintah dalam Git yang digunakan untuk menambahkan perubahan atau berkas-berkas ke dalam staging area. Staging area adalah tempat di mana Anda menyiapkan perubahan-perubahan yang ingin Anda commit ke dalam repository Git Anda. Dengan menggunakan git add, Anda memberi tahu Git bahwa Anda ingin melacak perubahan-perubahan tertentu dalam berkas-berkas tersebut dalam commit berikutnya.
   Ada beberapa cara untuk menggunakan git add:
   • Menambahkan satu berkas tertentu ke staging area:
   git add nama_file
   Ini akan menambahkan satu berkas tertentu ke staging area. Anda perlu mengganti nama_berkas dengan nama berkas yang ingin Anda tambahkan.
   • Menambahkan semua perubahan berkas ke staging area:
   git add .
   Titik (.) digunakan untuk menambahkan semua perubahan berkas yang ada dalam direktori saat ini ke staging area. Ini berguna jika Anda ingin menambahkan semua perubahan sekaligus.
   • Menambahkan semua perubahan berkas yang telah dimodifikasi dan dihapus ke staging area:
   git add -u
   Ini akan menambahkan semua perubahan berkas yang telah dimodifikasi (modified) dan dihapus (deleted) ke staging area. Perubahan yang belum dilacak (untracked) tidak akan dimasukkan
   • Menambahkan semua perubahan berkas, termasuk yang belum dilacak (untracked), ke staging area:
   git add -A
   Perintah ini akan menambahkan semua perubahan berkas, termasuk yang belum dilacak (untracked), ke staging area. Ini digunakan untuk memasukkan semua perubahan ke commit, bahkan jika berkas-berkas tersebut belum pernah dilacak sebelumnya.

3. Git commit -m “Ini adalah pesan komit Anda”
   git commit -m "Comment" adalah perintah Git yang digunakan untuk membuat sebuah commit dengan pesan komit (commit message) yang disertakan. Commit message digunakan untuk memberikan deskripsi singkat tentang perubahan yang Anda lakukan dalam commit tersebut. Pesan komit ini penting karena membantu Anda dan orang lain yang bekerja pada proyek untuk memahami tujuan dari perubahan yang Anda lakukan dalam commit tersebut.

4. Git branch -M main (Hanya sekali saat pertama membuat repositori)
   Perintah git branch -M main adalah perintah Git yang digunakan untuk mengubah nama branch saat ini menjadi main. Biasanya, ini digunakan dalam konteks migrasi dari istilah "master" yang sebelumnya digunakan dalam beberapa repository Git sebagai nama branch default menjadi "main" sebagai nama branch default yang lebih inklusif.
   Perintah ini memiliki dua komponen utama:
   • git branch
   Ini adalah perintah untuk mengelola branch dalam Git.
   • -M main
   Ini adalah opsi yang digunakan untuk mengganti nama branch saat ini menjadi "main". Dengan kata lain, perintah ini akan mengubah nama branch yang Anda berada di dalamnya saat ini menjadi "main".
   Setelah menjalankan perintah ini, branch yang sebelumnya digunakan akan berganti nama menjadi "main". Ini adalah tindakan yang biasanya diambil untuk mengikuti praktik yang lebih inklusif dalam penggunaan nama branch default dalam proyek-proyek Git. Namun, perlu diingat bahwa perubahan ini hanya mengubah nama branch dan tidak memengaruhi sejarah commit atau struktur proyek Anda.

5. Git push -u origin main
   Perintah git push -u origin main adalah perintah Git yang digunakan untuk mengirim perubahan dari branch lokal main ke branch main di remote repository dengan nama origin. Perintah ini juga mengaitkan branch lokal main dengan branch main di remote repository, sehingga branch lokal ini akan dilacak dan berhubungan erat dengan branch main di remote repository.
   Komponen-komponen dari perintah ini adalah sebagai berikut:
   • git push
   Ini adalah perintah untuk mengirim perubahan dari branch lokal ke branch di remote repository.
   • -u atau --set-upstream
   Opsi ini digunakan untuk mengaitkan branch lokal dengan branch di remote repository secara eksplisit. Ini membuat Git melacak hubungan antara branch lokal dan branch remote sehingga Anda dapat menggunakan perintah git pull atau git push tanpa harus menyebutkan branch remote setiap saat.
   • Origin
   Ini adalah nama remote repository. Biasanya, origin adalah nama remote repository default yang sudah diatur ketika Anda mengklon repository Git, tetapi Anda dapat menggantinya sesuai kebutuhan.
   • Main
   Ini adalah nama branch yang akan Anda push ke remote repository. Dalam contoh ini, Anda akan mengirim perubahan dari branch lokal main ke branch main di remote repository.
