'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var copy = require('gulp-copy');

var config = {

  dist: {
    dir: './dist'
  },

  vendor: [
    '/bower_components/jquery/dist/jquery.min.js',
    '/bower_components/bootstrap/dist/js/bootstrap.min.js',
    '/bower_components/angular/angular.min.js',
    '/bower_components/angular-route/angular-route.min.js',
    '/bower_components/angular-resource/angular-resource.min.js',
    '/bower_components/angular-animate/angular-animate.min.js',
    '/bower_components/angular-bootstrap/ui-bootstrap.min.js',
    '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  ],

  src: [
    './app/app.module.js',
    './app/app.routes.js',
    './app/app.services.js',
    './app/app.controllers.js',
    './app/components/login/loginController.js',
    './app/components/login/logoutController.js',
    './app/components/profile/profileController.js',
    './app/components/search/searchController.js',
    './app/components/vehicle/vehicleController.js',
    './app/shared/detectMobileService.js',
    './app/shared/showInMobileDirective.js',
    './app/shared/hideInMobileDirective.js'
  ],

  static: [
    './app/static/css/*',
    './app/static/images/*'
  ],

  index: './app/index.html'

};

// TODO: Copiar os html
// TODO: Copiar as fontes do bower_components
// TODO: Copiar os css do bootstrap

gulp.task('clean', function() {
   return gulp.src(config.dist.dir).pipe(clean({ force: true }));
});

gulp.task('static', ['clean'], function() {
  return gulp.src(config.static)
    .pipe(copy(config.dist.dir));
});

gulp.task('index', ['clean'], function() {
  return gulp.src(config.index)
    .pipe(gulp.dest(config.dist.dir));
});

gulp.task('js-vendor', ['clean'], function() {
  return gulp.src(config.vendor)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest(config.dist.dir));
});

gulp.task('js-src', ['clean'], function() {
  return gulp.src(config.src)
    .pipe(concat('src.js'))
    .pipe(uglify())
    .pipe(rename('src.min.js'))
    .pipe(gulp.dest(config.dist.dir));
});

gulp.task('build', ['js-vendor', 'js-src', 'static', 'index']);
