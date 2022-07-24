const {DataTypes}  = require('sequelize');

module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("role" , {
        role:{
            type:DataTypes.STRING,
            allowNull:false
        },
        activo:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    return Role;
}