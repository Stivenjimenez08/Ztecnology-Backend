import { Request,Response } from 'express'
import bcrypt from 'bcryptjs'
import user from '../models/user'
import Rol from '../models/role'


export const cosultUser = async(req: Request, res: Response)=> {

    console.log(req.body.id )
    
    const users= await user.findAll({
        attributes:['id','names', 'lastName', 'email', 'password'],
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
        users
    })
}

export const userById = async(req: Request, res: Response) =>{

    const {id}=req.params

    const users = await user.findByPk(id)

    if (users) {
        res.status(200).json({
            users
        })
    } else {
        res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
}

export const createUser = async(req: Request, res: Response) =>{

    let { names, lastName, email, password,idRol} = req.body

    const valemail = await user.findOne({
        where: {
            email
        }
    })
    if(valemail){
        return res.status(200).json({
            msg: `el correo ${email} ya ese encuentra registrado`
        }) 
    }
    
    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const users = await user.create({names, lastName, email, password, idRol})

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

    res.status(200).json({
        msg: `se elimino el usuario con el Id: ${id}`
    }) 
}

// export const deleteUser = async(req: Request, res:Response)=>{

//     const {id}= req.params

//     const state= 0 implementar funcion para decidir si desactivar o eliminar directamente 
//     await Usuario.update({state},{
//         where:{
//             id
//         }
//     })

//     res.status(200).json({
//         msg: `se elimino el usuario con el Id: ${id}`
//     }) 
// }