'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Enterprise extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  sectors() {
    return this.hasMany("App/Models/Sector")
  }

  residues() {
    return this.hasMany("App/Models/Residue")
  }
}

module.exports = Enterprise
