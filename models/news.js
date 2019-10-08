const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const newsScheme = new Schema({
    title: String,
    comment: String,
    image: String
});
module.exports = mongoose.model("News", newsScheme);