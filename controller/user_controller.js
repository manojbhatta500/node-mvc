
const userentity = require("../modules/user");

async function rootHandler(req,res){
    const allUser = await userentity.find({});
    res.json({
        'status': 'success',
        'data': allUser
    });
    console.log('user data successfully ');
}

async function postHandler
(req,res){
    const body = req.body;
    if(!body.firstname || !body.lastname || !body.email ){
        return res.json({
            'msg': 'all feilds are required'
        });
    }

    const result =   await userentity.create({
        firstname : body.firstname,
        lastname : body.lastname,
        email : body.email
    });

    console.log(result);

    return res.status(201).json({
        'status': 'success'
    });
}


module.exports = {
    rootHandler,
    postHandler
}