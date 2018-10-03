var fs = require('fs');
var writeStream = fs.createWriteStream('output.txt');
var readStream = fs.createReadStream('output.txt');
var data = "hello world";
writeStream.write(data,'utf8');
writeStream.end();
writeStream.on('finish',function () {
    console.log("写入完成");
});
writeStream.on('error',function () {
    console.log("写入失败");
});
console.log("程序执行完毕");