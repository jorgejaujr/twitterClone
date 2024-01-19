import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Timber"
    user.email = "blah@ig.com.br"
    user.country = "BR"
    user.profilePhotoUrl = "BR"
    user.headerPhotoUrl = ""
    user.birth = new Date("2016-11-18")
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.uuid)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
