const express = require('express');
const app = express.Router();
const ciudad = require('./CiudadController');
// Autorizacion de formatos y encabezados en las peticiones

app.use((req,res,next) =>{
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type,Accept"
    );
    next();
});

// Ruta normal
app.get('/all', ciudad.mostrarCompras);

module.exports = app;