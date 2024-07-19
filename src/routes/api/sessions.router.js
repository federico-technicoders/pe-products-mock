import { Router } from 'express'
import { SessionController } from '../../controllers/sessions.controller.js'

const router = Router()
const {
    register,
    login,
    logout
} = new SessionController()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', (req, res) => {})

export default router