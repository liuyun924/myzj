require(['config'],function(){

	require(['jquery','lazyload','cookie'],function(){
		$(function(){
			// html结构
			$('header').load('../html/header.html');
			$('nav').load('../html/nav.html');
			$('aside').load('../html/aside.html');
			$('footer').load('../html/footer.html');


			
			// 懒加载
			$('img').lazyload({
				threshold:1,
				effect:"fadeIn"
			});

				// 实现加入购物车写入cookie

			$('.jrgwc').on('click',function(){

				var $gwcnum=$('#sidebar').find('input');
				// 改变购物车的数量
				var $nownum=Number($gwcnum.val());

				var shoppingCar=$.cookie('shoppingCar');
					shoppingCar=shoppingCar? JSON.parse(shoppingCar):[];

						var $title=$('.goodlist p').html();
						var $price=298;
					$price=Number($price);
					var $goodimg=$('.goodlist >li >a img').attr('src');

					// 判断是否存在当前商品
					var hasGood=false;

					if(shoppingCar.length>0){

						hasGood=true;

						shoppingCar[0].num++;
						$gwcnum.val(shoppingCar[0].num);
						console.log(shoppingCar[0])
					}


					// console.log($price,$title,$goodimg,$goodsNum);
					if(!hasGood){
						var goods={
						img:$goodimg,
						title:$title,
						price:$price,
						num:1
						}
						shoppingCar.push(goods);
					}
					$.cookie.raw = true;

					$.cookie('shoppingCar',JSON.stringify(shoppingCar),{ expires: 7, path: '/' })
						alert('加入成功');
					console.log($.cookie())
				})
					
				
						
				

			


		})

	})
})