const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const roomScheme = new Schema({
    type: String,
    s_type: String,
    price: Number,
    comment: String,
    image: String
});
module.exports = mongoose.model("Room", roomScheme);