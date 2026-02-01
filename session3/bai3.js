let soLanGiaHanThanhCong = 0;
let soLanGiaHanThatBai = 0;
while (true) {
    let tiepTuc = prompt("Có yêu cầu gia hạn mới không? (có/không)").toLowerCase();
    if (tiepTuc === "không") {
        break; 
    }
    if (tiepTuc !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    console.log("--- XỬ LÝ YÊU CẦU GIA HẠN ---");
    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let tenSach = prompt("Nhập tên sách:");
    let soNgayDaMuon;
    let soNgayGiaHan;
    do {
        soNgayDaMuon = +prompt("Nhập số ngày đã mượn hiện tại (>=1):");
    } while (soNgayDaMuon < 1 || isNaN(soNgayDaMuon));
    do {
        soNgayGiaHan = +prompt("Nhập số ngày muốn gia hạn thêm (>=1):");
    } while (soNgayGiaHan < 1 || isNaN(soNgayGiaHan));
    let tongSoNgay = soNgayDaMuon + soNgayGiaHan;
    if (tongSoNgay > 60) {
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        soLanGiaHanThatBai++;
    } else if (soNgayDaMuon > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        soLanGiaHanThatBai++;
    } else if (tongSoNgay <= 30) {
        console.log("Gia hạn thành công");
        soLanGiaHanThanhCong++;
    } else {
        console.log("Gia hạn thành công");
        soLanGiaHanThanhCong++;
    }
}
console.log("=== THỐNG KÊ CA LÀM VIỆC ===");
console.log("Số lần gia hạn thành công: " + soLanGiaHanThanhCong);
console.log("Số lần gia hạn không thành công: " + soLanGiaHanThatBai);