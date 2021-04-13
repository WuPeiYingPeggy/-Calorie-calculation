var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];

var holder = document.getElementById("days");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ctitle = document.getElementById("calendar-title");
var cyear = document.getElementById("calendar-year");

var my_date = new Date();
var my_year = my_date.getFullYear();
var my_month = my_date.getMonth();
var my_day = my_date.getDate();

//获取某年某月第一天是星期几
function dayStart(month, year) {
	var tmpDate = new Date(year, month, 1);
	return (tmpDate.getDay());
}

//计算某年是不是闰年，通过求年份除以4的余数即可
function daysMonth(month, year) {
	var tmp = year % 4;
	if (tmp == 0) {
		return (month_olympic[month]);
	} else {
		return (month_normal[month]);
	}
}


function refreshDate() {
	var str = "";
	var totalDay = daysMonth(my_month, my_year); //获取该月总天数
	var firstDay = dayStart(my_month, my_year); //获取该月第一天是星期几
	var myclass;
	for (var i = 1; i < firstDay; i++) {
		str += "<li></li>"; //为起始日之前的日期创建空白节点
	}
	for (var i = 1; i <= totalDay; i++) {
		if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
			myclass = " class='lightgrey'"; //当该日期在今天之前时，以浅灰色字体显示
		} else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
			myclass = " class='green greenbox'"; //当天日期以绿色背景突出显示
		} else {
			myclass = " class='darkgrey'"; //当该日期在今天之后时，以深灰字体显示
		}
		str += "<li" + myclass + 'onmouseenter="aa(event,this)"onmouseout="bb(this)"' + ">" + i + "</li>"; //创建日期节点
	}
	holder.innerHTML = str; //设置日期显示
	ctitle.innerHTML = month_name[my_month]; //设置英文月份显示
	cyear.innerHTML = my_year; //设置年份显示
}
refreshDate(); //执行该函数

prev.onclick = function (e) {
	e.preventDefault();
	my_month--;
	if (my_month < 0) {
		my_year--;
		my_month = 11;
	}
	refreshDate();
}
next.onclick = function (e) {
	e.preventDefault();
	my_month++;
	if (my_month > 11) {
		my_year++;
		my_month = 0;
	}
	refreshDate();
}

// 輸入熱量加總-<失敗>每次一過去都會累加!
var userInput = [];
var sumCal = new Array(31);
function allSum(){
	var tot = 0;
	userInput[userInput.length] = document.getElementById('cal').value;
	for (var i = 0; i < userInput.length; i++) {
		tot += parseInt(userInput[i]);
	}

	sumCal[new Date().getDate() - 1]=tot;
	
}
// var sumA = 0;
// var temp;
// 滑鼠移過去,顯示總熱量
function aa(e, target) {
	// 當下加總
	// temp = parseInt(document.getElementById('cal').value);
	// sumA += temp;
	// console.log(sumA);

	var span = document.createElement("span");
	span.style.position = "absolute";
	span.style.top = 0 + "px";
	span.style.left = 0 + "px";

	span.innerHTML = sumCal[target.innerText*1-1];
	target.appendChild(span);
	console.log(sumCal[15]);
	// console.log(e.clientX);


}

// 滑鼠移出,後面數字消失
function bb(target) {
	target.removeChild(target.lastChild);

	// console.log(target);
	// console.log(target.lastChild);
}

