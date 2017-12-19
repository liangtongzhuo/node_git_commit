'use strict'
const path = ''; //目录，为空就是当前目录
require('simple-git')()
     .add('./*')
     .commit("first commit!123")
     .push(['-u', 'origin', 'master'], (e) => {
        console.log('done',e);
     });
