let nameBook = prompt("Mời bạn nhập tên sách");
let tenNguoiMuon = prompt("Mời bạn nhập tên người mượn");
let love = +prompt("Chọn mức độ yêu thích từ 1 -5");
if(love === 5 || love === 4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!"); 
}else if(love === 3){
    console.log("Sách này khá ổn, có thể mượn");
}else if(love === 2 || love === 1){
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");   
}else{
    console.log("Độ yêu thích từ 1-5");
}