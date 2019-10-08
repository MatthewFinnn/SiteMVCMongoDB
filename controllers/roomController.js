const Rooms = require("../models/room.js");

exports.index = function (request, response) {
    Rooms.find({}, function(err, allRooms){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("rooms.hbs", {
            rooms: allRooms
        });

        // response.sendfile("views/index.html", {
        //     rooms: allRooms
        //  });
    });
};