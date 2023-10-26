import { Request,Response } from 'express'
import bcrypt from 'bcryptjs'
import user from '../models/user'
import Rol from '../models/role'


export const createUser = async(req: Request, res: Response) =>{

    let { names, lastName, email, password, photo, idRol, state} = req.body

    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const users = await user.create({names, lastName, email, password, photo, idRol, state})

    res.status(200).json({
        msg: `se ha registrado un usuario con el Id: ${users.dataValues.id}`
    }) 
}

export const updateUser= async(req: Request, res: Response)=>{
 
    let {id, names, lastName, email, password, photo, idRol, state} = req.body;

    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const users= await user.update({ names, lastName, email, password, photo, idRol, state},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `se ha actualizado el usuario con el Id: ${id}`
    }) 
}

export const deleteUser = async(req: Request, res:Response)=>{

    const {id}= req.params
    
    await user.destroy({
        where: {id}
    })

    // const state= 0 implementar funcion para decidir si desactivar o eliminar directamente 
    // await Usuario.update({state},{
    //     where:{
    //         id
    //     }
    // })

    res.status(200).json({
        msg: `se elimino el usuario con el Id: ${id}`
    }) 
}

export const cosultUser = async(req: Request, res: Response)=> {
    const users= await user.findAll({
        attributes:['names', 'lastName', 'email'],
        include:[{
            model: Rol,
            attributes: ['name']
        }],
        where:{
            state:1
        }
    })

    res.status(200).json({
        msg: " user's ",
        users//: users //si se llaman igual se deja solo 1
    })
}

export const userByName = async(req: Request, res: Response) =>{

    const {names}=req.body

    const users = await user.findAll({
        where:{
            names
        }
    })

    if (users) { // preguntar como hacer para que compare el names con el users
        res.status(200).json({
            users
        })
    } else {
        res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
}
