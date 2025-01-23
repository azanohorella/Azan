function checkExamResult() {
    const examScore = prompt("Masukkan nilai ujian JavaScript Anda:");
    const score = parseInt(examScore);
  
    if (score > 75) {
      console.log("Selamat! Anda lulus.");
    } else {
      console.log("Mohon maaf, Anda belum lulus. Jangan menyerah!");
    }
  }
  
  checkExamResult();