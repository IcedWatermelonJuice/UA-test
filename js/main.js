var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)"),
	themeChange = function() {
		mediaQuery.matches ? $("html").attr("dark",""):$("html").removeAttr("dark");
	};
themeChange(); // 判断当前模式
mediaQuery.onchange = themeChange; // 监听模式变化

$("body").ready(()=>{
	$(".ua-btn").click(() => {
		parseFn();
	});
	parseFn();
})

