'use strict'

const Sector = use("App/Models/Sector");

class SectorController {
  async index({ auth }) {
    const sectors = Sector.query()
      .where("user_id", "=", auth.user.id)
      .fetch();

    return sectors;
  }

  async store({ request }) {

    const { name, enterprise_id } = request.all();

    const sector = await Sector.create({ enterprise_id, name });

    return sector;
  }

  async update({ params, request }) {
    const sector = await Sector.findOrFail(params.id);

    const data = request.only(["name"]);

    sector.merge(data);

    await sector.save();

    return sector;
  }

  async destroy({ params }) {
    const sector = await Sector.findOrFail(params.id);

    await sector.delete();

    return true;
  }
}

module.exports = SectorController
