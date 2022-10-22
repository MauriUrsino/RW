const { series } = require("gulp");
const jasmine = require("gulp-jasmine-livereload-task");

exports.default = series(
  jasmine({
    files: ["src/*.js", "utils/*.js", "test/**.js"],
    watch: {
      options: {
        debounceTimeout: 10,
        debounceImmediate: true,
      },
    },
  })
);
