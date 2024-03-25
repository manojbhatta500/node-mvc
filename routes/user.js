const express = require('express');
const router = express.Router();
const user = require('../modules/user');

const {postHandler,rootHandler} = require('../controller/user_controller');


router.get('/',rootHandler);
router.post('/',postHandler);


module.exports = router;