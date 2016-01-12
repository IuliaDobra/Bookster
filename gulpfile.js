/**
 * Created by user on 07.01.2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('sass', function() {
    return gulp.src('app/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/*.scss', ['sass']);
    // Other watchers
});