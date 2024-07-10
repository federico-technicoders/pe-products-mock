import express from 'express'
import { randomUUID } from 'crypto'
import { faker } from '@faker-js/faker'
import cors from 'cors'
import dotenv from 'dotenv'
import logger from 'morgan'


const app = express()
const PORT = process.env.PORT || 8080
dotenv.config()

app.use(cors())
app.use(logger('dev'))

const getCursoMock = () => ({
    id: randomUUID(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    duration: parseInt(faker.number.int()),
    author: faker.person.fullName()
})

app.get('/', (req, res)=>{
    res.send('Technicoders Company')
})

app.get('/api/products', (req, res) => {
    const cursos = []
    for (let i = 0; i < 20 ; i++) {
        cursos.push(getCursoMock())        
    }
    res.send({status: 'success', payload: cursos})
})
app.get('/api/products/:pid', (req, res) => {
    const curso = getCursoMock()
   
    res.send({status: 'success', payload: curso})
})

app.use('*', (req, res) => {
    res.status(404).send({status: 'error', error: 'Not found endpoint'})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
