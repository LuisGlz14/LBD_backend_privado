const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./conexion');
const cors = require('cors');

const app = express();
const misRutas = require('./routes/rutas');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/Privado/dist/Privado"));
app.use('/', misRutas);

connection.connect((err, res) => {
    if(err) {
        console.log(err);
        console.log('Error de conexion con sql');
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

app.listen(3000, (err, res) => {
    if (err){
        console.log('Error al levantar el servidor');
        return;
    }
    console.log('Apis escuchando en el puerto 3000');
});