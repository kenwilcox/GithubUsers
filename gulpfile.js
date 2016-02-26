var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', function () {
  gulp.src(['app/app.js', 'app/**/*.js'])
     .pipe(concat('app.js'))
     .pipe(gulp.dest('dist/'))
})