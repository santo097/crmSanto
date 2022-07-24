const Sequelize = require('sequelize');
const configuracion = require('../Utilities/Configuracion');

// Conexion con la base de datos
const sequelize = new Sequelize(
    configuracion.db.nombre,
    configuracion.db.usuario,
    configuracion.db.contraseña,
    {
        host:configuracion.db.host,
        dialect:'postgres'
    });

// Prueba de conexion con base de datos

try{
    sequelize.authenticate();
    console.log('Conexion exitosa con base de datos');
} catch(error){
    console.error('Se ha generado algun problema', error);
}

const Tablas = {};

// Agregar Modelos
Tablas.ciudad = require('../Model/CiudadModel')(sequelize,Sequelize);
Tablas.role = require('../Model/RoleModel')(sequelize,Sequelize);
Tablas.pais = require('../Model/PaisModel')(sequelize,Sequelize);
Tablas.tipoDocumento = require('../Model/TipoDocumentoModel')(sequelize,Sequelize);

module.exports = Tablas,sequelize;