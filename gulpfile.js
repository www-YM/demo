require('dotenv').config({ path: './.env.production'})
const gulp = require('gulp')
const oss = require('gulp-aliyun-oss')

const options = {
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  region: process.env.OSS_REGION,
  bucket: process.env.OSS_BUCKET,
  prefix: '',
  ossOpt: {
    headers: {
      'Cache-Control': 'max-age=864000'
    }
  }
}

const noCacheOptions = Object.assign({}, options, {
  ossOpt: {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }
})

function deployResources () {
  return gulp.src(['./dist/**/*', '!./dist/index.html']).pipe(oss(options))
}

function deployPage () {
  return gulp.src('./dist/index.html').pipe(oss(noCacheOptions))
}

exports.default = gulp.series(deployResources, deployPage)
