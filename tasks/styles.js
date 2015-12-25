import gulp from 'gulp';
import {paths} from './paths';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import browserSync, { reload } from 'browser-sync';
import postcss from 'gulp-postcss';
import vars from 'postcss-simple-vars';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';

gulp.task('styles', () => {
  gulp.src(paths.srcCss)
  .pipe(sourcemaps.init())
  .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist))
  .pipe(reload({stream: true}));
});
