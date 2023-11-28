import { Request, Response } from 'express';
import Quote from '../models/quote'

export const createQuote = async( req:Request, res:Response)=>{

    const {date, idCustomer, serial, idProduct, quantity, discount, idUser, subTotal, total}= req.body

    const Quotes = await Quote.create({date, idCustomer, serial, idProduct, quantity, discount, idUser, subTotal, total})

    res.status(200).json({
        msg: `se ha una cotizacion con el Id: ${Quotes.dataValues.id}`
    }) 
}

export const updateQuote = async( req:Request, res:Response)=>{

    const {id ,date, idCustomer, serial, idProduct, quantity, discount, idUser, subTotal, total}= req.body

    const Quotes = await Quote.update({date, idCustomer, serial, idProduct, quantity, discount, idUser, subTotal, total}, {
        where:{
            id
        }
    })

    res.status(200).json({
        msg: `se ha actualizado la cotizacion con el Id: ${id}`
    }) 
}

export const consultQuote = async( req:Request, res:Response)=>{

    const Quotes = await Quote.findAll({
        attributes:['id','date','idCustomer', 'serial', 'idProduct', 'quantity', 'discount', 'idUser', 'subTotal','total','state']
    })
    res.status(200).json({
        msg: " cotizaciones ",
        Quotes
})
}

export const QuoteById = async( req:Request, res:Response)=>{

    
    const {id}=req.body

    const Quotes = await Quote.findAll({
        where:{
            id
        }
    })

    if (Quotes) { // preguntar como hacer para que compare el names con el users
        res.status(200).json({
            Quotes
        })
    } else {
        res.status(400).json({
            msg: 'La cotizacion no existe'
        })
    }
}
