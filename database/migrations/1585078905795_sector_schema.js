'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SectorSchema extends Schema {
  up() {
    this.create('sectors', (table) => {
      table.increments()
      table.integer("enterprise_id")
        .unsigned()
        .references("id")
        .inTable("enterprises")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.string("name").notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('sectors')
  }
}

module.exports = SectorSchema
