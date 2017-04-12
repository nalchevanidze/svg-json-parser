var gulp = require("gulp");
var babel = require('gulp-babel');

gulp.task("babel", function(){
  gulp.src("src/**/*.js")
    .pipe(babel({presets:["es2015","stage-3"]}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest("dist/"));
});

gulp.task("default",["babel"] );

gulp.watch("src/**/*.js", ["babel"]);