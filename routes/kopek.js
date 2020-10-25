const exspress=require('express');
const controller=require('../controllers/controllerkopek.js')
const router=exspress.Router();

router.get('/',controller.anasayfa);
router.get('/pitbull',controller.pitbull);
router.get('/boxer',controller.boxer);

module.exports=router;