
const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre obligatorio'],
    },
    correo: {
        type: String,
        required: [true, 'correo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password obligatorio'],
    },
    imagen: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

//excluir passwrod
UsuarioSchema.methods.toJSON = function () {
    const {__v, password, ...usuario} = this.toObject();
    return usuario;
}


module.exports = model('Usuario',UsuarioSchema);





















