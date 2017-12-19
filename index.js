'use strict'

require('simple-git')()
     .add('./*')
     .commit("first commit!")
     .push('origin', 'master');
