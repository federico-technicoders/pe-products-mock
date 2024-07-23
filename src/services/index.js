import { ProductDaoMongo } from "../daos/MONGO/productsDao.mongo.js"
import { ProductRepository } from "../repositories/products.repository.js"

import { UserDeoMongo } from "../daos/MONGO/usersDao.mongo.js"
import { UserRepository } from "../repositories/users.repository.js"


export const userService = new UserRepository(new UserDeoMongo())

export const productService = new ProductRepository(new ProductDaoMongo())