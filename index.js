'use strict'
const path = ''; //.git 目录，为空就是当前目录
const fs = require('fs')
require('simple-git')(path)
     .add('./*')
     .commit("自动 commit")
     .push(['-u', 'origin', 'master'], (e) => {
        console.log('commit 成功');
     });

fs.appendFile(__dirname + '/README.md', '更新成功', err => {
  if(err) {
    console.error(err);
  } else {
    console.log('追加成功');
  }
});
