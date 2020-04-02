'use strict'

const Enterprise = use("App/Models/Enterprise");

class EnterpriseController {

  async index({ auth }) {
    const enterprises = Enterprise.query()
      .where("user_id", "=", auth.user.id)
      .fetch();

    return enterprises;
  }

  async store({ request, auth }) {
    const user_id = auth.user.id;

    const { name } = request.all();

    const enterprise = await Enterprise.create({ user_id, name });

    return enterprise;
  }

  async show({ params }) {
    const enterprise = await Enterprise.findOrFail(params.id);

    await enterprise.load("sectors");

    return enterprise;
  }

  async update({ params, request }) {
    const enterprise = await Enterprise.findOrFail(params.id);

    const data = request.only(["name"]);

    enterprise.merge(data);

    await enterprise.save();

    return enterprise;
  }

  async destroy({ params }) {
    const enterprise = await Enterprise.findOrFail(params.id);

    await enterprise.delete();

    return true;
  }
}

module.exports = EnterpriseController
