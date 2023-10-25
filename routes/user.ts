import{ Router } from 'express';
import {createUser, updateUser, deleteUser, cosultUser, userByName} from '../controllers/user'
const router = Router()

router.get('/consultUser', cosultUser)
router.get('/UserByName', userByName)
router.post('/createUser', createUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser/:id', deleteUser)

router.get('*', (req, res) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router