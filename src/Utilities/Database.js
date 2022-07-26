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

// try{
//     sequelize.authenticate();
//     console.log('Conexion exitosa con base de datos');
// } catch(error){
//     console.error('Se ha generado algun problema', error);
// }

const Tablas = {};

// Agregar Modelos
Tablas.ciudad = require('../Model/CiudadModel')(sequelize,Sequelize);
Tablas.role = require('../Model/RoleModel')(sequelize,Sequelize);
Tablas.pais = require('../Model/PaisModel')(sequelize,Sequelize);
Tablas.tipoDocumento = require('../Model/TipoDocumentoModel')(sequelize,Sequelize);
Tablas.direccion = require('../Model/DireccionModel')(sequelize,Sequelize);


Tablas.ciudad.hasOne(Tablas.direccion, {
    foreignKey:"ciudadID",
    otherKey:"ciudadID"

});

Tablas.pais.hasOne(Tablas.pais,{
    foreignKey:"paisID",
    otherKey:"paisID"
});

sequelize.sync();

module.exports = Tablas, sequelize;