let type = prompt("Mời bạn nhập thể loại sách").toLowerCase();
let statuss = prompt("Mời bạn nhập tình trạng của sách (có sẵn) hoặc (đã mượn)").toLowerCase();
if(type === "Khoa học" || type === "Lịch sử"){
    if(statuss === "có sẵn"){
        console.log("Sách này có sẵn trong thư viện");
    }else{
        console.log("Sách đã được mượn");
    }
}else if(type === "Văn học" || type === "Truyện"){
    console.log("Sách này có thể đọc giải trí");
}else{
    console.log("Thể loại sách không xác định");
}