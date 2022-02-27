
const { Router } = require('express');
const {  usariosGet, usuariosDelete, usuariosPost, usuariosPatch, usuariosPut } = require('../controllers/user');

const router = Router();
// este archivo se ejecuta desde el modelo de servers

router.get('/', usariosGet );
router.patch('/', usuariosPatch );
router.post('/', usuariosPost );
// http:localHost:9090/carpea/id
router.put('/:id', usuariosPut );
router.put('/', usuariosPut );
router.delete('/',usuariosDelete);



module.exports = router;