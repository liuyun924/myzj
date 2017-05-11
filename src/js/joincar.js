require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','gdszoom','cookie'],function(){
		$(function(){
			$('header').load('../html/header.html');
			$('nav').load('../html/nav.html');
			$('aside').load('../html/aside.html');
			$('footer').load('../html/footer.html');



				// 放大镜效果
				$('.bigpic').gdszoom({
					position:'right',
					});

					// $('.small-list').on('click','img',function(){
					// $('.zoom img').attr({
					// src:this.src,
					// 'data-big':this.src
					// });
				// })

			// 实现JS效果

			
			// 点击加入购物车事件
			$('#jrgwc').on('click',function(){
				var $gwcnum=$('#sidebar').find('input');
				// 改变购物车的数量
				var nownum=Number($gwcnum.val());
				var $buynum=Number($('#buynum').val());
				$gwcnum.val(nownum+ $buynum);

				// 复制图片
				var $cloneimg=$('<div/>');
				$cloneimg.addClass('clonepic');
				// console.log(goodsNum);
				$cloneimg.append($('.smallpic img').clone())
				$('.smallpic').append($cloneimg);

				$cloneimg.stop(true);

				$cloneimg.animate({
					top:-300,
					left:1100,
				},300,function(){
					$cloneimg.remove();
				})
			})


			// 写入cookie

			// 获取需要元素
			var $title=$('.contmd h3').html();
			var $price=$('.contmd  span').html();
				$price=Number($price);
			var $goodimg=$('.contleft .bigpic img').attr('src');

			

			

		var shoppingCar=$.cookie('shoppingCar');
			shoppingCar=shoppingCar? JSON.parse(shoppingCar):[];

			var $contont=$('.contont');
			$('.contont').on('click',function(e){
				var target=e.target;

				var $goodsNum=$('#sidebar').find('input').val();
					$goodsNum=Number($goodsNum);
				if(target.id==='jrgwc'){

					// 判断是否存在当前商品
					var hasGood=false;

					if(shoppingCar.length>0){

						hasGood=true;

						shoppingCar[0].num++;
					}


					console.log($price,$title,$goodimg,$goodsNum);
					if(!hasGood){
						var goods={
						img:$goodimg,
						title:$title,
						price:$price,
						num:$goodsNum
						}
						shoppingCar.push(goods);
					}
					$.cookie.raw = true;
					$.cookie('shoppingCar',JSON.stringify(shoppingCar),{ expires: 7, path: '/' })
					console.log($.cookie())
				}

			})




		});
		
	});
});
