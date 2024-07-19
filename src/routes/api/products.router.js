import { Router } from 'express'
import { ProductController } from '../../controllers/products.controllers.js'


const router = Router()
const {
    getProducts,
    getProduct
} = new ProductController()


router.get('/', getProducts)
router.get('/:pid', getProduct)

export default router
