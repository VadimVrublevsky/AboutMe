'use strict';
  // Импорт плагинов
var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("browser-sync").create();

var path = {
  // Местонахождение исходных файлов
  source: {
    sass: 'source/sass/style.scss',
    css: 'source/css/',
    html: 'source/*.html',
  },
  // Файлы, за изменениями которых мы будем наблюдать
  watch: {
    sass: 'source/sass/**/*.scss',
    css: 'source/css/style/**/*.css',
    html: 'source/*.html',
  },
};

gulp.task("style", function() {
  return gulp.src(path.source.sass)
    .pipe(sass())
    .pipe(gulp.dest("source/css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("html", function() {
  return gulp.src(path.source.html)
    .pipe(gulp.dest("build"));
});

gulp.task("serve", gulp.series("style", function() {
  server.init({
    server: "source/"
  });
  gulp.watch([path.watch.sass], gulp.series("style"));
  gulp.watch([path.watch.html], gulp.series("html"))
  .on("change", server.reload);
}));
