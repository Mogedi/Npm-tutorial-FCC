var fs = require("fs");
var path = process.argv[2];
var ext = "." + process.argv[3];
var list = [path, ext];
var result = [];
var array = [];

function cutting(value) {
    //console.log(value)
    for (var i = 0; i < value.length; i++) {
        if (value[i].indexOf(list[1]) > -1) {
            result.push(value[i]);
        }
    }
    return result.join("\n");
}


fs.readdir(list[0], function(err, data) {
    if (err) {
        throw err;
    }
    
    
    array = data.toString().split(",");
    
    var final = cutting(array);
    
    //console.log(data.toString().split(","));
    //console.log(list[1])
    //console.log(array[5].indexOf(list[1]) > -1)
    console.log(final);
});



/*
Official Solution 
    var fs = require('fs')  
    var path = require('path')  
    
    fs.readdir(process.argv[2], function (err, list) {  
    list.forEach(function (file) {  
        if (path.extname(file) === '.' + process.argv[3])  
        console.log(file)  
        })  
    })  
*/