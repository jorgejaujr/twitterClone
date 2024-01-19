import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import { PostImage } from "./entity/PostImage"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234567a",
    database: "tweetExample",
    synchronize: true,
    logging: false,
    entities: [User,Post,PostImage],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(() => {
    console.log("Data source has been initialized")
}).catch((err) => {
    console.log("Error during initialization, ",err )
})