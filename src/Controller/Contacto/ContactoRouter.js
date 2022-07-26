import { Router } from "express";

const router = Router();

router.get("/mostrar", (req,res) =>{
    res.send('Lista de contactos');
});


export default router;