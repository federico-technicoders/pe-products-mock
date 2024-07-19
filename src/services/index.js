import { UserDeoMongo } from "../daos/MONGO/usersDao.mongo.js"
import { UserRepository } from "../repositories/users.repository.js"

export const userService = new UserRepository(new UserDeoMongo())