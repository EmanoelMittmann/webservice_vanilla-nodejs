const instance = require("../factories/client.factories");

class CreateClientUseCase {
    constructor(){
        this.clientRepository = instance.generateInstance()
    }

    async execute(req){
        for await ( const data of req){
            const item = JSON.parse(data)
            const entity = new Client(item)
            const {error,valid} = entity.isValid()
            if(!valid){
                return {
                    error: error.join(',')
                }
            }

            await this.clientRepository.create(entity)
        }
    }
}

module.exports = CreateClientUseCase