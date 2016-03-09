var arrayList = process.argv;
var finalArray = [];

for (var i = 0; i < 2; i ++) {
    arrayList.shift();
}

for (var i = 0; i < arrayList.length; i++) {
    finalArray.push(Number(arrayList[i]));
}

console.log(finalArray.reduce(function(first, second, index, array) {
    return first + second;
}));