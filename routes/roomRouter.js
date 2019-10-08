const express = require("express");
const roomController = require("../controllers/roomController.js");
const roomRouter = express.Router();
 
roomRouter.get("/", roomController.index);
 
module.exports = roomRouter;