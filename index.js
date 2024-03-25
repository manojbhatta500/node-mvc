const express = require('express');
const userRouter = require('./routes/user');
const {connectMongodbd} = require('./config');
const {writeReqTolog} = require('./middleware');
const shopRouter = require('./routes/shop');



connectMongodbd('mongodb://127.0.0.1:27017/jsone');
const app = express();
const port = 8000;


app.use(express.urlencoded({extended : false}));
 app.use(writeReqTolog('log.txt'));
app.use('/user',userRouter);


app.use('/shop',shopRouter)






app.listen(port,()=>{
    console.log('server started at ' + port);
});