var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('js', function () {
  gulp.src(['app/app.js', 'app/**/*.js'])
     .pipe(concat('app.js'))
     .pipe(uglify())
     .pipe(gulp.dest('dist/'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch('app/**/*.js', ['js'])
})