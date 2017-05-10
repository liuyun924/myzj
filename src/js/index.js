
require(['config'],function(){
	require(['jquery','common'],function($,car){
		$(function(){

			// 加载HTML文档
			$('header').load('./html/header.html');
			$('nav').load('./html/nav.html');
			$('aside').load('./html/aside.html');
			$('footer').load('./html/footer.html');
			

			// 主页轮播图
			$('.bigbanner').carousel({imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg']});

		});
	});
});