const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) =>{
   const Usuario = sequelize.define("usuario", {
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        apellidos:{
            type:DataTypes.STRING,
            allowNull:false
        },
        usuario:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contraseña:{
            type:DataTypes.STRING,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
   });
   return Usuario;
}