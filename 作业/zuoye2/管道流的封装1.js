class Pipe{
    constructor(sourcePath,outPath){
        this.sourcePath = sourcePath;
        this.outPath = outPath;
    }

    work(){
        var fs = require("fs");
        var readerStream = fs.createReadStream(this.sourcePath);
        var writerStream = fs.createWriteStream(this.outPath);
        readerStream.pipe(writerStream);
        console.log("程序执行完毕");
    }
}

let pipe = new Pipe('input.txt','output.txt');
pipe.work();