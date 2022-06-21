const User = require("./../../app/models/User")

describe("Unit tests for User class", () => {
    test("Create a User object", () => {
        
        const user = new User(1, "marielrs", "Mariel", "bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("marielrs")
        expect(user.name).toBe("Mariel")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test("Verify getters", () => {
        
        const user = new User(1, "marielrs", "Mariel", "bio")

        expect(user.getUsername).toBe("marielrs")
        expect(user.getBio).toBe("bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test("Verify setters", () => {

        const user = new User(1, "marielrs", "Mariel", "bio")
        user.setUsername = "chiclez"
        user.setBio = "new Bio"

        expect(user.username).toBe("chiclez")
        expect(user.bio).toBe("new Bio")
    })

})