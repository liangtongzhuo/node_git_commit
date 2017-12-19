'use strict'

const fs = require('fs')
const simpleGit = require('simple-git')

// 定时器
setInterval(function () {
  gitCommit()
}, 1000 * 60 * 60);

// commit 提交
(function gitCommit(){
  const time = Date()
  simpleGit()
       .add('./*')
       .commit('自动 commit，时间' + time)
       .push(['-u', 'origin', 'master'], (e) => {
          console.log('commit 成功，时间：' + time)
          upDataFile(time)
       })
})()


// 修改 README 文件
function upDataFile(time) {
  fs.appendFile(__dirname + '/README.md', '### 上一次自动 commit，时间:' + time + '\r\n', err => {
    err ? console.error('缺少 README.md ') : console.log('README 追加成功，时间: ' + time)
  })
}
