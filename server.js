const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
mongoose.connect('mongodb://localhost/ExpensesDB',{ useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema
const transactionSchema  = new Schema ({
    amount: Number,
    category: String,
    vendor: String
})

const Transaction =  mongoose.model("Transaction", transactionSchema )


// app.use(express.static(path.join(__dirname, 'src')))
// app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/things',async function(req,res){
//    const things = Thing.find({})
//    res.send(things)
// })


// app.post('/thing',async function(req,res){
//    const thing = new Thing(req.body)
//    await thing.save()
// })

     
// app.post('/thing',async function(req,res){
//    const thing = new Thing(req.body)
//    await thing.save()
// })


const port = 3001
app.listen(port, () => {
console.log('running on port ' + port)})