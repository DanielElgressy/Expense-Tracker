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

  showBalance = () => {
    let dataArr = [...this.state.data]
    let newBalance = 0
    dataArr.map( d => newBalance += d.amount )
    let formatedBalance = newBalance.toLocaleString()
    return formatedBalance
  }


  changeDialogValue = () => {
    const currentValue = this.state.dialogBox
    let opposite = !currentValue
    this.setState({
      dialogBox: opposite
    })
  }


  componentDidMount = async () => {
    let transactions = await axios.get("http://localhost:3001/transactions")
    this.state.data = transactions.data
    this.setState({   
      data: transactions.data
    }) 
    }



  removeTransaction = async (transID) => {

    console.log(transID)
    await axios.delete(`http://localhost:3001/transaction/${transID}`)


    let transactions = await axios.get("http://localhost:3001/transactions")
    this.setState({
      data: transactions.data
    })
  }

  addTransaction = async (trans) => {
    console.log(trans)
    
     await axios.post("http://localhost:3001/transaction", trans)
    
    let transactions = await axios.get("http://localhost:3001/transactions")
    this.setState({
      data: transactions.data
    }, this.changeDialogValue())

  }

  
  findTransByCategory(category) {
    const dataArr = this.state.data
    const findTransaction = dataArr.find(c => c.category === category)
    console.log(findTransaction)
  }

  render() {
    const state = this.state;


    return (
      <Router>
        <div className="background">
          <div className="App-header">
            <h2>expense Tracker</h2>
            <h4 id="h4" style={{ color: (this.showBalance() < 500) ? 'tomato' : 'white'}} >Bank Balance: ${this.showBalance()}</h4>


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
                  Stats
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