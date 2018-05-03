module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/static/stylus/*.scss')
            .pipe($.gp.sass.on('error', $.gp.sass.logError))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'));
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/stylus/*.scss')
            .pipe($.gp.sass().on('error', $.gp.sass.logError))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'));
    });
};
