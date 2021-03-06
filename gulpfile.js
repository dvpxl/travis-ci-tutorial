var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

// gulp.task('develop', function () {
//   nodemon({
//     script: 'app.js',
//     ext: 'html js',
//     env: { 'NODE_ENV': 'development' }
//   })
//     .on('restart', function () {
//       console.log('restarted!')
//     })
// });

gulp.task('test', function () {
    gulp.src('test/**/*.js')
        .pipe(mocha({
            reporter: 'nyan',
            clearRequireCache: true,
            ignoreLeaks: true
        }));
});

// Default Task
gulp.task('default', ['test']);


//Other imports and tasks (exlucded for future tutorial)

// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

// Lint Tasks
// gulp.task('lint', function() {
//     return gulp.src(['public/js/*.js', 'routes/**/*.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// // Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('sass/*.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('public/css'));
// });

// Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('public/js/*.js', ['lint']);
//     gulp.watch(['routes/**/*.js', 'app.js', 'test/**/*.js'], ['lint', 'test']);
//     gulp.watch('sass/*.sass', ['sass']);
// });

