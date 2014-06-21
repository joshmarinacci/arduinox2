// Include gulp
var gulp = require( 'gulp' );

// Include Our Plugins
var sass = require( 'gulp-ruby-sass' );
var concat = require( 'gulp-concat' );

// Compile Our Sass
gulp.task( 'sass', function() {
    return gulp.src( './public/sass/main.sass' )
        .pipe( sass() )
        .pipe( gulp.dest( './public/css' ) );
});

gulp.task( 'scripts', function() {
    gulp.src( [
        './public/bower_components/jquery/dist/jquery.min.js',
        './public/bower_components/mustache/mustache.js',
        './public/bower_components/ace-builds/src-min-noconflict/ace.js',
        './public/bower_components/ace-builds/src-min-noconflict/ext-language_tools.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js',
        './public/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js'
    ])
        .pipe( concat( 'main.js' ) )
        .pipe( gulp.dest( './public/js/' ) )
});

// Watch Files For Changes
gulp.task( 'watch', function() {
    gulp.watch( './public/sass/*.sass', ['sass'] );
});

// Default Task
gulp.task( 'default', [ 'sass', 'watch', 'scripts' ] );
