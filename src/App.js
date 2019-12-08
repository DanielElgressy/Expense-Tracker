import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import ControlPanel from './components/ControlPanel';



class App extends Component {
  constructor() {
    super()
    this.state = {
      data:
        [
          { createDate: "01/01/2018", amount: 3200, vendor: "Elevation", category: "Salary", id: 1 },
          { createDate: "01/01/2018", amount: -7, vendor: "Runescape", category: "Entertainment", id: 2 },
          { createDate: "01/01/2018", amount: -20, vendor: "Subway", category: "Food", id: 3 },
          { createDate: "01/01/2018", amount: -98, vendor: "La Baguetterie", category: "Food", id: 4 }
        ]
      ,
      dialogBox: false
    }
  }
  
  findTransByCategory(category){
    const dataArr = this.state.data
    const findTransaction = dataArr.find(c => c.category === category)
    console.log(findTransaction)
  }

  showBalance() {
    const dataArr = this.state.data
    let balance = 0
    for (let i = 0; i < dataArr.length; i++) {
      balance += dataArr[i].amount
    }
    return balance.toLocaleString()
  }

  changeDialogValue = () => {
    const currentValue = this.state.dialogBox
    let opposite = !currentValue
    this.setState({
      dialogBox: opposite
    })
  }

  removeTransaction = transID => {
    let newData = [...this.state.data]
    const transaction = newData.findIndex(t => t.id === transID)
    newData.splice(transaction, 1)
    this.setState({
      data: newData
    })
  }

  addTransaction = (trans) => {
    let newData = [...this.state.data]
    let newTrans = trans
    newData.unshift(newTrans)


    let balance = 0   //ירוץ על המערך לאחר הפעולה שביצעתי למשיכה או הפקדה
    for (let i = 0; i < newData.length; i++) {
      balance += newData[i].amount
    }

    if (balance < 500 & trans.amount < 0) {   //גם פחות מהרף שאני מציב וגם נלחץ על כפתור משיכה שמאופיין במינוס
      alert("you dont have alot of money, calm down")
    } else {
      this.setState({
        data: newData
      }, () => {
        this.changeDialogValue()
      })
    }


  }

  render() {
    const state = this.state;


    return (
      <Router>
        <div className="background">
          <div className="App-header">
            <h2>Expense Tracker</h2>
            <h4 id="h4">Bank Balance: ${this.showBalance()}</h4>


            <div id="main-links">

            <Link to="/" style={{ textDecoration: 'none', paddingRight: "5px"}}>
              <Button variant="contained" color="primary" >
                Main
              </Button>
            </Link>


              <Button variant="contained" color="primary" onClick={this.changeDialogValue}>
                Operations
              </Button>

              <Link to="/controlpanel" style={{ textDecoration: 'none', paddingLeft: "5px"}}>
              <Button variant="contained" color="primary" >
                Statistics
              </Button>
            </Link>

            </div>

          </div>

          <div className="app">

            <Route path="/" exact render={() => <Transactions state={state} removeTransaction={this.removeTransaction} />} />
           <Route path="/" exact render={() => <Operations state={state} addTransaction={this.addTransaction} changeDialogValue={this.changeDialogValue} /> } />
            <Route path="/controlpanel"  exact render={() => <ControlPanel state={state} />} />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;