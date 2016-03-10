module.exports = function (path, ext) {
    //console.log(path);
    //console.log(ext);
    var fs = require("fs");
    var list = [path, ext];
    var array = [];
    var result = [];
    
    function cutting(value) {
    //console.log(value)
        for (var i = 0; i < value.length; i++) {
            if (value[i].indexOf(list[1]) > -1) {
                result.push(value[i]);
            }
        }
        //console.log(result)
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
        
        console.log(final)
        //return final;
    });
    
};
