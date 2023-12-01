import{ Router } from 'express';
import {createQuote, updateQuote, consultQuote, QuoteById} from '../controllers/quote'
const router = Router()

router.get('/consultQuote', consultQuote)
router.get('/QuoteById/:id', QuoteById)
router.post('/createQuote', createQuote)
router.put('/updateQuote',updateQuote)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router