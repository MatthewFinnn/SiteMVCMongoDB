const Rooms = require("../models/room.js");

exports.index = function (request, response) {
    Rooms.find({}, function(err, allRooms){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("index.hbs", {
            rooms: allRooms
        });

        // response.sendfile("views/index.html", {
        //     rooms: allRooms
        //  });
    });
};
exports.about = function (request, response) {
    response.send("О сайте");
};