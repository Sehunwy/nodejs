class FileTool {
    constructor(){

    }
    read(path,call){
        var fs = require("fs");
// 2,异步读取
        fs.readFile(path, function (err, data) {
            if (err) {
                return console.error(err);
            }
            call(data.toString());
        });
    }
}

var filetool = new FileTool();
filetool.read('input.txt',function (data) {
    console.log(data);
});