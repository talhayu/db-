import { EntityBase } from "src/base/base.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')
export class UserEntity  extends EntityBase{
    // @PrimaryGeneratedColumn()
    // id:number

    @Column()
    name:string

    @Column()
    age:number
}
