'use strict';

const fs = require('fs');
const os = require('os');
const _= require('lodash');

console.log('Starting app');

var user = os.userInfo();
fs.appendFile('greetings.txt',`Hello ${user.username}!`);

// var filteredArray = _.uniq(['Mario',1,'Mario',2,3,4,1,5,'Holis','Mario']);
// console.log(filteredArray);
