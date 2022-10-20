const express = require('express')
const router = express.Router()
const Dog = require('../models/dogs')
const Former = require('../models/formers')
const DogRequest = require('../models/dogRequests')
const app = require('..')

router.get('/dogs/', ( req, res, next ) => {
    Dog.find({})
    .then((data) => res.json(data))
    .catch(next)
})

router.post('/dogs/', (req, res, next) =>{
    req.body.src && req.body.dogName  && req.body.shortDescription  && req.body.gender  && req.body.age && req.body.size ?
    Dog.create(req.body)
        .then((data) => res.json(data))
        .catch(next) :
        res.json({error: 'this input is empty'})
})

router.delete('/dogs/:id', ( req, res, next ) => {
    Dog.findOneAndDelete({_id: req.params.id})
    .then((data) => res.json(data))
    .catch(next)
})

router.patch('/dogs/:id', ( req, res, next ) => {
    Dog.findOneAndUpdate({_id: req.params.id})
    .then((data) => res.json(data))
    .catch(next)
})


router.get('/dogRequests/', ( req, res, next ) => {
    DogRequest.find({})
    .then((data) => res.json(data))
    .catch(next)
})

router.post('/dogRequests/', (req, res, next) =>{
    req.body.fullName && req.body.email  && req.body.phone &&  req.body.gender  && req.body.age && req.body.size ?
    DogRequest.create(req.body)
        .then((data) => {

            res.json(data)
        })
        .catch(next) :
        res.json({error: 'this input is empty'})
})





module.exports = router