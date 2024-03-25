const mongoose = require('mongoose');




const userSchema = mongoose.Schema({
    firstname :{
        type: String,
        required: true
    },
    lastname :{
        type: String,
        required: false
    },
    email :{
        type: String ,
        required: false,
        unique: true
    }
});

const userentity =  mongoose.model('user',userSchema);



module.exports = userentity;