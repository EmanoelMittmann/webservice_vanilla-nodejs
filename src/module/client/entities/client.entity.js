
class Client {
    constructor({name, cpf, status}){
        this.id = Math.floor(Math.random() * 100) + Date.now()
        this.name = name,
        this.cpf = cpf,
        this.status = status
    }

    isValid(){
        const propNames = Object.getOwnPropertyNames(this)
        const amountInvalid = propNames
            .map((property) => (!!this[property]) ? null : `${property} is missing!`)
            .filter(item => !!item)

        return {
            valid: amountInvalid.length === 0,
            error: amountInvalid
        }
    }
}

module.exports = Client