
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
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
