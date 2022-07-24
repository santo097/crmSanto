const {DataTypes}  = require('sequelize');

module.exports = (sequelize, Sequelize) =>{
    const Pais = sequelize.define("pais", {
        pais:{
            type:DataTypes.STRING,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });
    return Pais;
}