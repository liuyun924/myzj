
require(['config'],function(){
	require(['jquery','common','lazyload'],function($,car,hb){
		$(function(){

			// 加载HTML文档
			// $('header').load('./html/header.html');
			$('nav').load('./html/nav.html');
			$('aside').load('./html/aside.html');
			// $('footer').load('./html/footer.html');
			
			$('img.lazy').lazyload({
				threshold:1,
				effect:"fadeIn"
			});
			// 懒加载

			// 主页轮播图
			$('.bigbanner').carousel({imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg']});


			// 此处获取不到img标签
			// $('header img').each(function(index,ele){
					// console.log(666)
					// var srcStr='src/' +$(this).attr('src').substr(3);
					// console.log(srcStr)
					// $(this).attr('src',srcStr);
				// })

		});
	});
});