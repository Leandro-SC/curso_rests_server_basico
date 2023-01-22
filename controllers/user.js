const {response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');


//Función GET
const userGet = async(req, res = response) => {
    
    const {limite = 5, desde = 0} = req.query;
    const queryFiler = {estado: true}

    // const usuarios = await Usuario.find(queryFiler)
    //     .skip(Number(desde))
    //     .limit(Number(limite))
    // ;
    // const totalDocumentos = await Usuario.countDocuments(queryFiler);

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(queryFiler),
        Usuario.find(queryFiler)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
        // usuarios,
        // totalDocumentos    
    });
};

//Función POST
const userPost = async(req, res = response) => {

    const {nombre,correo, password, rol} = req.body;
    const usuario = new Usuario({nombre,correo, password, rol});

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
const userPut = async(req, res = response) => {
    
    const {id} = req.params;
    const {_id,password, google,correo, ...rest} = req.body;
    if (password) {            
        const salt = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync(password, salt);
    }
   
    const usuario = await Usuario.findByIdAndUpdate(id, rest, {new:true});

    res.json({
        msg:'Información actualizada',
        usuario
    });
}


//función Delete
const userDelete = async(req, res) =>{

    const {id} = req.params;

    //eliminar objeto fisico
    // const usuario = await Usuario.findByIdAndDelete(id);

    //eliminar - cambiar estado
    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false});

    res.json({
        msg:'Usuario Eliminado',
        usuario
        
    });
}






module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}




































