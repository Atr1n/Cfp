const gulp = require('gulp');

// const include = require('gulp-include')
// const uglify = require('gulp-uglify');
// const argv = require('yargs').argv;
// const gulpif = require('gulp-if');
// const eslint = require('gulp-eslint');
// const babel = require('gulp-babel');

// Работа со скриптами

module.exports = function script() {
  return gulp.src('dev/static/js/**/*.js')
    .pipe(gulp.dest('dist/static/js/'))

    // .pipe(gulpif(argv.prod, uglify()))
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
};


