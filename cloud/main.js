var tg=require("thumbnailgen");

module.exports.gen=function (params,cb){
    tg.pdf.generateFromFilePath(__dirname+"/test.pdf",__dirname+"/public/test.pdf",function(err,fp){
        console.log(err);
        console.log(fp);
        cb(err,{"path":fp});
    });
}