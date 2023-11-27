import { Request, Response } from 'express';
import Customer from '../models/customer'

export const cosultCustomer = async(req: Request, res: Response)=> {

    const customers= await Customer.findAll({
        attributes:['id','names', 'nit', 'email','address'],
        where:{
            state:1
        }
    })

    res.status(200).json({
        msg: " clientes ",
        customers
    })
}

export const customerById = async(req: Request, res: Response)=>{

    const {id}=req.body

    const customers = await Customer.findAll({
        where:{
            id
        }
    })

    if (customers) {
        res.status(200).json({
            customers
        })
    } else {
        res.status(400).json({
            msg: 'El cliente no existe'
        })
    }
}

export const createCustomer = async(req:Request, res:Response)=>{

    const {names, nit, email, address}= req.body

    const customers= await Customer.create({names, nit, email, address})

    res.status(200).json({

        msg: 'Se ha creado un nuevo cliente',
        customers
    }) 
}

export const updateCustomer = async(req:Request, res:Response)=>{
    
    const {id, names, nit, email, address}= req.body

    const Customers= await Customer.update({names, nit, email, address},{
        where:{
            id
        }
    })
    res.status(200).json({

        msg: `Se ha modificado el cliente con Id #${id}`,
        Customers
    }) 
}

export const deleteCustomer = async(req:Request, res:Response)=>{

    const {id}= req.params

    await Customer.destroy({
        where:{
            id
        }
    })
    res.status(200).json({
        msg: `se elimino el cliente con el id: ${id}`
    }) 
}


