const instance = require('../factories/client.factories')

class GetByIdClientUseCase {
    constructor(){
        this.clientRepository = instance.generateInstance()
    }

    async execute(id){
        const findClient = await this.clientRepository.find(id)

        if(!findClient) return null

        return findClient
    }
}

module.exports = GetByIdClientUseCase



