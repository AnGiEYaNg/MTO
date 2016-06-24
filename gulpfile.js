var gulp = require("gulp"),
    gulpLoadPlugins = require("gulp-load-plugins"),
    plugins = gulpLoadPlugins({ camelize: true }),
    colors = require("colors"),
    fs = require("fs"),
    pkg = require("./package.json"),
    runSequence = require("run-sequence");

var errorAlert = function(error) {
    plugins.notify.onError({ title: "Build error", message: "How many commas did you forget this time?" })(error);
    console.log(error.toString());
    this.emit("end");
};

gulp.task('styles', function() {
    return gulp.src(["src/styles/**/*.scss", "src/styles/**/_*.scss"])
        .pipe(plugins.plumber({ errorHandler: errorAlert }))
        .pipe(plugins.sass({ outputStyle: 'expanded' }))
        .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(plugins.rename({ extname: ".css" }))
        .pipe(gulp.dest('build/styles'))

        .pipe(plugins.minifyCss())
        //.pipe(plugins.header(fs.readFileSync("header.txt", "utf8"), {pkg: pkg}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('scripts', function() {
    return gulp.src("src/scripts/**/*.js")
        .pipe(plugins.plumber({ errorHandler: errorAlert }))
        .pipe(plugins.concat("app.js"))
        .pipe(gulp.dest('build/scripts'))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify({ preserveComments: 'some' }))
        //.pipe(plugins.header(fs.readFileSync("header.txt", "utf8"), {pkg: pkg}))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('templates', function() {
    return gulp.src("src/**/*.jade")
        .pipe(plugins.plumber({ errorHandler: errorAlert }))
        .pipe(plugins.jade())
        .pipe(gulp.dest('./'))

        //.pipe(plugins.header(fs.readFileSync("header.txt", "utf8"), {pkg: pkg}))
        .pipe(gulp.dest('./'));
});

gulp.task("other-files", function() {
    return gulp.src([
        "src/**/*",
        "!src/**/*.jade",
        "!src/**/*.scss",
        "!src/scripts/**/*.js"
    ])
        .pipe(plugins.plumber({ errorHandler: errorAlert }))
        .pipe(gulp.dest('./'))
        .pipe(gulp.dest('./'));
});

gulp.task("build", ["styles", "scripts", "templates", "other-files"]);

gulp.task("default", ["build"], function() {
    var server = plugins.liveServer("server.js", {env: {DIRECTORY: "build"}});
    server.start();

    gulp.watch("src/**/*.scss", function(event) {
        runSequence("styles", function() {
            server.notify.apply(server, [event]);
        });
    });
    gulp.watch("src/scripts/**/*.js", function(event) {
        runSequence("scripts", function() {
            server.notify.apply(server, [event]);
        });
    });
    gulp.watch("src/**/*.jade", function(event) {
        runSequence("templates", function() {
            server.notify.apply(server, [event]);
        });
    });
    gulp.watch([
        "src/**/*",
        "!src/**/*.jade",
        "!src/**/*.scss",
        "!src/scripts/**/*.js"
    ], function(event) {
        runSequence("other-files", function() {
            server.notify.apply(server, [event]);
        });
    });
});

gulp.task("preview", function() {
    var server = plugins.liveServer("server.js", {env: {DIRECTORY: "dist"}});
    server.start();
});