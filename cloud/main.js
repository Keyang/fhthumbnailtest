var tg=require("thumbnailgen");

module.exports.gen=function (params,cb){
    tg.pdf.generateFromFilePath(__dirname+"/WV Presentation Q1 2013.pdf",__dirname+"/public/WV Presentation Q1 2013.png",function(err,fp){
        console.log(err);
        console.log(fp);
        cb(err,{"path":fp});
    });
}