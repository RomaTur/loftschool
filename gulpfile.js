'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-cleancss');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// const babel = require('gulp-babel');

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');

const paths =  {
  src: 'sites/Landing/src/',              // paths.src
  build: 'sites/Landing/build/'           // paths.build
};
//
// function movePhp(){
//     return gulp.src(paths.src + 'order-form.php')
//         .pipe(plumber())
//         .pipe(gulp.dest(paths.build))
// }
//
// function moveFavicon(){
//     return gulp.src(paths.src + 'favicon.ico')
//         .pipe(plumber())
//         .pipe(gulp.dest(paths.build))
// }
//
// function moveImg(){
//     return gulp.src(paths.src + 'img/**/*.*')
//         .pipe(plumber())
//         .pipe(gulp.dest(paths.build + 'img/'))
// }
//
// function moveFonts(){
//     return gulp.src(paths.src + 'fonts/**/*.*')
//         .pipe(plumber())
//         .pipe(gulp.dest(paths.build + 'fonts/'))
// }
//
// function moveLibStyles(){
//     return gulp.src(paths.src + 'css/*.*')
//       .pipe(plumber())
//       .pipe(sass()) // { outputStyle: 'compressed' }
//       .pipe(groupMediaQueries())
//       .pipe(cleanCSS())
//       .pipe(concat('libs.css'))
//       .pipe(gulp.dest(paths.build + 'css/'))
// }
//
// function styles() {
//   return gulp.src(paths.src + 'sass/main.sass')
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(sassGlob())
//     .pipe(sass()) // { outputStyle: 'compressed' }
//     .pipe(groupMediaQueries())
//     .pipe(cleanCSS())
//     // .pipe(rename({ suffix: ".min" }))
//     .pipe(sourcemaps.write('/'))
//     .pipe(gulp.dest(paths.build + 'css/'))
//     // .pipe(browserSync.reload({stream: true}))
// }
//
// function scripts(){
//     return gulp.src(paths.src + 'js/*.js')
//         .pipe(plumber())
//         // .pipe(babel({
//         //   presets: ['env']
//         // }))
//         .pipe(uglify())
//         // .pipe(concat('app.js'))
//         .pipe(gulp.dest(paths.build + 'js/'))
// }
//
// function htmls() {
//   return gulp.src(paths.src + '*.html')
//     .pipe(plumber())
//     .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
//     .pipe(gulp.dest(paths.build));
// }
//
// function clean() {
//   return del(paths.build)
// }
//
// function watch() {
//   gulp.watch(paths.src + 'sass/**/*.sass', styles);
//   gulp.watch(paths.src + 'js/**/*.js', scripts);
//   gulp.watch(paths.src + '**/*.html', htmls);
// }
//
// function serve() {
//   browserSync.init({
//     server: {
//       baseDir: paths.build
//     }
//   });
//   browserSync.watch(paths.build + '**/*.*', browserSync.reload({stream: true}));
// }
//
// exports.movePhp = movePhp;
// exports.moveFavicon = moveFavicon;
// exports.moveFonts = moveFonts;
// exports.moveImg = moveImg;
// exports.moveLibStyles = moveLibStyles;
// exports.styles = styles;
// exports.scripts = scripts;
// exports.htmls = htmls;
// exports.clean = clean;
// exports.watch = watch;
//
// gulp.task('build', gulp.series(
//   clean,
//   gulp.parallel(movePhp, moveFavicon, moveFonts, moveImg, moveLibStyles, styles, scripts, htmls)
// ));
//
// gulp.task('default', gulp.series(
//   clean,
//   gulp.parallel(movePhp, moveFavicon, moveFonts, moveImg, moveLibStyles, styles, scripts, htmls),
//   gulp.parallel(watch, serve)
// ));


////////////////////////////////////
////////////WATCH///////////////////
////////////////////////////////////
gulp.task('sass-watch', function(){

    return gulp.src(paths.src+'sass/main.sass')
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest(paths.build + 'css/'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('scripts-watch', function(){
    var headScripts =  gulp.src(paths.src + 'js/headScripts/*.js')
            .pipe(plumber())
            .pipe(concat('headScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'));
    var footerScripts = gulp.src(paths.src+'js/footerScripts/*.js')
            .pipe(plumber())
            .pipe(concat('footerScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'))
            .pipe(browserSync.reload({stream: true}));
    return headScripts, footerScripts;

});

gulp.task('html-watch',function(){
  return gulp.src(paths.src + '*.html')
    .pipe(plumber())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.reload({stream: true}));
});
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////





////////////////////////////////////
////////////BUILD///////////////////
////////////////////////////////////
gulp.task('sass', function(){

    return gulp.src(paths.src+'sass/main.sass')
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(groupMediaQueries())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.build + 'css/'))

});

gulp.task('scripts', function(){
    let headScripts =  gulp.src(paths.src + 'js/headScripts/*.js')
            .pipe(plumber())
            .pipe(uglify())
            .pipe(concat('headScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'));
    let footerScripts = gulp.src(paths.src+'js/footerScripts/*.js')
            .pipe(plumber())
            .pipe(uglify())
            .pipe(concat('footerScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'));
    return headScripts, footerScripts;

});

gulp.task('html',function(){
  return gulp.src(paths.src + '*.html')
    .pipe(plumber())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build));
});

gulp.task('onlyMove',function(){
    let img = gulp.src(paths.src + 'img/**/*.*')
            .pipe(plumber())
            .pipe(gulp.dest(paths.build + 'img/'));
    let fonts = gulp.src(paths.src + 'fonts/**/*.*')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build + 'fonts/'));
    let favicon = gulp.src(paths.src + 'favicon.ico')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build ));
    return img , fonts, favicon;
});
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

gulp.task('clean', function(){
    return del(paths.build)
});


gulp.task('watch', function(){
    gulp.watch(paths.src + 'sass/**/*.sass', gulp.series('sass-watch'));
    gulp.watch(paths.src + 'js/**/*.js', gulp.series('scripts-watch'));
    gulp.watch(paths.src + '*.html', gulp.series('html-watch'));
    gulp.watch([paths.src + 'img/**/*.*', paths.src + 'fonts/**/*.*'], gulp.series('onlyMove'));
});

gulp.task('serve', function() {
    browserSync({
        notify:false,
        open:true,
        port: 8888,
        proxy: "http://localhost:8888/loftschool/"+paths.build
    });
    // browserSync.watch(paths.build + '**/*.*', browserSync.reload({stream: true}));
});
///////////////////////////////////////////////////////////
gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('sass', 'scripts', 'html', 'onlyMove')
));
////////////////////////////////////////////////////////////
gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('sass-watch', 'scripts-watch', 'html-watch', 'onlyMove'),
  gulp.parallel('watch', 'serve')
));
