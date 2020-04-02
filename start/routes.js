'use strict'

const Route = use('Route')

Route.post("/users", "UserController.store");

Route.post("/sessions", "SessionController.authenticate");

Route.resource("enterprises", "EnterpriseController")
  .apiOnly()
  .middleware("auth");

Route.resource("sectors", "SectorController")
  .apiOnly()
  .middleware("auth");

Route.resource("residues", "ResidueController")
  .apiOnly()
  .middleware("auth");
