function themvaogiohang(x) {
    var arrGH = new Array();
    var gh_str = sessionStorage.getItem("giohang");
    if (gh_str == !null) {
        arrGH = JSON.parse(gh_str);
    }
    var countsp = sessionStorage.getItem("countsp");
    if (countsp == null) {
        countsp = 0;
    }
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innnerText;
    var tensp = boxsp[2].innerText;
    var soluong = parseInt(boxsp[3].value);
    var sp = new Array(hinh, gia, tensp, soluong);
    var coroi = 0;
    for (let i = 0; i < arrGH.length; i++) {
        var sl = arrGH[i][3];
        sl += soluong;
        arrGH[i][3] = sl;
        coroi = 1;
        break;
    }
    if (coroi == 1) {
        arrGH.push(sp);
        countsp++;
    }
    sessionStorage.setItem("ssgiohang", JSON.stringify(arrGH));
    sessionStorage.setItem("countsp", countsp);
    showcountsp();
}

function laydon() {
    var gh_str = sessionStorage.getItem("ssgiohang");
    var giohang = JSON.parse(gh_str);
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        var tt = giohang[i][2] * giohang[i][3];
        tong += tt;
        tt +=
            <
            tr >
            <
            td > $ { i + 1 } < /td> <
            td > < img src = "${giohang[i][0]}"
        alt = "" > < /td> <
            td > $ { giohang[i][1] } < /td> <
            td > $ { giohang[i][2] } < /td> <
            td > < input type = "number"
        min = "0"
        max = "10"
        value = "${giohang[i][3]}"
        onchange = "tinhlaidon(this);" > < /td> <
            td > $ { tt } < /td> <
            /tr>
    }
    tt +=
        <
        tr >
        <
        th colspan = "5" > Tổng đơn hàng < /th> <
        th id = "tongtien" > $ { tong } < /th> <
        /tr>
    document.getElementById("mycart").innerHTML = ttgh;
}