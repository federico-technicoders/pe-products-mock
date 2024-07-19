import { userService } from "../services/index.js"
import { comparePassword, createHash } from "../utils/bcrypt.js"


export class SessionController {
    constructor() {
        this.userService = userService
    }

    register = async (req, res, next) => {
        try {
            const userBody = req.body           
            if (!userBody.email || !userBody.password) return res.status(400).send({ status: 'error', error: 'Email and password are required'})                      
            const userFound = await this.userService.getUser({email: userBody.email})
            if (userFound) return res.status(400).send({ status: 'error', error: 'User already exists'})            
            const userResponse = await this.userService.createUser({
                first_name: userBody.first_name, 
                first_name: userBody.last_name, 
                password: createHash(userBody.password), 
                email: userBody.email
            })
            const { password, ...user } = userResponse._doc            
            res.status(201).send({status: 'success', data: user})
        } catch (error) {
            console.error(error)
            next(error)
        }
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                return res.status(400).send({ status: 'error', error: 'Email and password are required'})
            }

            const userFound = await this.userService.getUser({email})
            
            if (!comparePassword(password, { password: userFound.password })) {
                return res.status(400).send({ status: 'error', error: 'Invalid credentials'})
            }

            const { password: pass, ...user } = userFound._doc

            res.status(200).send({status: 'success', data: user})
        } catch (error) {
            console.error(error)
            next(error)
        }
    }

    logout = async (req, res, next) => {
        try {
            const { email } = req.body
            if (!email) {
                return res.status(400).send({ status: 'error', error: 'Email is required'})
            }

            await this.userService.logout(email)
            res.status(200).send({status: 'success', data: 'User logged out'})
        } catch (error) {
            console.error(error)
            next(error)
        }
    }
} 