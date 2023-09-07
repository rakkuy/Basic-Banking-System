// Deklarasi variabel saldo dengan nilai awal 0
let saldo = 0;

// Fungsi untuk menambahkan saldo menggunakan window.prompt()
function tambahSaldo() {
  const tambahan = parseFloat(
    prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );
  if (!isNaN(tambahan) && tambahan >= 0) {
    saldo += tambahan;
    document.getElementById("saldoDisplay").textContent = `Rp ${saldo}`;
    alert(`Saldo berhasil ditambahkan. Saldo saat ini: Rp ${saldo}`);
    return saldo;
  } else {
    alert("Masukkan jumlah saldo yang valid.");
  }
}

// Fungsi untuk mengurangi saldo menggunakan window.prompt()
function kurangiSaldo() {
  const pengurangan = parseFloat(
    prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );
  if (!isNaN(pengurangan) && pengurangan >= 0) {
    if (saldo >= pengurangan) {
      saldo -= pengurangan;
      document.getElementById("saldoDisplay").textContent = `Rp ${saldo}`;
      alert(`Saldo berhasil dikurangi. Saldo saat ini: Rp ${saldo}`);
      return saldo;
    } else {
      alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
    }
  } else {
    alert("Masukkan jumlah saldo yang valid.");
  }
}

// Menampilkan saldo awal saat halaman dimuat
alert(`Saldo awal: Rp ${saldo}`);
