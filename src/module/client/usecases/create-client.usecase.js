import { generateInstance } from "../factories/client.factories";

export class CreateClientUseCase {
    constructor(){
        this.clientRepository = generateInstance()
    }

    async execute(req){
        for await ( const data of req){
            const item = JSON.parse(data)
            const entity = new Client(item)
            const {error,valid} = entity.isValid()
            if(!valid){
                res
            }
        }
    }
}