const express = require("express");
const newsController = require("../controllers/newsController.js");
const newsRouter = express.Router();
 

newsRouter.use("/create", newsController.addNews);
newsRouter.use("/postnews", newsController.postNews);
newsRouter.use("/", newsController.getNews);
module.exports =newsRouter;