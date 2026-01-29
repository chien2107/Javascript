let soLuongSach = +prompt("Mời bạn nhập số lượng sách");
if(soLuongSach < 10){
    console.log(`Thư viện có ít sách`);
}else if(soLuongSach >= 10 && soLuongSach <= 20){
    console.log(`Thư viện có số lượng sách vừa đủ`);  
}else{
    console.log(`Thư viện có nhiều sách`);
}