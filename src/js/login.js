require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function(){
		$(function(){

			// 加载HTML内容
			$('header').load('../html/header.html  #top');
	     
			$('footer').load('../html/footer.html  #foot')
			//连接数据库

$('#loginbtn').click(function(){
        $.post('../api/login.php',{
          username: $('#username').val(),
          password: $('#password').val(),
        }, function(response){
          var $obj = eval('(' + response + ')');
          
  
          if($obj.state){
            // window.location.href = 'http://www.baidu.com';
            alert('ok');
          } else {
            // $.alert($obj.message);
            alert('false');
          }
        })        
      })


		})
		
	});

});
