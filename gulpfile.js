const gulp = require('gulp')

const sass = require('gulp-sass')

gulp.task('sass', funcation (){
  return gulp

  .src('scss//**/*.scss')
.pipe(sass())
.pipe(gulp.dest('css'))

})
