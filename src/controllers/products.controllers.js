import { productService } from "../services/index.js"
import { getCursoMock } from "../utils/productsMock.js"
import fs from 'fs'


export class ProductController {    
    constructor() {
        this.service = productService
    }

    getProducts = async (req, res) => {            
        try {
            const { cid } = req.query
            const cursos = await this.service.getItems(cid ? { category: cid  } : {})
            res.send({status: 'success', data: cursos})
            
        } catch (error) {
            console.log('Error en getProducts', error)
        }
    }

    getProduct = async (req, res) => {
        try {
            const { id } = req.params
            const curso = await this.service.getItem(id)
            if (!curso) return res.status(404).send({ status: 'error', error: 'Producto no encontrado'})            
            
            res.send({status: 'success', data: curso})
        } catch (error) {
            console.log('Error en getProduct', error)
        }       
    }

    getProductsMock = async (req, res) => {
        const cursos = []
        for (let i = 0; i < 5000 ; i++) {
            cursos.push(getCursoMock())        
        }        
        const write = await fs.promises.writeFile('./cursos.json', JSON.stringify(cursos, null, 2), 'utf8')
        console.log('Cursos escritos en el archivo')
        res.send({status: 'success', data: cursos})
    }
} 