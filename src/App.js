import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
// import Transaction from './components/Transaction';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class App extends Component {
  constructor() {
    super()
    this.state = {
      data:
        [
          { amount: 3200, vendor: "Elevation", category: "Salary", id: 1 },
          { amount: -7, vendor: "Runescape", category: "Entertainment", id: 2 },
          { amount: -20, vendor: "Subway", category: "Food", id: 3 },
          { amount: -98, vendor: "La Baguetterie", category: "Food", id: 4 }
        ]
    }
  }

  showBalance() {
    const dataArr = this.state.data
    let balance = 0
    for (let i = 0; i < dataArr.length; i++) {
      balance += dataArr[i].amount
    }
    return balance.toLocaleString('en-US')
  }


  removeTransaction = transID => {
    let newData = [...this.state.data]
    const transaction = newData.findIndex(t => t.id === transID)
    newData.splice(transaction,1)
    this.setState({
      data : newData
    })
  }

  render() {
    const state = this.state;
    const TablefontWeight= 800
    const TableTextAlign = "center"
    
    return (
      <Router>
        <div className="background">
          <div className="App-header">
            <h2>Expense Tracker</h2>
            <h4 id="h4">Bank Balance: ${this.showBalance()}</h4>

            <FormControl>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value="age"
                // onChange={handleChange}
                // input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>


            <div id="main-links">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </Link>

              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Operations
                </Button>
              </Link>
            </div>

          </div>


          <div className="app">

            <Paper className="root">
              <Table className="table" aria-label="simple table">
                <TableHead className="tHeader">
                  <TableRow >

                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Amount</TableCell>
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Category</TableCell>
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Vendor</TableCell>
                  <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>action</TableCell>
                  </TableRow>
                </TableHead>
                <Route path="/" exact render={() => <Transactions state={state}  removeTransaction={this.removeTransaction}/>} />
                {/* <Route path="/" exact render={({ match }) => <Transactions match={match} state={state} removeTransaction={this.removeTransaction} />} /> */}
              </Table>
            </Paper>


          </div>

        </div>
      </Router>
    );
  }
}

export default App;