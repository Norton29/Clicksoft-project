
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Room from './Room'

export default class Teacher extends BaseModel {
  @hasMany(() => Room)
  public room: HasMany<typeof Room>

  @column({ isPrimary: true })
  public id: number

  @column ()
  public name: String

  @column()
  public email:String

  @column()
  public registration: BigInt

  @column()
  public birth_date: Date

}
