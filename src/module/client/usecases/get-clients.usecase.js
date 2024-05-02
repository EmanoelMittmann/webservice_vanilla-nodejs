const instance = require('../factories/client.factories')

class GetClientsUseCase {
    constructor(){
        this.clientRepository = instance.generateInstance()
    }

    async execute(){
        const data = await this.clientRepository.list()

        if(!data) return Array.caller()

        return data
    }
}

module.exports = GetClientsUseCase