import { sequelize} from "../Utilities/Database.js";
import { DataTypes } from "sequelize";
import { Direccion } from './DireccionModel.js';
import { Contacto } from './ContactoModel.js';
import {TipoDocumento} from './TipoDocumentoModel.js';

export const InformacionUsuario = sequelize.define("informacionusuario",{
    nombre:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    apellidos:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN
    }
});


// Relacion usuario y direccion

InformacionUsuario.hasMany(Direccion, {
    foreignKey:'direccionID',
    targetId:'id'
});

Direccion.belongsTo(InformacionUsuario,{
    foreignKey:'direccionID',
    sourceKey:'id'
});


// Relacion usuario y direccion

InformacionUsuario.hasMany(Contacto,{
    foreignKey:'contactoID',
    targetId:'id'
});

Contacto.belongsTo(InformacionUsuario,{
    foreignKey:'contactoID',
    sourceKey:'id'
});

// Relacion informacion usuario

InformacionUsuario.hasMany(TipoDocumento,{
    foreignKey:'tipodocumentoID',
    targetId:'id'
});

TipoDocumento.belongsTo(InformacionUsuario,{
    foreignKey:'tipodocumentoID',
    sourceKey:'id'
});