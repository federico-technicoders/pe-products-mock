import { userModel } from "./models/users.model.js"

export class UserDeoMongo {
    constructor(){
        this.model = userModel
    }

    getAll = async () => await this.model.find()
    getBy = async filter => await this.model.findOne(filter)
    create = async userNew => await this.model.create(userNew)
    update = async (id, userUpdate) => await this.model.findByIdAndUpdate(id, userUpdate, {new: true})
    delete = async id => await this.model.findByIdAndDelete(id, {new: true}) 
}