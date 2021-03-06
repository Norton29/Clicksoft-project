import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rooms extends BaseSchema {
  protected tableName = 'rooms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('teacher_id')
        .unsigned()
        .references('teachers.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('room_number')
      table.integer('capacity')
      table.boolean('vacancy')
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
