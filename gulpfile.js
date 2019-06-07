'use strict';

// 必要なプラグインの読み込み
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();  // Gulp プラグインを一括で読み込む

gulp.task('default', function() {
  return gulp
    .src("/*.js")  // src/js/ 配下の全ファイルを対象に圧縮する
    .pipe($.plumber())  // エラー時にプロセスが落ちないようにする
    .pipe($.uglify({
      compress: true,  // 圧縮する
      mangle: true,    // 変数の難読化を行う
      preserveComments: 'some'  // 「*!」で始まるブロックコメントを残す
    }))
    .pipe(gulp.dest('dist/js/'));  // dist/js/ 配下に出力する
});
