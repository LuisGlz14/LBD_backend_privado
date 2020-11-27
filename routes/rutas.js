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

// Operaciones para domicilio
router.put('/put_domicilio', [

    body('cp').not().isEmpty().isNumeric(),
    body('numero').not().isEmpty().isNumeric(),
    body('calle').not().isEmpty().isString(),
    body('curp').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createDomicilio(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_domicilio', [], (req, res) => {
    user.getDomicilio(connection, (data => {
        res.json(data);
    }));
});

router.post('/update_domicilio', [

    body('id_domicilio').not().isEmpty().isNumeric(),
    body('cp').not().isEmpty().isNumeric(),
    body('numero').not().isEmpty().isNumeric(),
    body('calle').not().isEmpty().isString(),
    body('curp').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.updateDomicilio(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.delete('/delete_domicilio', [

    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deleteDomicilio(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones para planta eléctrica
router.put('/put_planta', [

    body('tipo_renovable').not().isEmpty().isString(),
    body('recurso_alim').not().isEmpty().isString(),
    body('tipo_planta').not().isEmpty().isString(),
    body('cant_energ_gen').not().isEmpty().isNumeric(),
    body('emisiones_generadas').not().isEmpty().isNumeric(),
    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createPlanta(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_planta', [], (req, res) => {
    user.getPlanta(connection, (data => {
        res.json(data);
    }));
});

router.post('/update_planta', [

    body('id_planta').not().isEmpty().isNumeric(),
    body('tipo_renovable').not().isEmpty().isString(),
    body('recurso_alim').not().isEmpty().isString(),
    body('tipo_planta').not().isEmpty().isString(),
    body('cant_energ_gen').not().isEmpty().isNumeric(),
    body('emisiones_generadas').not().isEmpty().isNumeric(),
    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.updatePlanta(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.delete('/delete_planta', [

    body('id_planta').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deletePlanta(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones para recibo
router.put('/put_recibo', [

    body('id_domicilio').not().isEmpty().isNumeric(),
    body('fecha').not().isEmpty().isString(),
    body('consumo').not().isEmpty().isNumeric(),
    body('cant_pagar').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createRecibo(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_recibo', [], (req, res) => {
    user.getRecibo(connection, (data => {
        res.json(data);
    }));
});

router.delete('/delete_recibo', [

    body('id_recibo').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deleteRecibo(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones para disp_energ_ren
router.put('/put_disp', [

    body('id_domicilio').not().isEmpty().isNumeric(),
    body('energia_generada').not().isEmpty().isNumeric(),
    body('tipo_renovable').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createDispositivo(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_disp', [], (req, res) => {
    user.getDispositivo(connection, (data => {
        res.json(data);
    }));
});

router.delete('/delete_disp', [

    body('numero_disp').not().isEmpty().isNumeric(),
    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deleteDispositivo(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones para viven
router.put('/put_viven', [

    body('curp').not().isEmpty().isString(),
    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createViven(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_viven', [], (req, res) => {
    user.getViven(connection, (data => {
        res.json(data);
    }));
});

router.delete('/delete_viven', [

    body('curp').not().isEmpty().isString(),
    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deleteViven(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones para alimenta
router.put('/put_alimenta', [

    body('id_planta').not().isEmpty().isNumeric(),
    body('cp').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.createAlimenta(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_alimenta', [], (req, res) => {
    user.getAlimenta(connection, (data => {
        res.json(data);
    }));
});

router.delete('/delete_alimenta', [

    body('curp').not().isEmpty().isString(),
    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.deleteAlimenta(connection, cuerpo, (data => {
        res.json(data);
    }));
});

// Operaciones extras con cursores y procedimientos almacenados
router.post('/get_curps_domicilio', [

    body('id_domicilio').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.getCurpsDomicilio(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.post('/get_cp_planta', [

    body('id_planta').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.getCpPlanta(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.get('/get_numero_alimenta', [], (req, res) => {
    user.getNumeroAlimenta(connection, (data => {
        res.json(data);
    }));
});

router.post('/get_rec_fecha', [

    body('id_domicilio').not().isEmpty().isNumeric(),
    body('consumo').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.getRecFecha(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.post('/get_persona_dueno', [

    body('curp').not().isEmpty().isString()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.getPersonaDueño(connection, cuerpo, (data => {
        res.json(data);
    }));
});

router.post('/get_disp_mayor', [

    body('id_domicilio').not().isEmpty().isNumeric(),
    body('generada').not().isEmpty().isNumeric()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }

    const cuerpo = req.body;
    user.getDispMayor(connection, cuerpo, (data => {
        res.json(data);
    }));
});

module.exports = router;
