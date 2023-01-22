const Role = require('../models/rol');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol = '') =>{
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error("El rol "+ rol + " no está definido");
    }
}

const emailExiste = async(correo = '') =>{
    const emailRegistrado = await Usuario.findOne({correo});
        if (emailRegistrado) {
            throw new Error('El correo ' + correo + ' ya está registrado');
        }
}

const existeUserID = async(id = '') =>{
    const existeId = await Usuario.findById({id});
        if (!existeId) {
            throw new Error('El id ' + id + ' no existe');
        }
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUserID
}






























