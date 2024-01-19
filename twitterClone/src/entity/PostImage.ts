import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//@Entity()
export class PostImage {

    @PrimaryGeneratedColumn()
    postUuid: number

    @Column()
    imageUrl: string

    @Column()
    createdAt: Date

}