//required
const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

//tasks
gulp.task('styles', () => {
  console.log('styles ran');
  gulp.src('public/styles/sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: '*'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/styles'));
});
//watch tasks
gulp.task('watch:styles', () => {
  gulp.watch('public/styles/sass/*.sass', ['styles']);
});

//default tasks
gulp.task('default', ['styles']);
