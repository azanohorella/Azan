function cekUsia() {
  const usia = document.getElementById("usia").value;
  const hasil = document.getElementById("hasil");

  if (usia >= 1 && usia <= 70) {
    hasil.textContent = "Anda masih anak-anak";
  } else if (usia >= 13 && usia <= 17) {
    hasil.textContent = "Anda remaja";
  } else if (usia >= 18 && usia <= 59) {
    hasil.textContent = "Anda dewasa";
  } else if (usia >= 60) {
    hasil.textContent = "Anda sudah lansia";
  } else {
    hasil.textContent = "Usia tidak valid";
  }
}