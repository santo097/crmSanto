const express = require('express');
const app = express.Router();

// Autorizacion de formatos y encabezados en las peticiones

app.use((req,res,next) =>{
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type,Accept"
    );
    next();
});

// Ruta normal
app.get('/all', (req,res) =>{
    return res.status(200).json({data:'Lista de contacto'});
});

module.exports = app;