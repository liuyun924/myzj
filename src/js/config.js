require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../lib/jquery-3.2.1",
        
    },


    shim:{
    	// 表示common依赖jquery
    	"common":["jquery"],
    	"gdszoom":["jquery"],
    }
})