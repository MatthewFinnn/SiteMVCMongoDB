const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const roomRouter = require("./routes/roomRouter.js");
const newsRouter = require("./routes/newsRouter.js");
const contactRouter = require("./routes/contactRouter.js");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));
 
app.use("/users", userRouter);
app.use("/rooms", roomRouter);
app.use("/news", newsRouter);
app.use("/contact", contactRouter);
app.use("/", homeRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Я жду...");
    });
});