const {readFile, writeFile} = require('fs/promises')

class ClientRepository {
    constructor({file}) {
        this.file = file
    }

    async _currentFileContent(){
        return JSON.parse(await readFile(this.file))
    }

    async list(){
        return await this._currentFileContent()
    }

    async find(itemId){
        const all = await this._currentFileContent()

        if(!itemId) {
            return { reason: 'id'}
        }

        return all.find(({id}) => itemId === id)
    }

    async create(data){
        const current = await this._currentFileContent()
        current.push(data)

        await writeFile(this.file, JSON.stringify(current))

        return data.id
    }
}

module.exports = ClientRepository;

const clientRepository = new ClientRepository({
    file: './database/data.json'
})

// clientRepository.create({id: 2, name: 'flavio'})
// clientRepository.find(1).then(console.log).catch((err) => console.log(err))