import { Router } from 'express' 
import productsRouter from './api/products.router.js'
import userRouter from './api/users.router.js'
import sessionsRouter from './api/sessions.router.js'

const router = Router()

router.get('/', (req, res)=>{
    res.send('Technicoders Company')
})

router.use('/api/products', productsRouter)
router.use('/api/users', userRouter)
router.use('/api/sessions', sessionsRouter)

router.use('*', (req, res) => {
    res.status(404).send({status: 'error', error: 'Not found endpoint'})
})

// errors 
router.use((err, req, res, next) => {
    if (err) {
        res.status(500).send({status: 'error', error: err.message})
    }
    next()
})

export default router

    