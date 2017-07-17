"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject('tsconfig.json');
var tslint = require('gulp-tslint');

/**
 * Build project
 */
gulp.task('default', ['build', 'watch']);

/**
 * Remove build directory.
 */
gulp.task('clean', function () {
    return gulp.src('./dist/**', { read: false })
        .pipe(clean());
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('build-ts', ['tslint'], () => {
    var tsResult = gulp.src(['./App/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write('.', { sourceRoot: '/App' }))
        .pipe(gulp.dest('dist/js'));
});

/**
 * Compile SASS sources and create css files.
 */
gulp.task('build-sass', function () {
    return gulp.src(['./Content/scss/style.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

/**
 * Copy html views.
 */
gulp.task('build-html', function () {
    return gulp.src("./App/**/*.html")
        .pipe(gulp.dest('./dist/js/'));
});

/**
 * Compile whole app.
 */
gulp.task('build', ['build-ts', 'build-html', 'build-sass', 'build-libs']);

/**
 * Copy all required libraries into build directory.
 */
gulp.task('build-libs', () => {
    gulp.src([
        'core-js/client/**',
        'systemjs/dist/system.src.js',
        'reflect-metadata/**',
        'rxjs/**',
        'zone.js/dist/**',
        'lodash/**',
        '@angular/**',
        'angular-calendar/**',
        'angular2-datatable/**',
        'angular2-ladda/**',
        'angular2-text-mask/**',
        'angular2-toaster/**',
        'chart.js/**',
        'dragula/**',
        'moment/**',
        'ng2-charts/**',
        'ng2-dragula/**',
        'ng2-select/**',
        'ngx-bootstrap/**',
        'ts-helpers/**'
    ], {
            cwd: 'node_modules/**'
        }).pipe(gulp.dest('./dist/libs'));
});

/**
 * Watch for changes in sass files
 */
gulp.task('watch-sass', function () {
    return gulp.watch('./app/**/*.scss', ['build-sass']);
});

/**
 * Watch for changes in ts files
 */
gulp.task('watch-ts', ['build-ts'], function () {
    return gulp.watch('app/**/*.ts', ['build-ts']);
});

/**
 * Watch for changes
 */
gulp.task('watch', ['watch-ts', 'watch-sass']);


/**
 * Run karma unit tests
 */
gulp.task('test', function () {
});

/**
 * Run e2e tests with protractor
 */
gulp.task('e2e', ['build-ts'], function () {
});
