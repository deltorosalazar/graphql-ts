import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => ID) // It exposes the field in the GraphQL Query
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    name: string

    @Field()
    @Column("text", {unique: true})
    email: string;

    @Column()
    password: string;
}