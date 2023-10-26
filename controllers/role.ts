import { Request, Response } from 'express';
import Rol from '../models/role'

export const consultRol= async (req:Request, res:Response)=>{

    const Role= await Rol.findAll({
        attributes:['name','description']
    })
    res.status(200).json({
        msg: "Roles",
        Role
    })
}

export const createRol = async(req:Request, res:Response)=>{

    const {name, description}= req.body
    const Role= await Rol.create({name, description})

    res.status(200).json({

        msg: 'Se ha creado un nuevo rol',
        Role
    }) 
}

export const updateRol = async(req:Request, res:Response)=>{
    
    const {id}= req.params
    const {name, description}= req.body

    const Role= await Rol.update({name, description},{
        where:{
            id
        }
    })
    res.status(200).json({

        msg: `Se ha modificado el rol de ${name}`,
        Role
    }) 
}

export const deleteRol = async(req:Request, res:Response)=>{

    const {name}= req.params

    await Rol.destroy({
        where:{
            name
        }
    })
    res.status(200).json({
        msg: `se elimino el rol: ${name}`
    }) 
}