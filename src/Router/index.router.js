const Router = require('../module/controllers.js')

const handler = (request, response) => {
    const {url, method} = request;
    const [first, route, id] = url.split('/')

    request.queryString = {id: isNaN(id) ? id : Number(id)}

    const key = `/${route}:${method.toLowerCase()}`

    const chosen = Router.Client[key] || Router.Default
    return chosen(request, response)
}


module.exports = handler