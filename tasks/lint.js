import gulp from 'gulp';
import {paths} from './paths';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  gulp.src(paths.srcLint)
  .pipe(eslint())
  .pipe(eslint.format());
});