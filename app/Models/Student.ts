
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Room from './Room'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @manyToMany(() => Room,{
    pivotTable: 'room_students'
  })
  public room: ManyToMany<typeof Room>

  @column ()
  public name: String

  @column()
  public email:String

  @column()
  public registration: BigInt

  @column()
  public birth_date: Date

}
