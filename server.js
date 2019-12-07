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
    vendor: String,
    date: Date,
    id: Number
})

const Transaction =  mongoose.model("Transaction", transactionSchema )


// app.use(express.static(path.join(__dirname, 'src')))
// app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/transactions',async function(req,res){
   const transactions =await  Transaction.find({})
   res.send(transactions)
})

     
app.post('/transaction',async function(req,res){
   const transaction = new Transaction(req.body)
   await transaction.save()
   res.end()
})

app.delete('/transaction/:transactionID', async function (req, res) {
    let transactionID = req.params.transactionID
       let deleteTransaction = await Transaction.remove({
        id: transactionID
    })
    res.send(`Transaction: ${transactionID} deleted from DB`) 
})



const port = 3001
app.listen(port, () => {
console.log('running on port ' + port)})