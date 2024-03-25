const express = require('express');
const router = express.Router();

const {handleRootIndex} = require('../controller/shop_controller')





router.get('/',handleRootIndex);




module.exports = router;


