let tongYeuCau = 0;
let soDatThanhCong = 0;
let soBiTuChoi = 0;
let soChoXetDuyet = 0;
while (true) {
    let tiepTuc = prompt(
        "Có yêu cầu đặt mượn trước mới không? (có/không)"
    ).toLowerCase();
    if (tiepTuc === "không") {
        break; 
    }
    if (tiepTuc !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    console.log("--- XỬ LÝ YÊU CẦU ĐẶT MƯỢN TRƯỚC ---");
    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let maSach = prompt("Nhập mã sách muốn đặt trước:");
    let tenSach = prompt("Nhập tên sách (tham khảo):");
    let soNgayCho;
    do {
        soNgayCho = +prompt("Nhập số ngày dự kiến chờ (>=1):");
    } while (soNgayCho < 1 || isNaN(soNgayCho));
    let uuTien;
    do {
        uuTien = +prompt(
            "Nhập mức ưu tiên:\n1 - Sinh viên\n2 - Giảng viên/Nghiên cứu sinh\n3 - Nhân viên thư viện / Đặc cách"
        );
    } while (![1, 2, 3].includes(uuTien));
    tongYeuCau++;
    if (soNgayCho > 45) {
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        soBiTuChoi++;
    } else if (uuTien === 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        soDatThanhCong++;
    } else if (uuTien === 2 && soNgayCho <= 30) {
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        soDatThanhCong++;
    } else if (uuTien === 1 && soNgayCho <= 21) {
        console.log("Đặt trước thành công");
        soDatThanhCong++;
    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        soChoXetDuyet++;
    }
}
console.log("=== BÁO CÁO CA LÀM VIỆC ===");
console.log("Tổng số yêu cầu đã xử lý: " + tongYeuCau);
console.log("Số yêu cầu được đặt trước thành công: " + soDatThanhCong);
console.log("Số yêu cầu bị từ chối: " + soBiTuChoi);
console.log("Số yêu cầu chờ xét duyệt: " + soChoXetDuyet);