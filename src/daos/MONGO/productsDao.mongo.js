import { productModel } from "./models/products.model.js"

export class ProductDaoMongo {
    constructor() {
        this.model = productModel
    }

    getAll = async filter => await this.model.find(filter)
    getById = async filter => await this.model.findOne(filter)
    create = async productNew => await this.model.create(productNew)
    update = async (id, productUpdate) => await this.model.findByIdAndUpdate(id, productUpdate, {new: true})
    delete = async id => await this.model.findByIdAndDelete(id)
}

