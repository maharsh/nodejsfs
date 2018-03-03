console.log('starting app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();
console.log(user);
// fs.appendFileSync('h', 'h')
fs.appendFile('greeting.txt', `hello ${user.username} your age is ${notes.age}` , function (err) {
  if (err) {
      console.log('unable to write to file');
  }
})
console.log(notes.addNote());
console.log(notes.add(2,3));
console.log(_.isString(true));
var farray = _.uniq([1, 1, 2, 3, 4, 5, 5, 6, 7,7,7,7])
console.log(farray);
