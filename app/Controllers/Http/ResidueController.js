'use strict'

const Residue = use("App/Models/Residue");

class ResidueController {

  async index({ auth }) {
    const residues = Residue.query()
      .where("user_id", "=", auth.user.id)
      .fetch();

    return residues;
  }

  async store({ request, auth }) {
    const user_id = auth.user.id;

    const {
      enterprise_id,
      sector_id,
      weight,
      volume,
      description,
      classification,
      destination,
      collected,
      accountable,
      rg_accountable
    } = request.all();

    const residue = await Residue.create({
      user_id,
      enterprise_id,
      sector_id,
      weight,
      volume,
      description,
      classification,
      destination,
      collected,
      accountable,
      rg_accountable
    });

    return residue;
  }

  async show({ params }) {
    const residue = await Residue.findOrFail(params.id);

    await residue.load("enterprise");
    await residue.load("sector");

    return residue;
  }

  async update({ params, request }) {
    const residue = await Residue.findOrFail(params.id);

    const {
      weight,
      volume,
      description,
      classification,
      destination,
      collected,
      accountable,
      rg_accountable
    } = request.all();

    residue.merge({
      weight,
      volume,
      description,
      classification,
      destination,
      collected,
      accountable,
      rg_accountable
    });

    await residue.save();

    return residue;
  }

  async destroy({ params }) {
    const residue = await Residue.findOrFail(params.id);

    await residue.delete();

    return true;
  }
}

module.exports = ResidueController
