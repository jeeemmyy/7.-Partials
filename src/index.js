const port = 3000
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
app.set("view engine", "hbs")


// Just add this for now | Pta nahi kiya kaam hai iska
// Per CSS wasn't being loaded because ye lines added nahi thi
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))


// Customizing views directory
const templatePath = path.join(__dirname, "../templates/views")
app.set("views", templatePath)


// Giving HBS path to Partials folder
const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)


// Routes
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

// Server Settings (DO NOT TOUCH)
app.listen(port, (err) => {
    if(!err){
        console.log(`Listening on port ${port}`)
    }
    else{
        console.log("Server could not be started")
    }
})