import { Request, Response } from 'express';
import Product from '../models/product'

export const consultProduct =async (req:Request, res:Response) => {
    
    const products= await Product.findAll({

        attributes:['id','name', 'description', 'stock', 'price'], 
        where:{
            state: 1
        }
    })

    res.status(200).json({
        msg: 'Todos los productos',
        products
    }) 
}

export const productById = async(req:Request, res: Response) => {
    
    const {id}=req.params

    const products = await Product.findByPk(id)

    if (products) { 
        res.status(200).json({
        products
        })
    } else {
        res.status(400).json({
            msg: 'El producto no existe'
        })
    }
}

export const createProduct = async (req: Request, res: Response) =>{

    const { name, description, stock, price}= req.body

    const products = await Product.create({name, description, stock, price})

    res.status(200).json({

        msg: 'Se ha creado un nuevo producto',
        products
    }) 
}

export const updateProduct = async (req: Request, res: Response)=>{
    
    const {id, name, description, stock, price}= req.body

    const products= await Product.update({name, description, stock, price}, {
        where:{
            id
        }
    })

    res.status(200).json({

        msg: `Se ha modificado el producto ${name}`
    }) 
}