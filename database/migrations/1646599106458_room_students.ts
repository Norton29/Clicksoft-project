import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RoomStudents extends BaseSchema {
  protected tableName = 'room_students'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_id').unsigned().references('students.id')
      table.integer('room_id').unsigned().references('rooms.id')
      table.unique(['student_id', 'room_id'])
      table.integer('room_number')
      table.integer('capacity')
      table.boolean('vacancy').notNullable().unique()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
