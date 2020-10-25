const exspress=require('express');
const controller=require('../controllers/controllerkedi.js');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const router=exspress.Router();

router.get('/',ensureAuthenticated,controller.anasayfa);
router.get('/siyam',controller.siyam);
router.get('/york',controller.york);
router.post('/',controller.post);

module.exports=router;