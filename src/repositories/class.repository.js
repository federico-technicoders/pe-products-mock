export class ClassRepository {
    constructor(dao){
        this.dao = dao
    }

    getItems = async filter => await this.dao.getAll(filter)
    getItem = async filter => await this.dao.getBy(filter)
    createItem = async itemNew => await this.dao.create(itemNew)
    updateItem = async (id, itemUpdate) => await this.dao.update(id, itemUpdate)
    deleteItem = async id => await this.dao.delete(id)
}