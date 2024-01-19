import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

export class UserController {
   @Get("/users")
    getAll() {
        return AppDataSource.manager.find(User)
    }
}