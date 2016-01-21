var gulp = require('gulp')
, inject = require('gulp-inject')
, nodemon = require('gulp-nodemon');

gulp.task('injectfiles', function() {

    var targetUrl = './www/index.html';    
    var target = gulp.src(targetUrl);
    var sources = gulp.src(['./www/js/**/*.js', './www/css/**/*.css'], {read: false});

    target.pipe(inject(sources, {ignorePath: 'www'}))
      .pipe(gulp.dest('./www'));

});

gulp.task('start', function () {
  nodemon({ script: 'server.js'
          , ext: 'html ejs js css'
          , ignore: ['index.html']
          , tasks: ['injectfiles'] })
    .on('restart', function () {
      console.log('restarted!')
    })
});
