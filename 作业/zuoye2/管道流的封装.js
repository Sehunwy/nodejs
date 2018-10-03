function pipe1(input,output) {
    var fs = require("fs");
    var readerStream = fs.createReadStream('input.txt');
    var writerStream = fs.createWriteStream(output);
    readerStream.pipe(writerStream);
    console.log("程序执行完毕");
}

var input = 'input.txt';
var output = 'output.txt';

pipe1(input,output);