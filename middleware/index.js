const fs = require('fs');
function writeReqTolog(filename){
    return (req,res,next)=>{
        return  fs.appendFile(filename,`\nDate:${Date.now()}:Ip address ${req.ip} :url ${req.url} :method ${req.method}`,(err,data)=>{
            console.log('data saved successfully to loacal file ');
            next();
        });
    }
}


module.exports = {
    writeReqTolog
}