var tg=require("thumbnailgen");

module.exports.gen=function (params,cb){
    tg.pdf.generateFromFilePath(__dirname+"/Press 2012.09.11 Telegraph.co.uk DofC.pdf",__dirname+"/public/Press 2012.09.11 Telegraph.co.uk DofC.png",function(err,fp){
        console.log(err);
        console.log(fp);
        cb(err,{"path":fp});
    });
}