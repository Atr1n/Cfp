const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

module.exports = function js() {
    return gulp.src('dev/static/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('dist/static/js/'));
};

