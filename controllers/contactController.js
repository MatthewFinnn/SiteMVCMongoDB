// const NewsR = require("../models/news.js");

exports.index = function (request, response){
    response.render("contact.hbs");
};

// exports.index = function (request, response) {
//     NewsR.find({}, function(err, allNews){
  
//         if(err) {
//             console.log(err);
//             return response.sendStatus(400);
//         }
//         response.render("news.hbs", {
//             news: allNews
//         });

//         // response.sendfile("views/index.html", {
//         //     rooms: allRooms
//         //  });
//     });
// };