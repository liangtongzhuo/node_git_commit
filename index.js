'use strict'

const fs = require('fs')
const simpleGit = require('simple-git')

// 定时器
setInterval(function () {
  upDataFile()
}, 1000 * 60 * 60 * 24) //时间不易太短

// 修改 README 文件
upDataFile()
function upDataFile() {
  const time = Date()
  fs.appendFile(__dirname + '/README.md', '#### 自动 commit，时间:' + time + '\r\n', err => {
    err ? console.error('缺少 README.md ') : console.log('README 文件追加成功，时间: ' + time)
    gitCommit(time)
  })
}

// commit 提交
function gitCommit(time){
  simpleGit()
       .addConfig('user.name', 'liangtongzhuo')
       .addConfig('user.email', 'liangtongzhuo@gmail.com')
       .add('./*')
       .commit('自动 commit，时间' + time)
       .push(['-u', 'origin', 'master'], (e) => {
          console.log('commit 成功，时间：' + time ,e)
       })
}
