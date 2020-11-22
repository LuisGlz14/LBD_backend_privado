const express = require('express');
const user = require('../user.model');
const connection = require('../conexion');

const { body, param, validationResult } = require('express-validator');
var router = express.Router();


// Conseguir acceso a la pagina web
router.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/Publico/dist/Publico/index.html");
});


// Operaciones para persona
router.put('/put_persona', [

    body('curp').not().isEmpty().isString(),
    body('sueldo').not().isEmpty().isNumeric(),
    body('nombre').not().isEmpty().isString(),
    body('ap_pat').not().isEmpty().isString(),
    body('ap_mat').not().isEmpty().isString(),
    body('fech_nac').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createPersona(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_persona', [], (req, res) => {
    user.getPersona(connection, (data => {
        res.json(data);
    }));
});

router.post('/update_persona', [

    body('curp').not().isEmpty().isString(),
    body('sueldo').not().isEmpty().isNumeric(),
    body('nombre').not().isEmpty().isString(),
    body('ap_pat').not().isEmpty().isString(),
    body('ap_mat').not().isEmpty().isString(),
    body('fech_nac').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.updatePersona(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.delete('/delete_persona', [

    body('curp').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deletePersona(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones para colonia
router.put('/put_colonia', [

    body('cp').not().isEmpty().isNumeric(),
    body('nombre').not().isEmpty().isString(),
    body('estado').not().isEmpty().isString(),
    body('ciudad').not().isEmpty().isString(),
    body('num_lamp_publicas').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createColonia(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_colonia', [], (req, res) => {
    user.getColonia(connection, (data => {
        res.json(data);
    }));
});

router.post('/update_colonia', [

    body('cp').not().isEmpty().isNumeric(),
    body('nombre').not().isEmpty().isString(),
    body('estado').not().isEmpty().isString(),
    body('ciudad').not().isEmpty().isString(),
    body('num_lamp_publicas').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.updateColonia(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.delete('/delete_colonia', [

    body('cp').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deleteColonia(connection, cuerpo, (data => {
        res.json(data);
    }));
});

module.exports = router;
