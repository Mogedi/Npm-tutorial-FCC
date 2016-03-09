var array = process.argv;
for (var i = 0; i < 2; i ++) {
    array.shift();
}

console.log(array.reduce());