const {Router} = require('express');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUserID } = require('../helpers/db-validators');
const router = Router();


router.get('/', userGet);

router.put('/:id',[
    check('id', 'NO es un ID válido').isMongoId(),
    check('id').custom(existeUserID),
    validarCampos
] ,userPut);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mínimo 6 caracteres').isLength({min:6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos
], userPost);

router.delete('/:id', [
    check('id', 'NO es un ID válido').isMongoId(),
    check('id').custom(existeUserID),
    validarCampos
],userDelete);





module.exports = router;































