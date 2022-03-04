import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Professores extends BaseSchema {
  protected tableName = 'professores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nome')
      table.string('email')
      table.integer('Matrícula')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
