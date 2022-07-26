const Ciudad = require('./CiudadModel');
const Pais = require('./PaisModel');
const { DataTypes}  = require('sequelize');
const sequelize = require('../Utilities/Database');

module.exports = (sequelize, Sequelize) =>{
    const Direccion = sequelize.define("direccione", {
        domicilio:{
            type:DataTypes.STRING,
            allowNull:false
        },
        codigoPostal:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });
    return Direccion;
}