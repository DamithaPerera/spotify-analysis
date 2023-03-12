const {Router} = require('express');
const {analysisController} = require("./analysis.controller");
const routes = Router();


routes.get('/',  analysisController);

module.exports = routes;