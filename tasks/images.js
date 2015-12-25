import gulp from 'gulp';
import htmlReplace from 'gulp-html-replace';
import {paths} from './paths';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

gulp.task('images', () => {
  gulp.src(paths.srcImg)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.distImg));
});