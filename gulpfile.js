var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var gulpZip = require('gulp-zip');
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');

var swallowError = function swallowError(error) {
  gutil.log(error.toString());
  gutil.beep();
  this.emit('end');
};

const initLivereload = function (cb) {
  livereload.listen(1234);
  cb();
};

const css = () => {
  var processors = [
    easyimport,
    customProperties,
    colorFunction(),
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
  ];

  return gulp
    .src('assets/css/*.css')
    .on('error', swallowError)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/built/'))
    .pipe(livereload());
};

const js = () => {
  var jsFilter = filter(['**/*.js'], { restore: true });

  return gulp
    .src('assets/js/*.js')
    .on('error', swallowError)
    .pipe(sourcemaps.init())
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/built/'))
    .pipe(livereload());
};

const watch = (cb) => {
  gulp.watch('assets/css/**', css);
  cb();
};

const zip = gulp.series(gulp.parallel(css, js), function zipToDest() {
  var targetDir = 'dist/';
  var themeName = require('./package.json').name;
  var filename = themeName + '.zip';

  return gulp
    .src(['**', '!node_modules', '!node_modules/**', '!dist', '!dist/**'])
    .pipe(gulpZip(filename))
    .pipe(gulp.dest(targetDir));
});

const build = gulp.series(gulp.parallel(css, js), initLivereload);

exports.zip = zip;

exports.default = gulp.series(build, watch);
