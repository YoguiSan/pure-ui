const { src, dest } = require('gulp');

function copyJson(cb) {
  return src('src/**/*.json')
    .pipe(dest('dist/lib'));
}

function defaultTask(cb) {
  copyJson();
  cb();
}

exports.default = defaultTask;
exports.copyJson = copyJson;
