const {DataTypes}  = require('sequelize');

module.exports = (sequelize, Sequelize) =>{
    const Ciudad = sequelize.define("ciudad",{
        ciudad:{
            type:DataTypes.STRING,
            allowNull:false
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    });
    return Ciudad;
}
