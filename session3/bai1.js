let soLuotMuon = +prompt("Hôm nay có bao nhiêu lượt mượn sách?");
if (soLuotMuon <= 0 || isNaN(soLuotMuon)) {
    console.log("Số lượt mượn không hợp lệ!");
} else {
    for (let i = 1; i <= soLuotMuon; i++) {
        console.log(`--- Lượt mượn thứ ${i} ---`);
        let tenNguoiMuon = prompt("Nhập tên người mượn:");
        let tenSach = prompt("Nhập tên sách:");
        let soNgayMuon = +prompt("Nhập số ngày mượn (1 - 30):");
        if (soNgayMuon > 14) {
            console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
        } else if (soNgayMuon >= 1 && soNgayMuon <= 14) {
            console.log("Mượn thành công");
        } else {
            console.log("Số ngày mượn không hợp lệ");
        }
    }
    console.log("=== THỐNG KÊ CUỐI NGÀY ===");
    console.log("Tổng số lượt mượn: " + soLuotMuon);
}