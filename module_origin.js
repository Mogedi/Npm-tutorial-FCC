var fs = require("./module");

var path = process.argv[2];
var ext = "." + process.argv[3];

var cool = new fs(path, ext)