'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sector extends Model {
  enterprise() {
    return this.belongsTo('App/Models/Enterprise')
  }

  residues() {
    return this.hasMany("App/Models/Residue")
  }
}

module.exports = Sector
