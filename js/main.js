$("#ua-detail").ready(function(){
	var uaData={
		"完整UA":navigator.userAgent,
		"版本信息":navigator.appVersion,
		"系统平台":navigator.platform,
		"所属公司":navigator.vendor,
		"内核引擎":navigator.product,
		"语言环境":navigator.language
	};
	var html="";
	for(let i in uaData){
		html+="<li><span class='ua-list ua-title'>"+i+":</span><span class='ua-list'>"+(uaData[i]?uaData[i]:"无法识别")+"</span></li>";
	}
	$("#ua-detail").html(html);
	$("#ua-detail").removeClass("hide");
	$("#ua-wait").addClass("hide");
})
$("#screen-detail").ready(function(){
	$("#screen-detail").html(screen.width+" × "+screen.height);
	$("#screen-detail").removeClass("hide");
	$("#screen-wait").addClass("hide");
})