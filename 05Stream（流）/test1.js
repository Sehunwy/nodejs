//引入文件模块
var fs = require('fs');

//获得流处理对象
var radStream = fs.createReadStream('input.txt');

//设置编码
radStream.setEncoding('utf8');

//读取数据
var data='';
var index = 0;
radStream.on('data',function (chunk) {
    index++;
    console.log(chunk+index);
    data = data+chunk;
});

//出错处理
radStream.on('error',function (err) {
    console.log("出错");
});

//结束处理
radStream.on('end',function () {
    console.log("数据处理完毕");
});

console.log("程序结束");