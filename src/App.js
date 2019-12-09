import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import ControlPanel from './components/ControlPanel';
import axios from 'axios'



class App extends Component {
  constructor() {
    super()
    this.state = {
      data:
        []
      ,
      dialogBox: false
    }
  }

  findTransByCategory(category) {
    const dataArr = this.state.data
    const findTransaction = dataArr.find(c => c.category === category)
    console.log(findTransaction)
  }

  changeDialogValue = () => {
    const currentValue = this.state.dialogBox
    let opposite = !currentValue
    this.setState({
      dialogBox: opposite
    })
  }

  removeTransaction = async (transID) => {

    console.log(transID)
    await axios.delete(`http://localhost:3001/transaction/${transID}`)
    .then(console.log(transID))


    let transactions = await axios.get("http://localhost:3001/transactions")
    this.setState({
      data: transactions.data
    })

    // let newData = [...this.state.data]
    // const transaction = newData.findIndex(t => t.id === transID)
    // newData.splice(transaction, 1)
    // this.setState({
    //   data: newData
    // })
  }

  addTransaction = async (trans) => {
    console.log(trans)
    // let newData = [...this.state.data]
    // let newTrans = trans
    // newData.unshift(newTrans)


    // let balance = 0   //ירוץ על המערך לאחר הפעולה שביצעתי למשיכה או הפקדה
    // for (let i = 0; i < newData.length; i++) {
    //   balance += newData[i].amount
    // }

    // if (balance < 500 & trans.amount < 0) {   //גם פחות מהרף שאני מציב וגם נלחץ על כפתור משיכה שמאופיין במינוס
    //   alert("you dont have alot of money, calm down")
    // } else {

    await axios.post("http://localhost:3001/transaction", trans)
      .then((response) => { console.log(response.data) })

    
    let transactions = await axios.get("http://localhost:3001/transactions")
    this.setState({
      data: transactions.data
    }, this.changeDialogValue())
  }


  componentDidMount = async () => {

    let transactions = await axios.get("http://localhost:3001/transactions")
    this.setState({
      data: transactions.data
    } ) 

    this.showBalance()
    }

     showBalance = () => {
      let dataArr = [...this.state.data]
      let newBalance = 0
      dataArr.map( d => newBalance += d.amount )
      let formatedBalance = newBalance.toLocaleString()
      this.setState({
        balance: formatedBalance
      }) 
    }
   
  

  render() {
    const state = this.state;


    return (
      <Router>
        <div className="background">
          <div className="App-header">
            <h2>Expense Tracker</h2>
            <h4 id="h4">Bank Balance: ${this.state.balance}</h4>


            <div id="main-links">

              <Link to="/" style={{ textDecoration: 'none', paddingRight: "5px" }}>
                <Button variant="contained" color="primary" >
                  Main
              </Button>
              </Link>


              <Button variant="contained" color="primary" onClick={this.changeDialogValue}>
                Operations
              </Button>

              <Link to="/controlpanel" style={{ textDecoration: 'none', paddingLeft: "5px" }}>
                <Button variant="contained" color="primary" >
                  Statistics
              </Button>
              </Link>

            </div>

          </div>

          <div className="app">

            <Route path="/" exact render={() => <Transactions state={state} removeTransaction={this.removeTransaction} />} />
            <Route path="/" exact render={() => <Operations state={state} addTransaction={this.addTransaction} changeDialogValue={this.changeDialogValue} />} />
            <Route path="/controlpanel" exact render={() => <ControlPanel state={state} />} />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;