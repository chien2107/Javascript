let nameBook = prompt("Mời bạn nhập tên sách:");
let type = prompt("Mời bạn nhập trạng thái sách (có sẵn / đã mượn):").toLowerCase();
let years = +(prompt("Mời bạn nhập năm xuất bản của sách:"));
let newYears = 2026;
let namXuatBan = newYears - years;
if (type === "có sẵn" && namXuatBan <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
}else if (type === "đã mượn" && namXuatBan <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}else if (type === "đã mượn" && namXuatBan > 10) {
    console.log("Sách này đã mượn và khá cũ");
}else if (type === "có sẵn" && namXuatBan > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
}else {
    console.log("Thông tin nhập vào chưa hợp lệ");
}