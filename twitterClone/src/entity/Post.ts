import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("post")
export class Post {

    @PrimaryGeneratedColumn()
    uuid: number

    @Column({ type: "varchar", length: 200, unique: false })
    text: string

    @Column()
    mainPostUuid: number

    @Column()
    userUuid: number

    @Column()
    createdAt: Date

    @Column({ nullable: false, default: new Date() })
    updatedAt: Date

    @Column({ nullable: true, default: new Date()})
    deletedAt: Date

}
