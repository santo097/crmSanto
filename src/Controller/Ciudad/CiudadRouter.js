import { Router } from "express";
import { mostrar} from "./CiudadController.js";
const router = Router();

router.get("/mostrar",  mostrar);

export default router;