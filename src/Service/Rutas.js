import express from "express";
import CiudadRouter from '../Controller/Ciudad/CiudadRouter.js';

const rutas = express();

rutas.use("/ciudad", CiudadRouter);

export default rutas;