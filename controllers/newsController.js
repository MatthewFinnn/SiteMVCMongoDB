const NewsR = require("../models/news.js");

exports.addNews = function (request, response){
    response.render("createNews.hbs");
};

exports.getNews = function (request, response) {
    NewsR.find({}, function(err, allNews){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("news.hbs", {
            news: allNews
        });
    });
};

exports.postNews= function(request, response){
    if(!request.body) return response.sendStatus(400);
    const title = request.body.title;
    const comment = request.body.comment;
    const image = request.body.image;
    const news = new NewsR({title: title, comment: comment, image: image});
     
    news.save(function(err){
        if(err) return console.log(err);
        response.redirect("/news");
    });
};