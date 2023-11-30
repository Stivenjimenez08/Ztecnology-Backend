import {Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import User from '../models/user'
import generateJWT from '../helpers/generate-jwt';

export const login= async(req: Request, res: Response) =>{

    const {email,password}= req.body
    try {
    
    const login = await User.findOne({
        where: {
            email
        }
    })
    if (!login){
        return res.status(400).json({
            msg: 'El usuario no esta registrado'
        })
    }

    const valpassword = bcrypt.compareSync( password ,login.dataValues.password)

    const rol= console.log(login.dataValues.idRol)

    
    if (!valpassword){
        return res.status(400).json({
            msg: 'Usuario/ contrasena invalido'
        })
    }
    if (!login.dataValues.state){
        return res.status(400).json({
            msg: 'Usuario inactivo' 
        })
    }

    const token = await generateJWT(login.dataValues.id)
    console.log(token)

    return res.status(200).json({
        user: login,
        token
    })

    } catch (error) {
        console.log(error)
    }
}

export const logout = (req: Request, res: Response) => {
    return res.status(200).json({
        msg:"El usuario cerro sesion correctamente"
    })
}

export const validateToken = async(req: Request, res: Response) => {
    const {id} = req.body
    console.log('id', id)

    const user = await User.findByPk(id)
    if(!user){
        return res.status(200).json({
            user,
            msg: 'El usuario no existe'
        })
    }

    return res.status(200).json({
        user, 
        msg:'Token validado'
    })
}

