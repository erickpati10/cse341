const routes = require("express").Router();

const mycontroller = require("../controllers");

routes.get("/", mycontroller.awesomeFunction);
routes.get("/name", mycontroller.fullName);

module.exports = routes;
