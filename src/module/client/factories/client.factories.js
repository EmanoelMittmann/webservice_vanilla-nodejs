const Repository = require('./../repositories/client.repository')
const Service = require('../services/client.services')

const {join} = require('path')
const filename = join(__dirname, '../../../../database', 'data.json')

const generateInstance = () => {
    const clientRepository = new Repository({
        file: filename
    })

    const clientService = new Service({
        clientRepository
    })

    return clientService
}

module.exports = {generateInstance}

generateInstance().find().then(console.log)