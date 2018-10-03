var http = require('http');

//引入fs
var fs = require('fs');

http.createServer(function (req,res) {
    //读取文件的数据
    var data = fs.readFileSync('index');
    //输入文件数据
    //console.log(data.toString());

    res.end(data.toString());
}).listen(8887);

//程序结束
console.log('程序结束');


