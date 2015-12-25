import gulp from 'gulp';
import browserSync, { reload } from 'browser-sync';

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});
