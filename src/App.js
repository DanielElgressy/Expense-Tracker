import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Transactions from './components/Transactions';
// import Transaction from './components/Transaction';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Operations from './components/Operations';



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

  showBalance() {
    const dataArr = this.state.data
    let balance = 0
    for (let i = 0; i < dataArr.length; i++) {
      balance += dataArr[i].amount
    }
    return balance.toLocaleString()
  }

  changeDialogValue = () =>{
    const currentValue = this.state.dialogBox
    let opposite = !currentValue 
    this.setState({
      dialogBox : opposite
    })    
  }

  removeTransaction = transID => {
    let newData = [...this.state.data]
    const transaction = newData.findIndex(t => t.id === transID)
    newData.splice(transaction,1)
    this.setState({
      data : newData
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

     if (balance < 500 & trans.amount < 0 ) {   //גם פחות מהרף שאני מציב וגם נלחץ על כפתור משיכה שמאופיין במינוס
       alert("you dont havee alot of money, calm down")
     } else {
      this.setState({
        data : newData
      } , () => {
        this.changeDialogValue()
      })
     }
   
    
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

            {/* <FormControl>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value="age"
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl> */}


            <div id="main-links">
                <Button variant="contained" color="primary" onClick={this.changeDialogValue}>
                  Operations
                </Button>
            </div>

          </div>


          <div className="app">

            <Paper className="root">
              <Table className="table" aria-label="simple table">
                <TableHead className="tHeader">
                  <TableRow >
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Create Date</TableCell>
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Amount ($)</TableCell>
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Category</TableCell>
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>Vendor</TableCell>
                    <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight}}>action</TableCell>
                  </TableRow>
                </TableHead>
                <Route path="/"  exact render={() => <Transactions state={state}  removeTransaction={this.removeTransaction}/>} />
              </Table>
            </Paper>

            <Operations state={state} addTransaction={this.addTransaction} changeDialogValue={this.changeDialogValue} />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;