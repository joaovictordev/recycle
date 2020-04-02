'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Residue extends Model {
  user() {
    return this.belongsTo("App/Models/User")
  }

  enterprise() {
    return this.belongsTo("App/Models/Enterprise")
  }

  sector() {
    return this.belongsTo("App/Models/Sector")
  }
}

module.exports = Residue
