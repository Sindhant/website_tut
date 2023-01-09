const express = require('express')
const Contact = require('../models/Contact')
const routes = express.Router()

const Detail = require("../models/detail")
const Service = require('../models/Service')
const Slider = require('../models/Slider')


routes.get("/", async(req, res) => {
    const details = await Detail.findOne({ "_id": "62bfcb89a8a6f3cd6c0d8619" })
    const slides = await Slider.find()
        //console.log(slides)
        // console.log(details)
    const services = await Service.find()
    res.render("index", {
        details: details,
        slides: slides,
        services: services,
    })
})
routes.get('/gallery', async(req, res) => {
    const details = await Detail.findOne({ "_id": "62bfcb89a8a6f3cd6c0d8619" })
    res.render("gallery", {
        details: details
    })
})

routes.post("/process-contact-from", async(request, response) => {
    console.log("Form is Submited")
    console.log(request.body)
    try {

        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    } catch (e) {
        console.log(e)
        response.redirect("/")
    }
})


module.exports = routes