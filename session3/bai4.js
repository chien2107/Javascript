let tongSoSach = 0;
let soSachMat = 0;
let soSachHetHang = 0;
let soSachTonKhoNhieu = 0;
let soSachTonKhoBinhThuong = 0;
while (true) {
    let tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").toLowerCase();
    if (tiepTuc === "không") {
        break; 
    }
    if (tiepTuc !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    console.log("--- KIỂM KÊ SÁCH ---");
    let maSach;
    do {
        maSach = prompt("Nhập mã sách (không được để trống):");
    } while (!maSach);
    let tenSach = prompt("Nhập tên sách:");
    let soLuong;
    do {
        soLuong = +prompt("Nhập số lượng thực tế trong kho (>= 0):");
    } while (soLuong < 0 || isNaN(soLuong));
    let tinhTrang;
    do {
        tinhTrang = +prompt(
            "Nhập tình trạng sách:\n1 - Bình thường (có thể cho mượn)\n2 - Mất"
        );
    } while (tinhTrang !== 1 && tinhTrang !== 2);
    tongSoSach++;
    if (tinhTrang === 2) {
        console.log("Sách mất");
        soSachMat++;
    } else if (tinhTrang === 1 && soLuong === 0) {
        console.log("Sách hết (vẫn còn trong hệ thống)");
        soSachHetHang++;
    } else if (tinhTrang === 1 && soLuong >= 10) {
        console.log("Sách tồn kho nhiều");
        soSachTonKhoNhieu++;
    } else {
        console.log("Sách tồn kho bình thường");
        soSachTonKhoBinhThuong++;
    }
}
console.log("=== BÁO CÁO KIỂM KÊ ===");
console.log("Tổng số sách đã kiểm kê: " + tongSoSach + " cuốn");
console.log("Số sách mất: " + soSachMat + " cuốn");
console.log("Số sách hết hàng: " + soSachHetHang + " cuốn");