// Dependencias
const express = require('express');
const server = express();
const morgan = require('morgan');

// Importe de archivos

const ciudadRoute = require('./Controller/Ciudad/CiudadRouter');
const contactoRoute = require('./Controller/Contacto/ContactoRouter');
const direccionRoute = require('./Controller/Direccion/DireccionRouter');
const roleRoute = require('./Controller/Role/RoleRouter');
const documentoRoute = require('./Controller/TipoDocumento/TipoDocumentoRouter');
const usuarioRoute = require('./Controller/Usuario/UsuarioRouter');
// Middlewars

server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({extended:true}));

// Rutas

server.use('/api/ciudad', ciudadRoute);
server.use('/api/contacto', contactoRoute);
server.use('/api/direccion', direccionRoute);
server.use('/api/role', roleRoute);
server.use('/api/tipo-documento', documentoRoute);
server.use('/api/usuario', usuarioRoute);

// Ruta principal de prueba 

server.get('/', (req,res) =>{
    res.send('Ruta principal');
});


const port = process.env.PORT || 3000;

server.listen(port,() =>{
    console.log('Server listening:', port);
});