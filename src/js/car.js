require(['config'],function(){

	require(['jquery','cookie'],function(){
		$(function(){
			// html结构
			$('header').load('../html/header.html #top');
			$('footer').load('../html/footer.html');

			// 实现加入购物车
			// 读取cookie

			var $goods=$('.goods');
			
			var listCar=$.cookie('shoppingCar');

			listCar = listCar ? JSON.parse(listCar) : [];

			var $li=$('<li/>');

			var totalPrice=0;
			var $ul=$goods.find('ul');

			$li.html(listCar.map(function(item){
				totalPrice += item.price * item.num;

				return `<span><img src="${item.img}" alt=""></span>
						<span>${item.title}</span>
						<span>删除</span>
						<span>${item.price}</span>
						<span><i>-</i>2<i>+</i></span>
						<span>${totalPrice}</span>`

			}).join(''));

			$li.appendTo($ul);
		})

	})
})