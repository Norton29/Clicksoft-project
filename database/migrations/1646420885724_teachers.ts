import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teachers extends BaseSchema {
  protected tableName = 'teachers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.integer('registration')
      table.date('birth_date')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
