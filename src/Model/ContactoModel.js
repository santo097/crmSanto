const {DataTypes}  = require('sequelize');

module.exports = (sequelize, Sequelize) =>{
    const Contacto = sequelize.define("contacto", {
        telefono:{
            type:DataTypes.STRING,
            allowNull:false
        },
        correo:{
            type:DataTypes.STRING,
            validate:{
                isEmail:true
            }
        },
        sitioweb:{
            type:DataTypes.STRING,
            allowNull:true
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });
}