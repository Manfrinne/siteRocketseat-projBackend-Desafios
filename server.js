const express = require('express');
const nunjucks = require('nunjucks');

const videos = require('./data');

const server = express();

server.use(express.static('./public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: false,    
});

server.get("/courses", function(req, res) {
    return res.render("courses", {itens: videos});
})

server.get("/courses/:id", function(req, res) {

    const id = req.params.id;

    const course = videos.find(function(course) {
        return course.id == id;
    }); 
    if (!course) {
        return res.send("not-found");
    };

    return res.render("course", {item: course});
});

server.get("/", function(req, res) {

    const about = {
        infoText: "Aprenda a melhor stack do mercado. Trabalhamos com as melhores tecnologias em programação:",
        listTech: [
            {techName: "JavaScrip"},
            {techName: "JavaScrip ES6"},
            {techName: "NodeJS"},
            {techName: "ReactJS"},
            {techName: "React Native"}
        ],
        img_URL: "https://computerworld.com.br/wp-content/uploads/2019/11/IT-Trends-firma-parceria-com-Code-for-All.jpg",
        rocketName: "Rocketseat",
        links: [
            {name: "Facebook", url: "https://www.facebook.com/rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Twitter", url: "https://twitter.com/rocketseat"},
            {name: "GitHub", url: "https://github.com/Rocketseat"},
        ]
    };

    return res.render("about", {about});
});

server.use(function(req, res) {
    res.status(404).render("not-found");
}); 

server.listen(8080, function() {
    console.log("Hack the Planet!");
});