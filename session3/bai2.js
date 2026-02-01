let soLuotTra = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
if (soLuotTra <= 0 || isNaN(soLuotTra)) {
    console.log("Số lượt trả không hợp lệ!");
} else {
    let soLuotTraMuon = 0;
    for (let i = 1; i <= soLuotTra; i++) {
        console.log(`--- Lượt trả thứ ${i} ---`);
        let tenNguoiTra = prompt("Nhập tên người trả:");
        let tenSach = prompt("Nhập tên sách:");
        let soNgayMuon;
        do {
            soNgayMuon = +prompt("Nhập số ngày đã mượn (>= 1):");
        } while (soNgayMuon < 1 || isNaN(soNgayMuon));
        if (soNgayMuon <= 14) {
            console.log("Trả đúng hạn");
        } else if (soNgayMuon >= 15 && soNgayMuon <= 21) {
            console.log("Trả muộn nhẹ");
            console.log("Phạt nhắc nhở");
            soLuotTraMuon++;
        } else {
            console.log("Quá hạn nghiêm trọng");
            console.log("Cần ghi biên bản phạt");
            soLuotTraMuon++;
        }
    }
    console.log("=== THỐNG KÊ CUỐI NGÀY ===");
    console.log("Tổng số lượt trả sách: " + soLuotTra);
    console.log("Số lượt trả muộn (≥ 15 ngày): " + soLuotTraMuon);
}