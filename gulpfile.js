var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");

gulp.task("default", function() {
   return gulp.src('main.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});
