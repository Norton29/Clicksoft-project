import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Alunos extends BaseSchema {
  protected tableName = 'alunos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nome')
      table.string('email')
      table.integer('Matrícula')
      table.date('Data de nascimento')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
