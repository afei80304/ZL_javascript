//取得結果元素
var result = document.getElementById("result");
//取得按鈕:0-9 +-*/
var btns = document.getElementsByClassName("btn");
//最終數字
var final = "";

// 等於按鈕
var equalBtn = document.getElementById("equal");
// 監聽器(""，等於)
equalBtn.addEventListener("click", equal);

function equal() {
    // 處理尚未輸入的數字
    if (final == "") return;
       

    result.innerHTML = eval(final);
    final = "";
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // 顯示(按鈕[編號].內容)
        show(btns[i].innerHTML);
    });
}



// 函式 顯示(參數-內容)
function show(content) {

    //處理尚未輸入數字
    if (final == ""){
        if (content == "0") return;
        if (content == "*") return;
        if (content == "/") return;
    }
    //取得最後一個字
    var last = final[final.length - 1];
    console.log(final[-2]);

    final += content;
    // 結果元素.內容 = 最終數字
    result.innerHTML = final;
}