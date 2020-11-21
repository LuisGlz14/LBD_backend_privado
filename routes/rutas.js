const express = require('express');
const user = require('../user.model');
const connection = require('../conexion');

const { body, param, validationResult } = require('express-validator');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/Publico/dist/Publico/index.html");
});

router.get('/consumo', [], (req, res) => {
    user.getConsumo(connection, (data => {
        res.json(data);
    }));
});

router.get('/info', [], (req, res) => {
    user.getColonia(connection, (data => {
        res.json(data);
    }));
});

router.get('/renovable', [], (req, res) => {
    user.getPromedioRenovable(connection, (data => {
        res.json(data);
    }));
});

router.get('/plantas', [], (req, res) => {
    user.getPlanta(connection, (data => {
        res.json(data);
    }));
});

module.exports = router;
