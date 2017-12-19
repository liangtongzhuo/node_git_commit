'use strict'

const fs = require('fs')
const simpleGit = require('simple-git')

const time = Date()

simpleGit()
     .add('./*')
     .commit('自动 commit，时间' + time)
     .push(['-u', 'origin', 'master'], (e) => {
        console.log('commit 成功，时间：' + time)
        upDataFile();
     });

// 修改 README 文件
function upDataFile() {
  fs.appendFile(__dirname + '/README.md', '### 上一次自动 commit，时间:' + time + '\r\n', err => {
    err ? console.error('缺少 README.md ') : console.log('追加 README 成功，时间: ' + time)
  });
}
