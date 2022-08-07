import { DataTypes } from "sequelize";
import { sequelize } from '../Utilities/Database.js';
import { InformacionUsuario } from "./InformacionUsuarioModel.js";
import { Role } from "./RoleModel.js";

export const Usuario = sequelize.define("usuario", {
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


// Relacion usuario e informacion usuario

Usuario.hasOne(InformacionUsuario, {
    foreignKey:'informacionusuarioID',
    targetId:'id'
});

InformacionUsuario.belongsTo(Usuario, {
    foreignKey:'informacionusuarioID',
    sourceKey:'id'
});

// Relacion usuario Role

Usuario.hasOne(Role, {
    foreignKey:'roleID',
    targetId:'id'
});

Role.belongsTo(Usuario,{
    foreignKey:'roleID',
    sourceKey:'id'
});