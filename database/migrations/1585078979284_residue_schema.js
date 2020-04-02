'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResidueSchema extends Schema {
  up() {
    this.create('residues', (table) => {
      table.increments()
      table.integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.integer("enterprise_id")
        .unsigned()
        .references("id")
        .inTable("enterprises")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.integer("sector_id")
        .unsigned()
        .references("id")
        .inTable("sectors")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.float("weight", 3)
      table.float("volume", 3)
      table.string("description").notNullable()
      table.string("classification").notNullable()
      table.string("destination").notNullable()
      table.date("collected").notNullable()
      table.string("accountable").notNullable()
      table.string("rg_accountable").notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('residues')
  }
}

module.exports = ResidueSchema
