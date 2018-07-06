var gulp = require('gulp');
var run = require('gulp-run-command').default;


gulp.task('vuejs_compile', run('./build_vuejs.bat'))
gulp.task('reactjs_compile', run('npm run build_react'))

gulp.task('watch', function(){
  gulp.watch('app/reactjs/src/**/*.js', ['reactjs_compile']);
  gulp.watch('app/reactjs/src/**/*.css', ['reactjs_compile']);
  gulp.watch('app/reactjs/src/**/*.html', ['reactjs_compile']);
  gulp.watch('app/vuejs/src/**/*.vue', ['vuejs_compile']);
  gulp.watch('app/vuejs/src/**/*.js', ['vuejs_compile']);
  gulp.watch('app/vuejs/src/**/*.css', ['vuejs_compile']);
  gulp.watch('app/vuejs/src/**/*.html', ['vuejs_compile']);
})

gulp.task('default', ['vuejs_compile', 'reactjs_compile', 'watch'], function() {
  // place code for your default task here
  console.log('gulp default task .....');
});