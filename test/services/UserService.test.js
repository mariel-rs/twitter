const UserService = require('./../../app/services/UserService')

describe("Unit tests for UserService", () => {
    test("1. Create a new user using the UserService", () =>{

        const user = UserService.create(1, "marielrs", "Mariel")
    
        expect(user.username).toBe("marielrs")
        expect(user.name).toBe("Mariel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user attributes using the UserService", () => {
        const user = UserService.create(1, "marielrs", "Mariel")
        const userInfoList = UserService.getInfo(user)
        
        // Verify the list is filled with the user attributes
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("marielrs")
        expect(userInfoList[2]).toBe("Mariel")
        expect(userInfoList[3]).toBe("no bio")
    })

    test("3. Update username using the UserService", () => {
        const user = UserService.create(1, "marielrs", "Mariel")
        UserService.updateUsername(user, "chiclez")

        expect(user.username).toBe("chiclez")
    })

    test("4. Get usernames from list of users using the UserService", () =>{
        const user1 = UserService.create(1, "marielrs", "Mariel")
        const user2 = UserService.create(2, "chiclez", "Otro usuario")
        const user3 = UserService.create(3, "aleks", "Alex")

        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("marielrs")
        expect(usernames).toContain("chiclez")
        expect(usernames).toContain("aleks")
    })
})