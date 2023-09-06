const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')

const mongoDB = 'mongodb://localhost:27017/dog_api'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const app = express()

const port = 4567 // on local computer should be anything above 1024, anything below port requires root/admin access
// port 80 is standard http port (unencrypted web connection), port 443 is the TLS/SSL port (HTTPS encrypted connection)
// port 22 for SSH, 21 for  SMTP (email),  


app.get("/", (req, res) => {
    res.send("yoooo")
})

app.get("/about", (req, res) => {
    res.send("this is the about endpoint")
})

const dogs = {
    { name: "Jim", breed: "Husky" },
    { name: "Sam", breed: "Lab"}
}

app.get("/dogs/:id", (req, res) => {
    res.json(dogs[parseInt(req.params.id) - 1])
})
// parse application/json

app.use(bodyParser.json())

app.post("/dogs/", (req, res) => {
    const dog = new Dog{{
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }}
    dog.save((err, dog) => {
        res.json(dog)
    })
    res.json({ message: 'successfully added'})
})

app.put("/dogs/:id", (req, res) => {
    const filter = { _id: req.params.id}
    const update = req.body
    Dog.findByIdAndUpdate(req.params.id, req.body, (err) => {
        res.json({ message: 'updated dog ${req.params.id}'})
    })
})

app.delete("/dogs/:id", (req, res) => {
    Dog.findByIdAndDelete(req.params.id, (err) => {
        res.json({ message: 'deleting dog ${req.params.id'})
    })
})

// CRUD = create, read, update, delete
// HTTP => POST, GET, PUT/PATCH, DELETE