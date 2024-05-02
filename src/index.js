const http = require('http');
const handler = require('./Router/index.router.js')

class Main {
    constructor(handler){
        this.handler = handler
        this.port = process.env.port
    }

    init_application(){
        http.createServer((req,res) => this.handler(req,res))
            .listen(this.port,() => console.log('server running ' + this.port ))
    }
}

const main = new Main(handler)
 
main.init_application()
