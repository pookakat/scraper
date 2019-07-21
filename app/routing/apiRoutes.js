var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models");

module.exports = function(app){
    app.get('/api/articles/scrape', (req, res, next)=>{
        axios.get("https://thehorse.com/news/").then(function(response){
            var $ = cheerio.load(response.data);
            
            $('.post-title').each(function(i, element){
                var result = {};
                result.title = $(element).children("a").text();
                result.link = $(element).children("a").attr("href");

            db.Article.create(result)
                .then(function(dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function(err) {
                    // If an error occurred, log it
                    console.log(err);
                });
            });
        })
    });
    app.get('/api/articles', (req, res, next) =>{
        db.Article.find({})
            .then((dbArticle) => {
                res.json(dbArticle);
            })
            .catch((err) => {
                res.json(err);
            });
    });
};