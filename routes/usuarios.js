const { Router } = require("express");

const router = Router();

//localhost:3001/usuarios
router.get("/", function (req, res) {
    res.json({msg:"hola a todos desde GET"}); 
});
router.post("/", function (req, res) {
    res.status(201).json({msg:"hola a todos desde POST"}); 
});
router.put("/", function (req, res) {
    res.status(400).json({msg:"hola a todos desde PUT"}); 
});
router.delete("/", function (req, res) {
    res.status(500).json({msg:"hola a todos desde DELETE"}); 
});

module.exports = router;
