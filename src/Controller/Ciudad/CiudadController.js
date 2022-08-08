import { Ciudad } from "../../Model/CiudadModel.js";

export const mostrar = async (req,res) =>{
    try{
        const ciudad = await Ciudad.findAll({
            atributes:["id", "ciudad", "activo"]
        });
        if(!ciudad.length){
            return res.status(404).json('No existen datos de ciudad');
        }
        else{
            return res.status(200).json(ciudad);
        }
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export const crear = async (req,res) =>{
    try{
        const ciudad = await Ciudad.findOrCreate({
            where:{ciudad:req.body.ciudad},
            defaults:{
                activo:1,
            }
        });
        if(!ciudad.length){
            return res.status(200).json({
                message:'¡Ciudad agregada!'
            });
        }
        else{
            return res.status(302).json({
                message:'La ciudad ya fue agregada'
            });
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

export const buscarPorId = async(req,res) =>{
    try{
        const ciudad = await Ciudad.findByPk(req.params.id);
        if(!ciudad){
            return res.status(404).json({
                message:'No existe la ciudad'
            });
        } 
        else{
            return res.status(200).json({
                informacion:ciudad
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export const actualizar = async(req,res) =>{
    try{
        const ciudadBuscar = await Ciudad.findByPk(req.params.id);
        if(!ciudadBuscar){
            return res.status(404).json({
                message:'No existe la ciudad'
            });
        } 
        else{
            const ciudadActualizar = await Ciudad.update(
                {ciudad:req.body.ciudad},
                {where:{id:req.params.id}});
            return res.status(200).json({message:"Ciudad Actualizada"});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export const inhabilitar = async(req,res) =>{
    try{
        const ciudadBuscar = await Ciudad.findByPk(req.params.id);
        if(!ciudadBuscar){
            return res.status(404).json({
                message:'No existe la ciudad'
            });
        } 
        else{
            const ciudadActualizar = await Ciudad.update(
                {activo:0},
                {where:{id:req.params.id}});
            return res.status(200).json({message:"Ciudad inhabilitada"});
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}