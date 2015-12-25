import gulp from 'gulp';
import {paths} from './paths';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';

gulp.task('browserify', () => {
  browserify(paths.srcJsx, {debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distJs));
});