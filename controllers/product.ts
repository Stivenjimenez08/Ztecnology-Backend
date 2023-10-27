import { Request, Response } from 'express';
import Product from '../models/product'

export const consultProduct =async (req:Request, res:Response) => {
    
    const products= await Product.findAll({

        attributes:['name', 'detail', 'stock', 'price'], 
        where:{
            state: 1
        }
    })

    res.status(200).json({
        msg: 'Todos los productos',
        products
    }) 
}

export const productByName = async(req:Request, res: Response) => {
    
    const {name}=req.body

    const products = await Product.findAll({
        where:{
            name
        }
    })

    if (products) { // preguntar como hacer para que compare el name con el producto
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

    const { name, detail, stock, price}= req.body

    const products = await Product.create({name, detail, stock, price})

    res.status(200).json({

        msg: 'Se ha creado un nuevo producto',
        products
    }) 
}

export const updateProduct = async (req: Request, res: Response)=>{
    
    const {id, name, detail, stock, price}= req.body

    const products= await Product.update({name, detail, stock, price}, {
        where:{
            id
        }
    })

    res.status(200).json({

        msg: `Se ha modificado el producto ${name}`
    }) 
}

//para los productos no piden delete, preguntar si se puede hacer
