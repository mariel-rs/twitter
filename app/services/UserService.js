const User = require("./../models/User")

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "no bio")
    }

    static getInfo(User){
        return Object.values(User)
    }

    static updateUsername(User, newUsername){
        // Update username attribute using the setter
        User.setUsername = newUsername
    }

    static getAllUsernames(listOfUsers){
        // Get list of usernames
        const allUsernames = listOfUsers.map((user) => user.username)

        return allUsernames
    }
}

module.exports = UserService