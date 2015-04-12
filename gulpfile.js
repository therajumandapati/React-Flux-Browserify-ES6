'use strict';

var gulp = require('gulp'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    to5ify = require('babelify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    p = {
        jsx: './scripts/app.jsx',
        scss: 'styles/main.scss',
        bundle: 'app.js',
        distJs: 'dist/js',
        distCss: 'dist/css'
    };

gulp.task('clean', function(cb) {
    del(['dist/js/vendor'], cb);
});

var folder = path.resolve(__dirname, "./");

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './',
            middleware: function(req, res, next) {
                var fileName = url.parse(req.url);
                fileName = fileName.href.split(fileName.search).join("");
                var fileExists = fs.existsSync(folder + fileName);
                if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
                    req.url = "/index.html";
                }
                return next();
            }
        }
    })
});

gulp.task('watchify', function() {
    var bundler = watchify(browserify(p.jsx, watchify.args));

    function rebundle() {
        return bundler
            .bundle()
            .on('error', notify.onError())
            .pipe(source(p.bundle))
            .pipe(gulp.dest(p.distJs))
            .pipe(reload({
                stream: true
            }));
    }

    bundler.transform(to5ify)
        .on('update', rebundle);
    return rebundle();
});

gulp.task('browserify', function() {
    browserify(p.jsx)
        .transform(to5ify)
        .bundle()
        .pipe(source(p.bundle))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(p.distJs));
});

gulp.task('styles', function() {
    return gulp.src(p.scss)
        .pipe(changed(p.distCss))
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', notify.onError())
        .pipe(autoprefixer('last 1 version'))
        .pipe(csso())
        .pipe(gulp.dest(p.distCss))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('watchTask', function() {
    gulp.watch(p.scss, ['styles']);
});

gulp.task('watch', ['clean', 'images'], function() {
    gulp.start(['browserSync', 'watchTask', 'watchify', 'styles']);
});

gulp.task('images', function() {
    return gulp.src('./images/**/*.*', {
            base: './'
        })
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['clean', 'images'], function() {
    process.env.NODE_ENV = 'production';
    gulp.start(['browserify', 'styles']);
});

gulp.task('minify', function() {
  return gulp.src('./dist/js/app.js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', function() {
    console.log('Run "gulp watch or gulp build"');
});
