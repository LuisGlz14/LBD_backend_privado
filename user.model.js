module.exports = {

    createPersona: (connection, body, callback) => {
        const query = `INSERT INTO PERSONA SET ?`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getPersona: (connection, callback) => {
        const query = `SELECT * FROM Persona`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    updatePersona: (connection, body, callback) => {
        const query = 
        `UPDATE PERSONA SET 
        sueldo = ${body.sueldo}, 
        nombre = "${body.nombre}", 
        ap_pat = "${body.ap_pat}", 
        ap_mat = "${body.ap_mat}", 
        fech_nac = "${body.fech_nac}"
        WHERE curp = "${body.curp}"`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deletePersona: (connection, body, callback) => {
        const query = `DELETE FROM Persona WHERE curp = "${body.curp}"`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createColonia: (connection, body, callback) => {
        const query = `INSERT INTO COLONIA SET ?`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getColonia: (connection, callback) => {
        const query = `SELECT * FROM Colonia`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    updateColonia: (connection, body, callback) => {
        const query = 
        `UPDATE COLONIA SET 
        nombre = "${body.nombre}", 
        estado = "${body.estado}", 
        ciudad = "${body.ciudad}", 
        num_lamp_publicas = ${body.num_lamp_publicas}
        WHERE cp = ${body.cp}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deleteColonia: (connection, body, callback) => {
        const query = `DELETE FROM Colonia WHERE cp = ${body.cp}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createDomicilio: (connection, body, callback) => {
        const query = 
        `INSERT INTO DOMICILIO (cp, numero, calle, curp) values (${body.cp}, ${body.numero}, "${body.calle}", "${body.curp}");`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getDomicilio: (connection, callback) => {
        const query = `SELECT * FROM Domicilio`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    updateDomicilio: (connection, body, callback) => {
        const query = 
        `UPDATE DOMICILIO SET 
        cp = ${body.cp}, 
        numero = ${body.numero}, 
        calle = "${body.calle}", 
        curp = "${body.curp}"
        WHERE id_domicilio = ${body.id_domicilio}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deleteDomicilio: (connection, body, callback) => {
        const query = `DELETE FROM Domicilio WHERE id_domicilio = ${body.id_domicilio}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createPlanta: (connection, body, callback) => {
        const query = 
        `INSERT INTO PLANTA_ELECTRICA 
        (tipo_renovable, recurso_alim, tipo_planta, cant_energ_gen, emisiones_generadas, id_domicilio)
        values ("${body.tipo_renovable}", "${body.recurso_alim}", "${body.tipo_planta}", ${body.cant_energ_gen}, ${body.emisiones_generadas}, ${body.id_domicilio});`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getPlanta: (connection, callback) => {
        const query = `SELECT * FROM PLANTA_ELECTRICA`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    updatePlanta: (connection, body, callback) => {
        const query = 
        `UPDATE PLANTA_ELECTRICA SET 
        tipo_renovable = "${body.tipo_renovable}", 
        recurso_alim = "${body.recurso_alim}", 
        tipo_planta = "${body.tipo_planta}", 
        cant_energ_gen = ${body.cant_energ_gen},
        emisiones_generadas = ${body.emisiones_generadas}
        WHERE id_planta = ${body.id_planta}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deletePlanta: (connection, body, callback) => {
        const query = `DELETE FROM PLANTA_ELECTRICA WHERE id_planta = ${body.id_planta}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createRecibo: (connection, body, callback) => {
        const query = 
        `INSERT INTO RECIBO (id_domicilio, fecha, consumo_energia, cant_pagar)
        values (${body.id_domicilio}, "${body.fecha}", ${body.consumo}, ${body.cant_pagar});`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getRecibo: (connection, callback) => {
        const query = `SELECT * FROM RECIBO`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deleteRecibo: (connection, body, callback) => {
        const query = `DELETE FROM RECIBO WHERE id_recibo = ${body.id_recibo}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createDispositivo: (connection, body, callback) => {
        const query = 
        `INSERT INTO DISPOSITIVO_ENERGIA_RENOVABLE SET ?`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getDispositivo: (connection, callback) => {
        const query = `SELECT * FROM DISPOSITIVO_ENERGIA_RENOVABLE`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deleteDispositivo: (connection, body, callback) => {
        const query = 
        `DELETE FROM DISPOSITIVO_ENERGIA_RENOVABLE WHERE numero_disp = ${body.numero_disp} AND
        id_domicilio = ${body.id_domicilio}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createViven: (connection, body, callback) => {
        const query = 
        `INSERT INTO VIVEN SET ?`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getViven: (connection, callback) => {
        const query = `SELECT * FROM VIVEN`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deleteViven: (connection, body, callback) => {
        const query = 
        `DELETE FROM VIVEN WHERE curp = "${body.curp}" AND id_domicilio = ${body.id_domicilio}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    createAlimenta: (connection, body, callback) => {
        const query = 
        `INSERT INTO ALIMENTA SET ?`;
        connection.query(query, body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    },

    getAlimenta: (connection, callback) => {
        const query = `SELECT * FROM ALIMENTA`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    deleteAlimenta: (connection, body, callback) => {
        const query = 
        `DELETE FROM ALIMENTA WHERE id_planta = ${body.id_planta} AND cp = ${body.cp}`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

}