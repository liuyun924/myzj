
// 引入require.js
// 引入gulp模块

var gulp=require('gulp');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var uglifu=require('gulp-uglify');
var rename=require('gulp-rename');
var browserSync=require('browser-sync');


// 监听CSS文件

gulp.task('change',function(){
	browserSync({
		server:"./src",

		// 所有HTML跟CSS
		files:['./src/**/*.html','./src/**/*.css'],
	});
});

    
