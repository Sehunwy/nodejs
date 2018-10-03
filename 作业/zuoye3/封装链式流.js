/**
 * Created by Administrator on 2017/12/24 0024.
 */

//
// // 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
//
// console.log("文件压缩完成。");

// String.prototype.createGzip1 = function (input,fina) {
//     this.createReadStream(input)
//         .pipe(zlib.createGzip())
//         .pipe(this.createWriteStream(fina));
//
//     console.log("文件压缩完成。");
// }



function createGzip1(input,fina) {
    var fs = require("fs");
    var zlib = require('zlib');
    fs.createReadStream(input)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(fina));

    console.log("文件压缩完成。");
}

function createGunzip1(input,output) {
    var fs = require("fs");
    var zlib = require('zlib');
// 解压 input.txt.gz 文件为 input.txt
    fs.createReadStream(input)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(output));

    console.log("文件解压完成。");
}


// fs.createGzip1('input.txt',function () {
//     zlib.createGzip();
// },'input.txt.gz');

//createGzip1('input.txt','input.txt.gz');

createGunzip1('input.txt.gz','input22.txt');