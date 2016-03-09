var fs = require("fs");
var count = 0;

var words = fs.readFileSync(process.argv[2]);

var array = words.toString().split('\n');

function tally(list) {
    for (var i = 0; i < list.length; i++) {
        count++;
    }
    return count - 1;
}

console.log(tally(array));

/* 
    Solution:

    var fs = require('fs')  
    
    var contents = fs.readFileSync(process.argv[2])  
    var lines = contents.toString().split('\n').length - 1  
    console.log(lines) 
    
*/


