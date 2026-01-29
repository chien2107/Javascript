let nameBook = prompt("mời bạn nhập tên sách");
let tacGia = prompt("mời bạn nhập tên tác giả");
let years = +prompt("mời bạn nhập năm xuất bản");
const newYears = 2026;
console.log(`Tên sách : ${nameBook}`);
console.log(`Tên tác giả : ${tacGia}`);
console.log(`Năm xuất bản : ${years}`);
if(years === newYears){
    console.log("Đây là sách mới");
}else if(newYears - years <= 5){
    console.log("Đây là sách khá mới");
}else{
    console.log("Sách đã cũ");
}