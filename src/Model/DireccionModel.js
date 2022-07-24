const {DataTypes}  = require('sequelize');

module.exports = (sequelize,Sequelize) =>{
    const Direccion = sequelize.define("direccion", {
        domicilio:{
            type:DataTypes.STRING,
            allowNull:false
        },
        codigoPostal:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });

    return Direccion;
}