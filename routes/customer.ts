import { Router } from 'express';
import {cosultCustomer, customerByName, createCustomer, deleteCustomer, updateCustomer} from '../controllers/customer'
const router= Router()

router.get('/consultCustomer', cosultCustomer)
router.get('/customerByName', customerByName)
router.post('/createCustomer', createCustomer)
router.put('/updateCustomer', updateCustomer)
router.delete('/deleteCustomer', deleteCustomer)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router