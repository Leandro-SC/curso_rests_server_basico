const {Router} = require('express');
const { userGet, userPut, userPost } = require('../controllers/user');
const router = Router();


router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);







module.exports = router;






























