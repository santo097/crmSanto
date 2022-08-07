import {sequelize} from '../Utilities/Database.js';
import { DataTypes } from 'sequelize';
import { Pais } from './PaisModel.js';
import { Ciudad } from './CiudadModel.js';

export const Direccion = sequelize.define("direccione", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
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

// Relacion direccion pais

Direccion.hasMany(Pais, {
    foreignKey:'paisID',
    sourceKey:'id',
});

Pais.belongsTo(Direccion, {
    foreignKey: "paisID",
    targetId:"id"
});

// Relacion direccion ciudad

Direccion.hasMany(Ciudad,{
    foreignKey:'ciudadID',
    sourceKey:'id'
});

Ciudad.belongsTo(Direccion,{
    foreignKey:'ciudadID',
    targetId:'id'
});

