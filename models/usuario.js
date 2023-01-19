
const { Schema, model } = require('mongoose');
const USuarioSchema = Schema({
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



module.exports = model('Usuario',USuarioSchema);





















