<?php
	include 'DBHelper.php';
	
	$username = $_POST["username"];
	$password = $_POST["password"];
	$passwordagain = $_POST["passwordagain"];
	//判断当前 username 是否已存在数据表中
	$usernameCheck = "select * from login where `username` ='$username'";
	$result = query($usernameCheck);

	//当前 username 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into login(username, password, passwordagain) values('$username', '$password', '$passwordagain')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: '$username 已被注册！！！'}";
	}
?>
