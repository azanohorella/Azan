function islamicMonth() {
    const islamicMonths = [
      "Muharram",
      "Safar",
      "Rabi'ul Awal",
      "Rabi'ul Akhir",
      "Jumadal Ula",
      "Jumadal Akhirah",
      "Rajab",
      "Sya'ban",
      "Ramadan",
      "Syawal",
      "Dzulqa'dah",
      "Dzulhijjah"
    ];
  
    const monthNumber = prompt("Masukkan nomor bulan (1-12):");
    const index = monthNumber - 1;
  
    if (index >= 0 && index < 12) {
      console.log(`Bulan ke-${monthNumber} adalah ${islamicMonths[index]}`);
    } else {
      console.log("Nomor bulan tidak valid. Silakan masukkan angka antara 1-12.");
    }
  }
  
  islamicMonth(1-12);