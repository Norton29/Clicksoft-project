
import { BaseModel, column , belongsTo, BelongsTo, ManyToMany, manyToMany} from '@ioc:Adonis/Lucid/Orm'
import Student from './Student'
import Teacher from './Teacher'

export default class Room extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @manyToMany(() => Student,{
      })
  public students: ManyToMany<typeof Student>
  
  @column ()
  public teacher_id: number

  @belongsTo(() => Teacher)
  public teacher: BelongsTo<typeof Teacher>

  @column ()
  public room_number: BigInt

  @column()
  public capacity: BigInt

  @column()
  public vacancy: Boolean

}
