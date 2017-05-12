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


			// 判断是否有商品
			if(listCar.length>0){

			var $ul=$('<ul/>');

			var totalPrice=0;
		

			$ul.html(listCar.map(function(item){
				totalPrice += item.price * item.num;

				return `<li><img src="${item.img}" alt=""><span>${item.title}</span></li>
						<li>${item.price}</li>
						<li><span>-</span><input type="text"value="${item.num}"><span>+</span></li>
						
						<li>${totalPrice}</li>
						<li><i>删除</i></li>`

			}).join(''));

			$ul.appendTo($goods);

			}

			




			// 删除cookie
			$goods.on('click',function(e){
				var target=e.target;
		
				// 加减商品；
					var $goodinput=$(target).parents('ul').find('input');
					// 增加
					// console.log($goodinput.next())
				if(target.tagName==$goodinput.next().tagName){
						console.log('+++')
				}
				// 减少
				if(target==$goodinput.prev()){
						console.log('---')

				}

				// 删除按钮
				if(target.tagName.toLowerCase()=='i'){
					$.removeCookie('shoppingCar',{path:'/'});

					$(target).parents('ul').remove();
				}
			})


		});

	});
});