import {Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import user from '../models/user'
import generateJWT from '../helpers/generate-jwt';

export const login= async(req: Request, res: Response) =>{

    const {email,password}= req.body
    try {
    
    //verifica si el email existe
    const login = await user.findOne({
        where: {
            email
        }
    })
    if (!login){
        return res.status(400).json({
            msg: 'El usuario no esta registrado'
        })
    }

    //validacion de que la contrasena corresponde al usuario
    const valpassword = bcrypt.compareSync( password ,login.dataValues.password)// me compara la contrasena ligada al email con la contrasena encriptada
    
    if (!valpassword){
        return res.status(400).json({
            msg: 'Usuario/ contrasena invalido'
        })
    }
    if (!login.dataValues.state){
        return res.status(400).json({
            msg: 'Usuario inactivo' // y se desea, aqui se pone que si se quiere volver a activar de al boton aceptar 
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