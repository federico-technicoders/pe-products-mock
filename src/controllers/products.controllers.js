import { randomUUID } from 'crypto'
import { faker } from '@faker-js/faker'

const getCursoMock = () => ({
    id: randomUUID(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    duration: parseInt(faker.number.int()),
    author: faker.person.fullName()
})

export class ProductController {
    getProducts = async (req, res) => {
        const cursos = []
        for (let i = 0; i < 20 ; i++) {
            cursos.push(getCursoMock())        
        }
        res.send({status: 'success', payload: cursos})
    }

    getProduct = async (req, res) => {
        const curso = getCursoMock()
       
        res.send({status: 'success', payload: curso})
    }
} 