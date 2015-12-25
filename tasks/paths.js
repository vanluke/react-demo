import watchify from 'watchify';

const paths = {
  bundle: 'app.js',
  srcJsx: 'src/Index.js',
  srcCss: 'src/**/*.css',
  srcImg: 'src/images/**',
  srcLint: ['src/**/*.js', 'test/**/*.js'],
  dist: 'dist',
  distJs: 'dist/js',
  distImg: 'dist/images'
};

const customOpts = {
  entries: [paths.srcJsx],
  debug: true
};

const opts = Object.assign({}, watchify.args, customOpts);

export { opts, paths, customOpts }