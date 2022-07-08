var myParse = function(ua) {
	ua = typeof ua === "string" && ua.trim() ? ua : navigator.userAgent;
	var pd1 = new UAParser(ua).getResult(),
		pd2 = new Browser(ua);
	return {
		"ua": ua,
		"browser": `${pd2.browser?pd2.browser+" ":""}${pd2.version?pd2.version:""}`,
		"engine": `${pd1.engine.name?pd1.engine.name+" ":""}${pd1.engine.version?pd1.engine.version:""}`,
		"os": `${pd2.os?pd2.os+" ":""}${pd2.osVersion?pd2.osVersion:""}`,
		"language": pd2.language ? pd2.language : "",
		"screen": `${screen.width?screen.width+" × ":""}${screen.height?screen.height:""}`
	}
}
var parseFn = function() {
	var errorMsg = `<span style="color:red">获取失败</span>`,
		data = myParse($(".ua-text").val());
	$(".ua-text").val(data.ua);
	$(".parse-box-value").html("正在获取");
	$(".parse-box-value").each((i, e) => {
		let dataTemp = $(e).attr("data-name");
		if (dataTemp === "ip") {
			$.get("https://vv.video.qq.com/checktime?otype=json", function(res) {
				$(e).text(res['ip'])
			}, "jsonp");
			setTimeout(() => {
				if ($(e).text().trim() === "正在获取") {
					$(e).html(errorMsg);
				}
			}, 3000)
		} else {
			dataTemp = data[dataTemp] ? data[dataTemp] : errorMsg;
			$(e).html(dataTemp)
		}
	})
}
