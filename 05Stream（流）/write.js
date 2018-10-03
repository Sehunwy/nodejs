//引入文件模块
var fs = require('fs');
//获得流处理对象
var writeString = fs.createWriteStream('output.txt');
//设置写入数据的编码和数据
var data = "hello";
writeString.write(data,'utf8');
//开始写数据
writeString.end();
//数据写完后的一个监听
writeString.on('finish',function () {
    console.log("写入完成");
});

//出错处理
writeString.on('error',function () {
    console.log("写入失败");
});

console.log('程序完成');