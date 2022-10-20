const  mongoose  = require('mongoose')
const express = require('express')
const bodyParser = require("body-parser")
const routes = require('./routes/api')

const port = 3001
require('dotenv').config()

const app = express()

mongoose.Promise = global.Promise
mongoose.connect( process.env.DB, {useNewUrlParser: true})
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log(err))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json())
app.use('/api', routes)


app.listen( port, () => {
    console.log(`server listening on ${port} `);
})

module.exports = app;