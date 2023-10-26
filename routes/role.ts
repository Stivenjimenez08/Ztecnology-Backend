import { Router } from 'express';
import {createRol, deleteRol, updateRol,consultRol} from '../controllers/role'
const router= Router()

router.get('/consultRol',consultRol)
router.post('/createRol', createRol)
router.put('/updateRol/:id', updateRol)
router.delete('/deleteRol/:name', deleteRol)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router