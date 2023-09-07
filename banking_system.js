// Membuat kelas RekeningBank
class BankAccount {
  constructor(nomorRekening, saldo) {
    this.nomorRekening = nomorRekening;
    this.saldo = saldo;
  }

  // Metode setor() untuk menambahkan dana ke rekening
  setor(jumlah) {
    console.log(
      `Memulai setor sebesar ${jumlah} ke rekening ${this.nomorRekening}`
    );
    setTimeout(() => {
      this.saldo += jumlah;
      console.log(
        `Setor sebesar ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`
      );
    }, 2000); // Menggunakan setTimeout() untuk mensimulasikan operasi asynchronous
  }

  // Metode tarik() untuk menarik dana dari rekening
  tarik(jumlah) {
    console.log(
      `Memulai penarikan sebesar ${jumlah} dari rekening ${this.nomorRekening}`
    );
    setTimeout(() => {
      if (jumlah <= this.saldo) {
        this.saldo -= jumlah;
        console.log(
          `Penarikan sebesar ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`
        );
      } else {
        console.log(
          `Penarikan sebesar ${jumlah} gagal. Saldo tidak mencukupi.`
        );
      }
    }, 2000); // Menggunakan setTimeout() untuk mensimulasikan operasi asynchronous
  }
}

// Membuat objek RekeningBank
const rekening1 = new BankAccount(12345, 1000);

// Melakukan setor dan tarik dengan operasi asynchronous
rekening1.setor(500);
rekening1.tarik(200);
rekening1.tarik(1500);
