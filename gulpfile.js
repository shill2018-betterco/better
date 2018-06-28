const gulp = require('gulp'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    path = require('path')
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin')

gulp.task('less', function (callback) {
  return gulp.src('./styles/**/*.less')
    .pipe(concat('main.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('build'))
})

gulp.task('replace-with-inline', function(){
    return gulp.src('index.html')
       .pipe(replace('<link href="build/main.css" rel="stylesheet" type="text/css">', '<style>' + fs.readFileSync('./build/main.css', 'utf8') + '</style>'))
       .pipe(replace('<script src="scripts/main.js" type="text/javascript"></script>', '<script>' + fs.readFileSync('./scripts/main.js', 'utf8') + '</script>'))
       .pipe(gulp.dest('build'))
})

gulp.task('images', function(){
    return gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
})

gulp.task('libraries', function(){
    return gulp.src('libraries/*')
        .pipe(gulp.dest('build/libraries'))
})

gulp.task('watch', function () {
    return watch(['scripts/**.js', 'styles/**.less','index.html'], { ignoreInitial: false }, function(){
        runSequence(['less', 'images', 'libraries'], function(callback){
            runSequence(['replace-with-inline'])
        })
    })
})
