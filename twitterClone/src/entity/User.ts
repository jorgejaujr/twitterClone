import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    uuid: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    country: string

    @Column()
    profilePhotoUrl: string

    @Column()
    headerPhotoUrl: string

    @Column()
    birth: Date

}

