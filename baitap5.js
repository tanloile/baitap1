if (txt.value.trim().length ==0) {
    alert("Vui lòng nhập tên");
    txt.focus();
    txt.set

// tự động tạo class arrorr khi mình k nhập dữ liệu vào (có thể add 1 lúc nhiều class vào và mỗi class cách nhau bởi 1 khoảng trắng)
    txt.setAtttibute("class", "error normal" );
    p1.innerHTML = "*";
    p1.style.color = "red";
    p1.style.display = "inline";
} else {
    // txt.setAtttibute("class", " ");
    txt.removeAttribute("class");
}

let month  = document.getElementById("month");
for(let i=1; i<=12; i++) {
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    month.add(option);
}

let btn1 = document.getElementById("btn1");
btn1.onclick = kiemtra;
