// Dependencias
const express = require('express');
const server = express();
const morgan = require('morgan');

// Configuraciones
const configuracion = require('./Utilities/Configuracion');
const DataBase = require('./Utilities/Database');

// Importe de archivos

// Rutas
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


server.listen(configuracion.servidor.port,() =>{
    console.log('Server listening:', configuracion.servidor.port);
});