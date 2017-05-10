
// 引入require.js
// 引入gulp模块

var gulp=require('gulp');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var uglifu=require('gulp-uglify');
var rename=require('gulp-rename');
var browserSync=require('browser-sync');

// 编译sass文件
gulp.task('compileSass',function(){
	//先查找sass文件所在的位置
	gulp.src('src/sass/*.scss')

	// 通过pipe 方法导入到 gulp 的插件中实现编译sass
	.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))

	// 把编译后的文件输出
	.pipe(gulp.dest('src/scss'));
});

gulp.task('change',function(){

	browserSync({
		server: "./src",

		// 代理服务器
		// proxy:'http://localhost/ajax/',

		// 自定义端口
		// port:999,

		// 监听文件修改，自动刷新浏览器
		files:['./src/**.html','./src/css/*.css']
	});

	// 监听sass文件修改，执行编译sass文件
	gulp.watch('src/sass/*.scss',['compileSass']);
	
});