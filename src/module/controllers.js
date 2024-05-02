const ClientController = require('./client/controllers/client.controller')

const Router = Object.assign({},{
    Client:ClientController,
    Default: (_,response) => {
        response.write('Hello !')
        response.end()
    }
})


module.exports = Router
