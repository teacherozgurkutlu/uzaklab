const exspress=require('express');
const controller=require('../controllers/controllerindex.js')

const router=exspress.Router();

router.get('/',controller.index);


module.exports=router;