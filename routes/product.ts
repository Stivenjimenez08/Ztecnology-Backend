import { Router } from 'express';
import {consultProduct, productByName, createProduct, updateProduct} from '../controllers/product'
const router = Router()

router.get('/consultProduct', consultProduct)
router.get('/productByName', productByName)
router.post('/createProduct', createProduct)
router.put('/updateProduct', updateProduct)

router.get('*', (req, res) => {

    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router