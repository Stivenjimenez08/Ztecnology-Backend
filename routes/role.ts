import { Router } from 'express';
import {consultRol} from '../controllers/role'
const router= Router()

router.get('/consultRol',consultRol)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router