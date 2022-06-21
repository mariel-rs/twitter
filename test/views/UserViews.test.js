const UserView = require("./../../app/views/UserView")

describe("Unit tests for UserView", () =>{
    test("1. Return an error when creating a user with null payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch("payload no existe")
    })

    test("2. Return an error when filling the user attributes with wrong data types", () =>{
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch("necesitan tener un valor válido")
    })

    test("3. Return an error when creating the User with missing information", () =>{
        const payload = {username: "usern"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch("necesitan tener un valor válido")
    })

    test("4. Create User passing a valid payload ", () =>{
        const payload = {username: "usern", name: "Name of user", id: 1}
        const result = UserView.createUser(payload)
        expect(result.username).toBe("usern")
        expect(result.name).toBe("Name of user")
        expect(result.id).toBe(1)
    })
})