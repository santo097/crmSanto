const {DataTypes}  = require('sequelize');

module.exports = (sequelize, Sequelize) =>{
    const TipoDocumento = sequelize.define("tipoDocumento",{
        tipoDocumento:{
            type:DataTypes.STRING,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });

    return TipoDocumento;
}