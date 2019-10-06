const gulp = require("gulp");
const sass = require("gulp-sass");

let sourceDirectory = "./src/assets";
let destDirectory = "./src/assets/css/";

gulp.task("compile_scss", function() {
  return gulp
    .src(sourceDirectory + "/scss/**/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destDirectory));
});
gulp.task("watch", function() {
  gulp.watch(sourceDirectory + "/scss/**/*.scss", gulp.series("compile_scss"));
});

gulp.task("default", gulp.series("compile_scss"));
