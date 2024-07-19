export class UserRepository {
    constructor(dao){
        this.dao = dao
    }

    getUsers = async () => await this.dao.getAll()
    getUser = async filter => await this.dao.getBy(filter)
    createUser = async userNew => await this.dao.create(userNew)
    updateUser = async (id, userUpdate) => await this.dao.update(id, userUpdate)
    deleteUser = async id => await this.dao.delete(id)
}