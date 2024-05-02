class ClientService {
    constructor({clientRepository}){
        this.clientRepository = clientRepository
    }

    async list(){
        return this.clientRepository.list()
    }

    async find(itemId){
        return this.clientRepository.find(itemId)
    }

    async create(data){
        return this.clientRepository.create(data)
    }
}

module.exports = ClientService