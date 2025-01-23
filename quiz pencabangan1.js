function tentukanKategoriNilai(nilai) {
    if (nilai >= 85 && nilai <= 100) {
      return "A";
    } else if (nilai >= 70 && nilai <= 84) {
      return "B";
    } else if (nilai >= 50 && nilai <= 69) {
      return "C";
    } else if (nilai >= 30 && nilai <= 49) {
      return "D";
    } else {
      return "E";
    }
  }
  

  let nilaiSiswa = 82;
  let kategori = tentukanKategoriNilai(nilaiSiswa);
  console.log("Nilai siswa:", nilaiSiswa);
  console.log("Kategori nilai:", kategori);