// Membuat kelas RekeningBank
class BankAccount {
  constructor(nomorRekening, saldo) {
    this.nomorRekening = nomorRekening;
    this.saldo = saldo;
  }

  // Metode setor() untuk menambahkan dana ke rekening
  deposit(amount) {
    console.log(
      `Memulai setor sebesar ${amount} ke rekening ${this.nomorRekening}`
    );
    setTimeout(() => {
      this.saldo += amount;
      console.log(
        `Setor sebesar ${amount} berhasil. Saldo saat ini: ${this.saldo}`
      );
    }, 2000); // Menggunakan setTimeout() untuk mensimulasikan operasi asynchronous
  }

  // Metode tarik() untuk menarik dana dari rekening
  withdraw(amount) {
    console.log(
      `Memulai penarikan sebesar ${amount} dari rekening ${this.nomorRekening}`
    );
    setTimeout(() => {
      if (amount <= this.saldo) {
        this.saldo -= amount;
        console.log(
          `Penarikan sebesar ${amount} berhasil. Saldo saat ini: ${this.saldo}`
        );
      } else {
        console.log(
          `Penarikan sebesar ${amount} gagal. Saldo tidak mencukupi.`
        );
      }
    }, 2000); // Menggunakan setTimeout() untuk mensimulasikan operasi asynchronous
  }
}

// Membuat objek RekeningBank
const rekening1 = new BankAccount(12345, 1000);

// Melakukan setor dan tarik dengan operasi asynchronous
rekening1.deposit(500);
rekening1.withdraw(200);
rekening1.withdraw(1500);
