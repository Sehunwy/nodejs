//1,获得文件的信息
var fs = require("fs");

console.log("准备打开文件！");
fs.stat('test', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");
    deleteFile(stats);
    // 检测文件类型
    // console.log("是否为文件(isFile) ? " + stats.isFile());
    // console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});

function deleteFile(file) {
    if(file.isDirectory()){
        //把目录里面的文件全部取出来
        console.log(file);
    }
    else {

    }
}