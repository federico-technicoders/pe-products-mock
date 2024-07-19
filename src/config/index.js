import { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    console.log('Base de datos conectada')
    return await connect(process.env.MONGO_URI)
}