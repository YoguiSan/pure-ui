const { src, dest, series } = require('gulp');
const { exec } = require('node:child_process');

async function build(cb) {
  await exec('clear');

  await exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error('[Pure UI] Error building: ', error);
      return;
    }

    console.log(stdout);
    console.log(stderr);
  });
  cb();
}

function compileTypescript(cb) {
  exec('npm run run:compiler', (error, stdout, stderr) => {
    if (error) {
      console.error('[Pure UI] Error running Typescript compiler: ', error);
      return;
    }

    console.log(stdout);
    console.log(stderr);
  });
}

function copyJson(cb) {
  src('src/**/*.json')
    .pipe(dest('dist/lib'));
  console.log('[Pure UI] JSON files copied successfully');
  cb();
}

function defaultTask(cb) {
  series(build, compileTypescript, copyJson);
  cb();
}

exports.default = defaultTask;
exports.build = build;
exports.copyJson = copyJson;
