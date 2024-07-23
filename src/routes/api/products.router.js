import { Router } from 'express'
import { ProductController } from '../../controllers/products.controllers.js'


const router = Router()
const {
    getProducts,
    getProduct,
    getProductsMock
} = new ProductController()


router.get('/', getProducts)
router.get('/:pid', getProduct)
router.get('/productsmock', getProductsMock)

export default router
