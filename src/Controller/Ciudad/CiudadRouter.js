import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar} from "./CiudadController.js";
const router = Router();

router.get("/mostrar",  mostrar);
router.post("/crear", crear);
router.get("/:id", buscarPorId);
router.put("/actualizar/:id", actualizar);
router.put("/inhabilitar/:id", inhabilitar);

export default router;