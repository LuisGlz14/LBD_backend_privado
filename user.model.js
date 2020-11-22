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

}