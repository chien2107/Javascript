let nameBook = prompt("Mời bạn nhập tên sách:");
let name = prompt("Mời bạn nhập tên người mượn:");
let type = prompt("Mời bạn nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):").toLowerCase();
let day = +(prompt("Mời bạn nhập số ngày mượn sách:"));
let card = prompt("Bạn có thẻ thư viện không? (có / không):").toLowerCase();
if (type === "có sẵn" && card === "có") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
}else if (type === "đã mượn" && day < 30) {
    if (card === "có") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    }else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
}else if (type === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}