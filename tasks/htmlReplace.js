import gulp from 'gulp';
import htmlReplace from 'gulp-html-replace';
import {paths} from './paths';

gulp.task('htmlReplace', () => {
  gulp.src('index.html')
  .pipe(htmlReplace({css: 'styles/main.css', js: 'js/app.js'}))
  .pipe(gulp.dest(paths.dist));
});