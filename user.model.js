module.exports = {

    /* create: (connection, body, callback) => {
        connection.query('insert into Persona SET ?', body, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: null, id: null, success: true });
        });
    }, */

    getConsumo: (connection, callback) => {
        const query = 
        `select col.cp as "CP", col.nombre as "Nombre", avg(rec.consumo_energia) as "Consumo" 
        from Colonia col, Domicilio dom, Recibo rec where
        col.cp = dom.cp and rec.id_domicilio = dom.id_domicilio group by col.cp;`;

        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    getColonia: (connection, callback) => {
        const query = 
        `select col.cp as "cp", col.nombre as "nombre", col.estado as "estado", col.num_lamp_publicas as "lamparas",
        count(doc.id_domicilio) as "viviendas" from Colonia col, Domicilio doc where col.cp = doc.cp group by col.cp`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    getPromedioRenovable: (connection, callback) => {
        const query = 
        `select col.cp as "cp", col.nombre as "nombre", (count(der.numero_disp) / count(doc.id_domicilio))  
        as "promedio" from Colonia col, Domicilio doc, Dispositivo_energia_renovable der where
        der.id_domicilio = doc.id_domicilio and
        col.cp = doc.cp group by col.cp;`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    },

    getPlanta: (connection, callback) => {
        const query = 
        `select concat(doc.calle, ' #', doc.numero, ' ', col.nombre) as "Direccion", 
        pe.tipo_planta as "Tipo", pe.recurso_alim as "Recurso", pe.emisiones_generadas as "Emisiones", pe.tipo_renovable as "Renovable" from
        Planta_Electrica pe, Domicilio doc, Colonia col where
        col.cp = doc.cp and
        doc.id_domicilio = pe.id_domicilio;`;
        connection.query(query, (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }

            callback({ array: results, id: null, success: true });
        });
    }

}