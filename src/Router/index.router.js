const Router = require('../module/client/controllers/index.js')
const DEFAULT_CONTENT_TYPE = require('../contants/index.contants.js')

const handler = (request, response) => {
    const {url, method} = request;
    const [first, route, id] = url.split('/')

    request.queryString = {id: isNaN(id) ? id : Number(id)}

    const key = `/${route}:${method.toLowerCase()}`

    const chosen = Router.Client[key] || Router.Default
    return chosen(request, response)
}


module.exports = handler