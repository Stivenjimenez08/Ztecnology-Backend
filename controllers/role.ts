import { Request, Response } from 'express';
import Rol from '../models/role'

export const consultRol= async (req:Request, res:Response)=>{

    const Role= await Rol.findAll({
        attributes:['nameRol','rolDescription']
    })
    res.status(200).json({
        msg: "Roles",
        Role
    })
}

export const createRol = async(req:Request, res:Response)=>{

    const {nameRol, rolDescription}= req.body
    const Role= await Rol.create({nameRol, rolDescription})

    res.status(200).json({

        msg: 'Se ha creado un nuevo rol',
        Role
    }) 
}

export const updateRol = async(req:Request, res:Response)=>{
    
    const {id}= req.params
    const {nameRol, rolDescription}= req.body

    const Role= await Rol.update({nameRol, rolDescription},{
        where:{
            id
        }
    })
    res.status(200).json({

        msg: `Se ha modificado el rol con id ${nameRol}`,
        Role
    }) 
}

export const deleteRol = async(req:Request, res:Response)=>{

    const {nameRol}= req.params

    await Rol.destroy({
        where:{
            nameRol
        }
    })
    res.status(200).json({
        msg: `se elimino el rol: ${nameRol}`
    }) 
}