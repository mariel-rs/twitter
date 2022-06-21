const UserService = require("./../services/UserService")

class UserView{

    static createUser(payload){
        if(payload === null){
            console.log("Payload is null")
            return{error: "payload no existe"}
        }
        else if(typeof payload.username === 'string' && typeof payload.name == 'string' && typeof payload.id === 'number'){
            return UserService.create(payload.id, payload.username, payload.name)
        }
        else{
            return{error: "necesitan tener un valor válido"}
        }
    }

}

module.exports = UserView