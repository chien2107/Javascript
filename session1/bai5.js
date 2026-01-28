let nameBook = prompt("Mời bạn nhập tên sách");
let years = prompt("Mời bạn nhập năm xuất bản của sách");
years = Number(years);
let newYears = +prompt("Mời bạn nhập năm hiện tại");
let yearsBook = newYears - Number(years);
console.log(`Sách : ${nameBook}`);
console.log(`Năm xuất bản : ${Number(years)}`);
console.log(`Tuổi của sách : ${yearsBook} năm`);