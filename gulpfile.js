"use strict";
var gulp = require("gulp");

/* copy node server to build folder */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "server/**" })
        .pipe(gulp.dest("dist"));
});
/**
 * Build the project.
 */
gulp.task("default", ['server'], function () {
    console.log("Building the project ...");
});