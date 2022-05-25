const {Router} = require('express');
const { postProduct, getWines,getWinesABC,getWinesCBA,getWineshigherprice,getWineslowerprice } = require('../controllers/products')

const router = Router();



router.get('/', getWines);

router.post('/', postProduct);
//----------------
router.get('/abc',getWinesABC)
router.get('/cba',getWinesCBA)
router.get('/pricemax',getWineshigherprice)
router.get('/pricemin',getWineslowerprice)

module.exports = router;