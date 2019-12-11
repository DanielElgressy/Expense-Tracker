const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
mongoose.connect('mongodb://localhost/ExpensesDB',{ useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema
const transactionSchema  = new Schema ({
    amount: Number,
    category: String,
    vendor: String,
    date: Date
})

const Transaction =  mongoose.model("Transaction", transactionSchema )



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.get('/transactions',async function(req,res){
   const transactions = await  Transaction.find({}).sort({date: -1})
    res.send(transactions)
})

app.post('/transaction',async function(req,res){ 
   const transaction = new Transaction(req.body)
   await transaction.save()
   res.send(transaction)
})

app.delete('/transaction/:transactionID', async function (req, res) {
    let transactionID = req.params.transactionID
    console.log(transactionID)
    await Transaction.findByIdAndRemove({
       _id: transactionID
    })
    console.log(transactionID)
    res.send(`Transaction: ${transactionID} deleted from DB`) 
})


const port = 3001
app.listen(port, () => {
console.log('running on port ' + port)})