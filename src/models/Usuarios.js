const { Schema, model } = require('mongoose');

const userScheema = new Schema({
    id: String,
    nombre: String,
    correo: String,
    contrasena: String,
}, {
    timestamps: true
})
module.exports = model('Usuario', userScheema);