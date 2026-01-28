let nameBook = prompt("Mời bạn nhập tên sách:");
let soThuTu = prompt("Mời bạn nhập số thứ tự của sách trong thư viện:");
let sachBanDau = nameBook;
let newBook = nameBook.trim().toUpperCase();
console.log(`Tên sách gốc : ${sachBanDau}`);
console.log(`Mã sách sau chuẩn hóa : LIB-${newBook}-${soThuTu}`);