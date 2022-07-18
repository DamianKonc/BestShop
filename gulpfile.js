// Ścieżka do aktualnie wykonywanego zadania
const entryPath = ".";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function compileSass(done) {
  gulp
    .src(entryPath + "/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(entryPath + "/dist/css"));

  done();
}

function watcher(done) {
  browserSync.init({
    server: "./dist/" + entryPath,
  });

  gulp.watch(entryPath + "/scss/**/*.scss", gulp.series(compileSass, reload));
  gulp.watch(entryPath + "/dist/*.html", gulp.series(reload));
  gulp.watch(entryPath + "/dist/js/*.js", gulp.series(reload));

  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass, watcher);
