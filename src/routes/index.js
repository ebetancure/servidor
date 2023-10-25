const { Router } = require('express');
const router = Router();

const Usuario = require('../models/Usuarios');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});

router.post('/registro', async (req, res) => {
    const {id, nombre, correo, contrasena } = req.body;
    const newUsuario = new Usuario({ id, nombre, correo, contrasena });
    await newUsuario.save();
    const token = await jwt.sign({ _id: newUsuario._id }, 'secretkey');
    res.status(200).json({ token });
})

router.post('/inicioSesion', async (req, res) => {

    const { correo, contrasena } = req.body;
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) return res.status(401).send('el correo no existe');
    if (usuario.contrasena !== contrasena) return res.status(401).send('contraseña erronea');

    const token = jwt.sign({ _id: usuario._id }, 'secretkey');

    return res.status(200).json({ token });
});

module.exports = router;