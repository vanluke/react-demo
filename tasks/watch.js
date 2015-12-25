import gulp from 'gulp';
import {paths} from './paths';
import runSequence from 'run-sequence';

gulp.task('watch-styles-jsx', () => {
  gulp.watch(paths.srcCss, ['styles']);
  gulp.watch(paths.srcJsx, ['lint']);
});

gulp.task('watch', cb => {
  runSequence('clean', 
  	['browserSync', 'watch-styles-jsx', 'watchify', 
  		'styles', 'lint', 'images'], cb);
});
