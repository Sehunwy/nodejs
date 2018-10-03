// var fs = require('fs');
//
// fs.open('input.txt','r+',function (err,fd) {
//     if(err)
//         return console.log(err);
//     console.log("打开文件成功");
//
//     fs.close(fd,function (err) {
//         if(err)
//             return console.log(err);
//         console.log("关闭文件成功");
//     })
// });



var fs = require('fs');

fs.stat('input.txt',function (err,stats) {
    if(err)
        return console.log(err);
    console.log(stats);
// 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());

});