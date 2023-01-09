const express = require("express");
const hbs = require("hbs")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const routes = require('./routes/main')
const Detail = require("./models/detail");
const detail = require("./models/detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const service = require("./models/Service");

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static', express.static("public"))
app.use('', routes)


app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("db connected")

    Service.create([{
icon: 'fa-brands fa-accusoft',
    title: ' Provide Best Courses',
    description: ' We provides Courses that helps our student in learning and in placement',
    linkText: 'https://www.google.com',
    link: 'Check',
     }, {
    icon: 'fa-brands fa-affiliatetheme ',
     title: ' Learn Projects',
     description: ' We provides Courses that helps our student in learning and in placement',
    linkText: 'https://www.facebook.com',
     link: 'Learn',
    }, {
     icon: 'fa-brands fa-adn',
     title: '  Query',
      description: 'For any Query. click here ',
     linkText: 'vedio',
     link: 'https://www.youtube.com',
    }, ])
     Slider.create([{
             title: 'Become a Coder',
             subTitle: 'If you’re thinking about getting into coding, you probably already know this. You probably also know that coders are in high demand across the country and are excited to take the next step',
             imageUrl: "/static/images/s1.jpg"
         },
         {
             title: ' Learn Any Programming Language in easy manner',
             subTitle: ' Whether you want to develop a mobile application, get certification for programming knowledge, or learn new skills, you need to learn the right programming language',
             imageUrl: "/static/images/s2.jpg"
         },
         {
             title: 'How to Start',
             subTitle: 'Figure out why you want to learn to code ,choose which coding language you want to learn firstTake online courses watch video tutorials read books and ebooks use tools that make learning to code easier check out how other people code',
             imageUrl: "/static/images/s3.jpg"
         },
     ])

     Detail.create({
         brandName: "AYIS Soultions",
         brandIconUrl: "https://cdn.vectorstock.com/i/1000x1000/49/95/as-logo-monogram-shield-shape-with-crown-design-vector-32694995.webp",
         links: [{
                 label: "Home",
                 url: "/"
             },
             {
                 label: "Services",
                 url: "/services"
             },
             {
                 label: "gallery",
                 url: "/gallery"
             },
             {
                label: "About",
                url: "/about"
             },
             {
                 label: "Contact us",
                 url: "/contact-us"
            },

         ]
     })

})

app.listen(process.env.PORT | 5544, () => {
    console.log("server started");
})