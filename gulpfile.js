var gulp = require('gulp');
var bowtie = require('bowtie-js').gulp;
var browserSync = require('browser-sync').create();
var lib = require('bower-files')();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var del = require('del');
var fs = require('fs');

gulp.task('serve', function() {
  browserSync.init(null, {
    port: 7000,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('build-bowtie', function() {
  return gulp.src("app/*.bow")
    .pipe(bowtie({
      pretty: true
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task('build-vendors', function() {
  gulp.src(lib.ext('less').files)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/style/vendors'));

  return gulp.src(lib.ext('js').files)
    .pipe(uglify())
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('dist/js/vendors'));

});

gulp.task('default', ['build-bowtie', 'serve']);

// Watch for changes on .bow-files and compile
// on change event
// Watch for changes on output HTML files and
// reload browser on change event
gulp.watch(['app/**/*.*']).on('change', function() {
  return gulp.src("app/*.bow")
    .pipe(bowtie({
      pretty: true
    }))
    .pipe(gulp.dest("dist"));
});
gulp.watch(['dist/**/*.*']).on('change', browserSync.reload);
