const { response, request } = require('express');


const usariosGet = (req, res = response) => {

    const params = req.query;
    res.send('hola desde controllador')
    res.json({
        msg: 'get Api desde controllador'
    })
    
}
const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post Api desde controllador',
        body
    })

}
const usuariosPut = (req, res = response) => {

    const id = req.params;
    res.json({
        msg: 'put Api desde controllador',
        id
    })
}
const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'pathc Api desde controllador'
    })
}
const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete Api desde controllador'
    })
}


module.exports = {
    usariosGet,
    usuariosPost,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}