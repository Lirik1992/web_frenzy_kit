const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('app/*.html')
    .pipe(dest('build/'))
}

function css() {
  return src('app/styles/*.css')
    .pipe(minifyCSS())
    .pipe(dest('build/styles'))
}

function js() {
  return src('app/scripts/*.js', { sourcemaps: true })
    .pipe(concat('main.min.js'))
    .pipe(dest('build/scripts', { sourcemaps: true }))
}

function assets() {
  return src('app/assets/*/*.png')
    .pipe(dest('build/assets'))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.assets = assets;
exports.default = parallel(js, css, html, assets);