let tongPhanHoi = 0;
let khieuNaiNghiemTrong = 0;
let khieuNaiTrungBinh = 0;
let khieuNaiNhe = 0;
let deXuatCaiThien = 0;
let phanHoiTichCuc = 0;
while (true) {
    let tiepTuc = prompt(
        "Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)"
    ).toLowerCase();
    if (tiepTuc === "không") {
        break; 
    }
    if (tiepTuc !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    console.log("--- XỬ LÝ PHẢN HỒI / KHIẾU NẠI ---");
    let tenBanDoc;
    do {
        tenBanDoc = prompt("Nhập tên bạn đọc (không được để trống):");
    } while (!tenBanDoc);
    let maThe = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");
    let loai;
    do {
        loai = +prompt(
            "Nhập loại phản hồi:\n1 - Phàn nàn / Khiếu nại\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực / Khen ngợi"
        );
    } while (![1, 2, 3].includes(loai));
    let mucDo = null;
    if (loai === 1) {
        do {
            mucDo = +prompt(
                "Nhập mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng"
            );
        } while (![1, 2, 3].includes(mucDo));
    }
    let noiDung = prompt("Nhập nội dung ngắn gọn (tham khảo):");
    tongPhanHoi++;
    if (loai === 1 && mucDo === 3) {
        console.log("Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
        khieuNaiNghiemTrong++;
    } else if (loai === 1 && mucDo === 2) {
        console.log("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
        khieuNaiTrungBinh++;
    } else if (loai === 1 && mucDo === 1) {
        console.log("Xử lý ngay tại quầy - Khiếu nại nhẹ");
        khieuNaiNhe++;
    } else if (loai === 2) {
        console.log("Cảm ơn! Đề xuất đã được ghi nhận");
        deXuatCaiThien++;
    } else if (loai === 3) {
        console.log("Cảm ơn bạn đã phản hồi tích cực!");
        phanHoiTichCuc++;
    }
}
console.log("=== BÁO CÁO CUỐI CA ===");
console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + tongPhanHoi);
console.log("Số khiếu nại nghiêm trọng (mức 3): " + khieuNaiNghiemTrong);
console.log("Số khiếu nại trung bình (mức 2): " + khieuNaiTrungBinh);
console.log("Số khiếu nại nhẹ (mức 1): " + khieuNaiNhe);
console.log("Số đề xuất cải thiện: " + deXuatCaiThien);
console.log("Số phản hồi tích cực: " + phanHoiTichCuc);