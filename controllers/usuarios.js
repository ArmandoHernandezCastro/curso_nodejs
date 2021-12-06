const {request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
    res.json({msg: "Hola a todos desde GET"});
};

const usuariosPost = (req = request, res = response) => {
    const data = req.body;
    res.status(201).json({msg: "Hola a todos desde POST", data});
};

const usuariosPut = (req = request, res = response) => {
    const data = req.params;
    res.status(400).json({msg: "Hola a todos desde PUT", data});
};

const usuariosDelete = (req = request, res = response) => {
    res.status(500).json({msg: "Hola a todos desde DELETE", data});
};

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete};