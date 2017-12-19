'use strict'
const path = ''; //目录，为空就是当前目录
require('simple-git')()
     .add('./*')
     .commit("first commit!")
     .push(['-u', 'origin', 'master'], () => {
        console.log('done');
     });
