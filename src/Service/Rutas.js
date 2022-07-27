import express from "express";
import CiudadRouter from '../Controller/Ciudad/CiudadRouter.js';
import ContactoRouter from '../Controller/Contacto/ContactoRouter.js';
import DireccionRouter from '../Controller/Direccion/DireccionRouter.js';
import RoleRouter from '../Controller/Role/RoleRouter.js';
import TipoDocumentoRouter from '../Controller/TipoDocumento/TipoDocumentoRouter.js';
import UsuarioRouter from '../Controller/Usuario/UsuarioRouter.js';
import InformacionUsuarioRouter from '../Controller/Usuario/InformacionUsuariosRouter.js';


const rutas = express();

rutas.use("/ciudad", CiudadRouter);
rutas.use("/contacto", ContactoRouter);
rutas.use("/direccion", DireccionRouter);
rutas.use("/role", RoleRouter);
rutas.use("/tipodocumento", TipoDocumentoRouter);
rutas.use("/usuario", UsuarioRouter);
rutas.use("informacion-usuario", InformacionUsuarioRouter);

export default rutas;