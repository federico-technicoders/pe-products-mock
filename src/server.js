import express from 'express'

import cors from 'cors'

import logger from 'morgan'
import appRouter from './routes/index.js'
import { connectDB } from './config/index.js'

const app = express()
const PORT = process.env.PORT || 8080

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(appRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
