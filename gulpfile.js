const gulp = require("gulp");
const cssMin = require("gulp-csso");
const rename = require("gulp-rename");
const scssCompiller = require("gulp-sass");
const imagemin = require("gulp-imagemin");

function compiller() {
    return gulp.src("./app/sass/**/*.scss")
    .pipe(scssCompiller())
    .pipe(gulp.dest("./app/css"));
};

function watch () {
    return gulp.watch("./app/sass/**/*.scss", compiller);
};

function cssmin () {
    return gulp.src("./app/css/style.css")
    .pipe(cssMin())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./app/css"));
};

function imgMin () {
    return gulp.src("./app/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./app/img/"));
};

function build () {
    return gulp.src([
        "./app/css/style.min.css",
        "./app/css/OverlayScrollbars.css",
        "./app/fonts/**/*",
        "./app/img/**/*",
        "./app/js/**/*.js",
        "./app/index.html"
    ],{base:"app"})
    .pipe(gulp.dest("dist"))
}

exports.compiller = compiller;  // компиляція scss - css
exports.watch = gulp.series(compiller, watch);  // scss вотчер-компиляція
exports.cssmin = cssmin;        
exports.imgmin = imgMin;
exports.build = gulp.series(compiller, cssmin, imgMin, build);
