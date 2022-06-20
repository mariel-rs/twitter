const UserService = require('./../../app/services/UserService')

describe("Unit tests for UserService", () => {
    test("1. Create a new user using the UserService", () =>{

        const user = UserService.create(1, "marielrs", "Mariel")
    
        expect(user.username).toBe("marielrs")
        expect(user.name).toBe("Mariel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })


})