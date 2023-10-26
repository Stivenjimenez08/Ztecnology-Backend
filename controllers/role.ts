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