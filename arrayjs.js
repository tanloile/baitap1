// // tạo 1 mảng Trái Cây chưa có phần tử nào hết - mảng bên Js không cần biết trước độ dài
// // phần tử mảng là chuỗi thì để trong cặp dấu "" còn nếu là số thì k cần để trong cặp ""
// let mangTraiCay = [];
// document.write("mảng trái cây có " + mangTraiCay.length + " phần tử" );
// // hoặc viết theo kiểu backtick
// document.write(`<br> mảng trái cây có ${mangTraiCay.length}`);
// mangTraiCay[0]="apple";
// mangTraiCay[1]= "banana";
// // tạo 1 mảng màu sắc có 3 phần tử (đỏ, xanh lá, xanh dương)
// let mangMauSac = ["red", "green", "blue"];
// mangMauSac[3]="violet"
// document.write(`<br> mảng màu sắc có ${mangMauSac.length}`);
// for (let i = 0; i <mangMauSac.length; i++) {
//     // document.write("<br>" + mangMauSac[i]);
//     document.write(`<br> ${mangMauSac[i]}`);
// }

// // Vòng lặp Forof - iterator of object (đối tượng cần duyệt qua)
// // item thuộc mảng màu sắc nên không cần chỉ ra từng phần từ trong mang bằng câu lệnh của mangMauSac[i]
// for (const item of mangMauSac) {
//     document.write("<br>" + item);
// }

// // Vòng lặp ForEach - array.forEach(element => {
// mangMauSac.forEach(item => {
//     document.write("<br>" + item);
// });

// // Sắp xếp mảng
// mangMauSac.sort();
// for (const item of mangMauSac) {
//     document.write("<br>" + item);
// }

// // đảo ngược mảng
// mangMauSac.reverse();
// for (const item of mangMauSac) {
//     document.write("<br>" + item);
// }

let mangMauSac = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let thang = document.getElementById("thang");
for (const item of mangMauSac) {
    let option = document.createElement("option");
    option.text = item ;
    option.value = item ;
    thang.add(option);
}