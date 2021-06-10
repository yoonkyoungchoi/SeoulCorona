window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
	console.log("here");
    var url = "http://openapi.seoul.go.kr:8088/586e6a6272787832353555426a6347/json/TbCorona19CountStatusJCG/1/100/";
    $.getJSON(url, other_Status);
}

function other_Status(others) {
	var othersDiv = document.getElementById("other");
	others = others.TbCorona19CountStatusJCG.row;
	console.log('hr2');

	for(var i = 0; i < others.length; i++){
		var other = others[i];
		var div = document.createElement("div");
		div.setAttribute("class", "other");
		div.innerHTML = "<p> 자치구 기준일: " + other.JCG_DT + "</p>"
			+ " 종로구 전체: " + other.JONGNO +"<br>"
			+ " 중구 전체: " + other.JUNGGU +"<br>"
			+ " 용산구 전체: "  + other.YONGSAN +"<br>"
			+ " 성동구 전체: " + other.SEONGDONG +"<br>"
			+ " 광진구 전체: " + other.GWANGJIN +"<br>"
			+ " 동대문구 전체: " + other.DDM +"<br>"
			+ " 중랑구 전체: " + other.JUNGNANG +"<br>"
			+ " 성북구 전체: " + other.SEONGBUK +"<br>"
			+ " 강북구 전체: " + other.GANGBUK +"<br>"
			+ " 도봉구 전체: " + other.DOBONG +"<br>"
			+ " 노원구 전체: "  + other.NOWON +"<br>"
			+ " 은평구 전체: " + other.EP +"<br>"
			+ " 금천구 전체: " + other.GEUMCHEON +"<br>"
			+ " 서대문구 전체: " + other.SDM +"<br>"
			+ " 마포구 전체: " + other.MAPO +"<br>"
			+ " 양천구 전체: " + other.YANGCHEON +"<br>"
			+ " 강서구 전체: " + other.GANGSEO +"<br>"
			+ " 구로구 전체: " + other.GURO +"<br>"
			+ " 영등포구 전체: " + other.YDP +"<br>"
			+ " 동작구 전체: " + other.DONGJAK +"<br>"
			+ " 관악구 전체: " + other.GWANAK +"<br>"
			+ " 서초구 전체: " + other.SEOCHO +"<br>"
			+ " 강남구 전체: " + other.GANGNAM +"<br>"
			+ " 송파구 전체: " + other.SONGPA +"<br>"
			+ " 강동구 전체: " + other.GANGDONG +"<br>"
			+ " 기타 전체: " + other.ETC +"<br>"
			+ " 수집일: " + other.WORK_DTTM+"<br><br>";

		othersDiv.appendChild(div);
	}
}

function openBar() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeBar() {
	document.getElementById("mySidenav").style.width = "0";
}
var modal = document.getElementById('myModal');


