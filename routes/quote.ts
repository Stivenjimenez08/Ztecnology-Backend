import{ Router } from 'express';
import {createQuote, updateQuote, consultQuote, QuoteBySerial} from '../controllers/quote'
const router = Router()

router.get('/consultQuote', consultQuote)
router.get('/QuoteBySerial', QuoteBySerial)
router.post('/createQuote', createQuote)
router.put('/updateQuote',updateQuote)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router