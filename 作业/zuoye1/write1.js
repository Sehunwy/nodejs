//1,引入fs模块
var fs = require("fs");
var fs1 = require("fs");
var data = '';
var data1 = "thinks";
// 2，创建可读流
var readerStream = fs.createReadStream('output.txt');

//var writeStream = fs1.createWriteStream('output.txt');

// 3，设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 4，读取数据的回调
readerStream.on('data', function(chunk) {
    data += chunk;
    //console.log(data);
});

//5,读取数据结束后的回调
readerStream.on('end',function(){
    var writeStream = fs1.createWriteStream('output.txt');
    var data1 = data+"hello world";
    writeStream.write(data1,'utf8');
    writeStream.end();
    writeStream.on('finish',function () {
        console.log("写入完成");
    });
    writeStream.on('error',function () {
        console.log("写入失败");
    });
});
//6,读取数据错误的回调
readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");