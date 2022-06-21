/*

Crea una clase llamada `UserView` que servirá para interactuar con el modelo `User` 
a través de `userService`. Crea un método en esta clase llamado `create User` 
que sirva para crear un nuevo objeto user a partir de un `payload`, quiero decir 
un objeto que contenga información para crearlo.

Requerimientos:
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, 
o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave 
`error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un 
objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las 
siguientes propiedades: `username`, `id` y `name`.
 */

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