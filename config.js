const mongoose = require('mongoose');



async function connectMongodbd(url){
return mongoose.connect(url).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err.message);
});

}


module.exports = {
    connectMongodbd
}


