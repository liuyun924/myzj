require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function(){

		$(function(){

			$('header').load('../html/header.html #top');
			$('footer').load('../html/footer.html #foot');
			$('#logo').load('../html/loginlogo.html');

			$('#submit').click(function(){
				$.post('../api/register.php',{
					username: $('#username').val(),
					password: $('#password').val(),
					passwordagain: $('#passwordagain').val(),
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						alert('注册成功！');
					} else {
						alert($obj.message);
					}
				})				
			})



		});
		
	});
});
