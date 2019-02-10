var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var replace = require('gulp-replace');
var config = require('./package.json');
var sass = require('gulp-sass');
var merge = require('merge-stream');
var modules = require('./modules');
var gutil = require('gulp-util');

/**
 * компиляция модулей
 */
gulp.task('js-modules', function () {
    
    modules.forEach(function (module) {
        
        gulp.src([
            `dist/js/modules/${module}/**/*.js`,
            `!dist/js/modules/${module}/lib/**/*.js`
        ])
            .pipe(concat(`./js/modules/${module}/app.js`))
            .pipe(uglify())
            .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err); })
            .pipe(gulp.dest('./compile'));
        
        gulp.src([`dist/js/modules/${module}/lib/**/*.js`])
            .pipe(gulp.dest(`./compile/js/modules/${module}/lib`));
        
    });
    
    gulp.src(['./dist/js/common/**/*.js'])
        .pipe(concat('js/common/common.js'))
        .pipe(replace('{{ appVersion }}', config.version))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err); })
        .pipe(gulp.dest('./compile'));
});

/**
 * копирование node_modules
 */
gulp.task('js-lib', function () {
    gulp.src(['node_modules/**/*'])
        .pipe(gulp.dest('compile/node_modules'));
    gulp.src(['lib/**/*'])
        .pipe(gulp.dest('compile/lib'));
});

/**
 * компиляция css файлов
 */
gulp.task('css', function () {
    
    modules.forEach(function (module) {
        
        var moduleCssStream = gulp.src(`dist/css/modules/${module}/**/*.css`);
        
        var moduleScssStream = gulp.src(`dist/css/modules/${module}/**/*.scss`)
            .pipe(sass().on('error', sass.logError));
        
        merge(moduleCssStream, moduleScssStream)
            .pipe(concatCss(`css/modules/${module}/style.css`))
            .pipe(cssmin())
            .pipe(gulp.dest('compile/node_modules'))
            .pipe(gulp.dest('compile'));
    });
    
    var commonCssStream = gulp.src(['dist/css/common/**/*.css']);
    
    var commonScssStream = gulp.src(['dist/css/common/**/*.scss'])
        .pipe(sass().on('error', sass.logError));
    
    merge(commonCssStream, commonScssStream)
        .pipe(concatCss(`css/common/style.css`))
        .pipe(cssmin())
        .pipe(gulp.dest('compile'));
});

/**
 * компиляция всех кртинок
 */
gulp.task('img', function () {
    gulp.src(['dist/img/**/*'])
        .pipe(gulp.dest('compile/img'));
});

/**
 * компиляция всех кртинок
 */
gulp.task('img', function () {
    gulp.src(['dist/img/**/*'])
        .pipe(gulp.dest('compile/img'));
});

/**
 * компиляция всех шрифтов
 */
gulp.task('fonts', function () {
    gulp.src(['dist/fonts/**/*'])
        .pipe(gulp.dest('compile/fonts'));
});

/**
 * компиляция всех html файлов
 */
gulp.task('tpl', function () {
    gulp.src(['dist/**/*.html'])
        .pipe(replace('{{ appVersion }}', '1.0.0'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('compile'));
});
