import { EntityBase } from "src/base/base.entity"
import { Column, Entity } from "typeorm"
@Entity('teacher')

export class Taecher extends EntityBase {


    @Column()
    name:string

    @Column()
    age:number

    @Column()
    f_name:string
}


