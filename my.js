var calTemp;
var userInput = [];
var result;
function getCal() {
    calTemp = document.getElementById("cal").value;
    confirm(`增加攝取熱量${calTemp}`);

//日期後面的數字***整個li變成一個**待續
	// var sum = 0;
	// userInput[userInput.length] = document.getElementById('cal').value;
	// for (var i = 0; i < userInput.length; i++) {
	// 	sum= sum + parseInt(userInput[i]);
	// }
    // document.getElementById("days").innerHTML = sum ;
    // result =  document.getElementById("days").innerHTML
    // document.getElementById("days").innerHTML = 
    // `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 今日共攝取:${userInput.join("+")} = ${result} 大卡`
	// console.log(document.getElementById("days").innerHTML);
}

// 日期後面顯示當天熱量
// 1.取得元素的position
// 2.滑鼠移過去會生成 <p> 元素
// 3.<p> 再帶入 當天輸入數值 
// 4. <p>顯示 加總數值
// 5. 移到指定日期,顯示當日輸入數值加總
