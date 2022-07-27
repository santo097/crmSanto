import { Router } from "express";

const router = Router();

router.get("/mostrar", (req,res) =>{
    res.send("Informacion de los usuarios");
});

export default router;