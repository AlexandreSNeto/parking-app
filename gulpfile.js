'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');

var config = {

    dist: {
        dir: './dist'
    },

    vendorjs: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-resource/angular-resource.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        './bower_components/angular-bootstrap-show-errors/src/showErrors.min.js'
    ],

    vendorcss: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/font-awesome/css/font-awesome.min.css'
    ],

    fonts: './bower_components/font-awesome/fonts/*',

    app: './app/**/*',

    appjs: [
        './app/app.module.js',
        './app/app.routes.js',
        './app/app.services.js',
        './app/app.controllers.js',
        './app/shared/detectMobileService.js',
        './app/shared/showInMobileDirective.js',
        './app/shared/hideInMobileDirective.js',
        './app/components/login/loginController.js',
        './app/components/login/logoutController.js',
        './app/components/search/searchController.js',
        './app/components/profile/profileController.js',
        './app/components/vehicle/vehicleController.js'
    ],

    static: [
        './app/static/**/*'
    ],

    html: './app/**/*.html'
};

gulp.task('clean', function () {
    return gulp.src(config.dist.dir).pipe(clean({ force: true }));
});

// Copia o conteúdo estático: css e imagens'
gulp.task('static', ['clean'], function () {
    return gulp.src(config.static)
        .pipe(gulp.dest(config.dist.dir + '/static'));
});

// Copia as fontes do FontAwesome
gulp.task('fonts', ['clean'], function () {
    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.dist.dir + '/static/fonts'));
});

// Copia e minifica os HTML
gulp.task('html', ['clean'], function () {
    return gulp.src(config.html)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(config.dist.dir));
});

// Copia, concatena e minifica o js do bower_components
gulp.task('js-vendor', ['clean'], function () {
    return gulp.src(config.vendorjs)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.dist.dir + '/static/js'));
});

// Copia e concatena o css do bower_components
gulp.task('css-vendor', ['clean'], function () {
    return gulp.src(config.vendorcss)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.dist.dir + '/static/css'));
});

// Copia e concatena os js da aplicação
gulp.task('js-app', ['clean'], function () {
    return gulp.src(config.appjs)
        .pipe(concat('app.js'))
        //.pipe(uglify()) TODO: Angular nao pode ser uglified devido ao $scope estar fortemente ligado ao HTML
        //.pipe(rename('app.min.js'))
        .pipe(gulp.dest(config.dist.dir));
});

gulp.task('watch', function () {
    gulp.watch(config.app, ['build']);
});

gulp.task('build', ['js-vendor', 'css-vendor', 'js-app', 'static', 'html', 'fonts']);
gulp.task('default', ['watch'], function() {});
