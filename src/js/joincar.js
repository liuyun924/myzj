require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','gdszoom'],function(){
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
				console.log( $cloneimg);
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




		});
		
	});
});
