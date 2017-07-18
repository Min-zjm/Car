var gulp=require("gulp");      //const/var
var less=require("gulp-less");
var bs=require("browser-sync");

gulp.task("less",function(){
	 gulp.src("less/*.less")  //
	     .pipe(less())
	     .pipe(gulp.dest("dist/css"))  //自动生成css文件夹和其的--.css
});
gulp.task("Server",["less"],function(){
	 bs.init({
	 	server:{
	 		baseDir:"./",
	 		index:"index.html"   //1.new-html--,2.gulp
	 	}
	 });
	gulp.watch("less/*.less",["less"])
	gulp.watch("js/*.js",["less"])
	gulp.watch("dist/css/*.css").on("change",bs.reload);
	gulp.watch("*.html").on("change",bs.reload);
})
gulp.task("default",["Server"]);