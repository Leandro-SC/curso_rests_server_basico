const {response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');


//Función GET
const userGet = (req, res = response) => {
    
    const {q,nombre,apikey} = req.query;

    res.json({
        msg:'get API - Controller',
        q,
        nombre,
        apikey
    });
};

//Función POST
const userPost = async(req, res) => {

    //Errores validador
    

    const {nombre,correo, password, role} = req.body;
    const usuario = new Usuario(nombre,correo, password, role);

    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        return res.status(400).json({
            msg: 'Ya existe el correo'
        });
    }

    //encriptar password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    //guardar en db
    await usuario.save();

    //Respuesta de informacion en json
    res.json({
        usuario
    });
}

//Función PUT
const userPut = (req, res) => {
    
    const {id} = req.params.id;

    res.json({
        msg:'Put API - Controller',
        id
    });
};






module.exports = {
    userGet,
    userPut,
    userPost
}




































