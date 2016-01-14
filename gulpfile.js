/**
 * Created by user on 07.01.2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('sass', function() {
    return gulp.src('app/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass', function() {
    return gulp.src('app/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/*.scss', ['sass']);
    // Other watchers
});