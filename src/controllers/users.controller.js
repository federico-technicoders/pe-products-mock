import { userService } from "../services/index.js"

export class UserController {
    constructor() {
        this.userService = userService
    }
    
    getUsers = async (req, res, next) => {
        try {
            const users = await this.userService.getUsers()
            res.json(users)            
        } catch (error) {
            console.error('Error:', error)
            next(error)            
        }
    }

    getUser = async (req, res, next) => {
        try {
            const { id } = req.params
            const user = await this.userService.getUser(id)
            res.json(user)
        } catch (error) {
            console.error('Error:', error)
            next(error)
        }
    }

    createUser = async (req, res, next) => {
        try {
            const userNew = req.body
            const user = await this.userService.createUser(userNew)
            res.json(user)
        } catch (error) {
            console.error('Error:', error)
            next(error)
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const { id } = req.params
            const userUpdate = req.body
            const user = await this.userService.updateUser(id, userUpdate)
            res.json(user)
        } catch (error) {
            console.error('Error:', error)
            next(error)
        }
    }

    deleteUser = async (req, res, next) => {
        try {
            const { id } = req.params
            const user = await this.userService.deleteUser(id)
            res.json(user)
        } catch (error) {
            console.error('Error:', error)
            next(error)
        }
    }
}