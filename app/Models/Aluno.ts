
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column ()
  public Nome: String

  @column()
    public email:String

  @column()
  public Matrícula: BigInt

  @column()
  public dataDeNascimento: Date

  

}
