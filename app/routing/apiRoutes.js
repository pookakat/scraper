var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function(app){
    app.get('/api/articles', (req, res, next)=>{
        axios.get("https://thehorse.com/news/").then(function(response){
            var $ = cheerio.load(response.data);
            res.send($('.post-title').text());
        })
    });
}