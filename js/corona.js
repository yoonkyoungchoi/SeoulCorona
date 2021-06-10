window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
	console.log("here");
    var url = "http://openapi.seoul.go.kr:8088/586e6a6272787832353555426a6347/json/Corona19Status/1/100/";
    $.getJSON(url, corona_Status);
}

function corona_Status(coronas) {
	var coronasDiv = document.getElementById("corona");
	coronas = coronas.Corona19Status.row;

	for(var i = 0; i < coronas.length; i++){
		var corona = coronas[i];
		var div = document.createElement("div");
		div.setAttribute("class", "corona");
		div.innerHTML = "<p> 코로나 일련번호 : NO." + corona.CORONA19_ID + "</p>"
		+ " 코로나 확인일 :  " + corona.CORONA19_DATE+"<br>"
		+ " 지역: " + corona.CORONA19_AREA+"<br>"
		+ " 접촉력 : "  + corona.CORONA19_CONTACT_HISTORY+"<br>"
		+ " 상태: " + corona.CORONA19_LEAVE_STATUS +"<br>"
		+ " 등록일: " + corona.CORONA19_MDATE+"<br><br>";
		coronasDiv.appendChild(div);
	}
}

function openBar() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeBar() {
	document.getElementById("mySidenav").style.width = "0";
}
var modal = document.getElementById('myModal');

