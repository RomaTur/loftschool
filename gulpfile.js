'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-cleancss');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const paths =  {
  src: 'sites/Landing/src/',              // paths.src
  build: 'sites/Landing/build/'           // paths.build
};

function movePhp(){
    return gulp.src(paths.src + 'order-form.php')
        .pipe(plumber())
        .pipe(gulp.dest(paths.build))
}

function moveFavicon(){
    return gulp.src(paths.src + 'favicon.ico')
        .pipe(plumber())
        .pipe(gulp.dest(paths.build))
}

function moveImg(){
    return gulp.src(paths.src + 'img/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest(paths.build + 'img/'))
}

function moveFonts(){
    return gulp.src(paths.src + 'fonts/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest(paths.build + 'fonts/'))
}

function moveLibStyles(){
    return gulp.src(paths.src + 'css/*.*')
      .pipe(plumber())
      .pipe(sass()) // { outputStyle: 'compressed' }
      .pipe(groupMediaQueries())
      .pipe(cleanCSS())
      .pipe(concat('libs.css'))
      .pipe(gulp.dest(paths.build + 'css/'))
}

function styles() {
  return gulp.src(paths.src + 'sass/main.sass')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass()) // { outputStyle: 'compressed' }
    .pipe(groupMediaQueries())
    .pipe(cleanCSS())
    // .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(paths.build + 'css/'))
    .pipe(browserSync.reload({stream: true}))
}

// function scripts() {
//   return gulp.src(paths.src + 'js/*.js')
//     .pipe(plumber())
//     .pipe(babel({
//       presets: ['env']
//     }))
//     .pipe(uglify())
//     .pipe(concat('script.min.js'))
//     .pipe(gulp.dest(paths.build + 'js/'))
// }



function scripts(){
    return gulp.src(paths.src + 'js/*.js')
        .pipe(plumber())
        // .pipe(babel({
        //   presets: ['env']
        // }))
        .pipe(uglify())
        // .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.build + 'js/'))
}

function htmls() {
  return gulp.src(paths.src + '*.html')
    .pipe(plumber())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build));
}

function clean() {
  return del(paths.build)
}

function watch() {
  gulp.watch(paths.src + 'sass/**/*.sass', styles);
  gulp.watch(paths.src + 'js/**/*.js', browserSync.reload);
  gulp.watch(paths.src + '**/*.html', browserSync.reload);
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.build
    }
  });
  // browserSync.watch(paths.build + '**/*.*', browserSync.reload);
}

exports.movePhp = movePhp;
exports.moveFavicon = moveFavicon;
exports.moveFonts = moveFonts;
exports.moveImg = moveImg;
exports.moveLibStyles = moveLibStyles;
exports.styles = styles;
exports.scripts = scripts;
exports.htmls = htmls;
exports.clean = clean;
exports.watch = watch;

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(movePhp, moveFavicon, moveFonts, moveImg, moveLibStyles, styles, scripts, htmls)
));

gulp.task('default', gulp.series(
  clean,
  gulp.parallel(movePhp, moveFavicon, moveFonts, moveImg, moveLibStyles, styles, scripts, htmls),
  gulp.parallel(watch, serve)
));
