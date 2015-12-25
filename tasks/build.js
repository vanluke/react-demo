import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 
  		'styles', 'htmlReplace', 'images'], cb);
});