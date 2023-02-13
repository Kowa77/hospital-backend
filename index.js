const express = require('express');

require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');


//Crear Servidoe Express
const app = express();

//Config CORS
app.use( cors() );


// Base de Datos
dbConnection();

//console.log(process.env);

//mongo compass
//1323qewe
//esteban

//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola Mundo'
    })
});

app.listen(process.env.PORT, () =>{
 console.log('Servidor Corriendo En Puerto ', process.env.PORT);
});
