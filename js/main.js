var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)"),
	themeChange = function() {
		mediaQuery.matches ? $("html").attr("dark", "") : $("html").removeAttr("dark");
	};
themeChange(); // 判断当前模式
mediaQuery.onchange = themeChange; // 监听模式变化

$("body").ready(() => {
	$(".ua-btn").click(() => {
		parseFn();
	});
	$(".ua-text").keyup((e) => {
		if (/enter/i.test(e.key) || e.keyCode === 13) {
			$(".ua-btn").click();
		}
	})
	$.get("./README.md",(res)=>{
		if(typeof res==="string"&&res){
			$(".markdown-content").html(marked.parse(res));
		}
	})
	$(".markdown-btn svg").click((e)=>{
		e=$(e.currentTarget);
		if(e.children("title").text()==="展开"){
			e.children("title").text("收起");
			$(e).children("svg path").attr("d","M6 10L42 10 M6 20L42 20 M6 40L24 26L42 40");
			$(".markdown-btn").attr("show","");
			$(".markdown-content").removeAttr("hidden");
		}else{
			e.children("title").text("展开");
			$(e).children("svg path").attr("d","M6 10L42 10 M6 20L42 20 M6 40L24 26L42 40");
			$(".markdown-btn").removeAttr("show");
			$(".markdown-content").attr("hidden","");
		}
	})
	parseFn();
})
