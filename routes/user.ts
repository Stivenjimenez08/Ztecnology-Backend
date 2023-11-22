import{ Router } from 'express';
import {createUser, updateUser, deleteUser, cosultUser, userById} from '../controllers/user'
import validateJWT from '../helpers/validate-jwt';
const router = Router()

router.get('/consultUser',validateJWT, cosultUser)
router.get('/UserById', userById)
router.post('/createUser', createUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser/:id', deleteUser)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router