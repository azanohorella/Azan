function calculateSalary() {
    const baseSalary = 7000000;
    const overtimeRate = 100000;
    const hoursWorked = prompt("Masukkan jumlah jam kerja Sarip dalam seminggu:");
  
    const overtimeHours = Math.max(0, hoursWorked - 40);
    const overtimePay = overtimeHours * overtimeRate;
    const totalSalary = baseSalary + overtimePay;
  
    console.log(`Total gaji Sarip adalah Rp. ${totalSalary}`);
  }
  
  calculateSalary();