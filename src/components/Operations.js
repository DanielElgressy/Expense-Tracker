// import React from 'react';
import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



class Operations extends Component {

    constructor() {
        super();
        this.state = {

            amount: "", vendor: "", category: ""

        }
        this.handleClose = this.handleClose.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);

    }

    sendAllInputs = () => {


        let currentTime = new Date()
        console.log(currentTime)
        
        // const currentState = this.state

        // if(this.state.amount === Nan) {
            // console.log("amount is kloom")
        // }
        // for (let key in currentState){
        //     if(currentState[key]){
        //       console.log(currentState[key])
        //     }
         

        this.setState({
            date: currentTime,
        }, () => {
            let newTranstation = { ...this.state }
            console.log(newTranstation.date)
            this.props.addTransaction(newTranstation)
        })
    }


    handleAmountInput(e) {
        if (e.target.value < 0) {
            alert("please insert a positive number")
        } else {
            this.setState({
                amount: e.target.value
            })
        }
    }

    handleVendorInput = (e) => {
        console.log(e.target.name)
        this.setState({
            vendor: e.target.value
        })

    }

    handleCategoryInput = (e) => {
        this.setState({
            category: e.target.value
        })

    }

    handleDeposite = () => {
        alert("transaction added ")
        this.setState({
            amount : parseInt(this.state.amount)
        }, this.sendAllInputs)
    }

    handleWithdraw = () => {
        let minusizing = this.state.amount * -1
        console.log(this.props.state)
        this.setState({
            amount : minusizing
        }, () => {
            this.sendAllInputs()

        })
    }

    handleClose() {
        this.props.changeDialogValue()
    }


    render() {

        return (
            <Router>
                            
                <Dialog open={this.props.state.dialogBox} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Adding a Transaction</DialogTitle>
                    <DialogContent>

                        <TextField onChange={this.handleAmountInput} style={{ margin: "10px" }}
                            autoFocus
                            margin="dense"
                            id="standard-required"
                            label="Amount"
                            type="number"
                            

                        />
                        <TextField  onChange={this.handleVendorInput} style={{ margin: "10px" }}
                            autoFocus
                            margin="dense"
                            id="standard-search"
                            label="Vendor"
                            type="search"
                            

                        />
                        <TextField onChange={this.handleCategoryInput} style={{ margin: "10px" }}
                            autoFocus
                            margin="dense"
                            id="standard-search"
                            label="Category"
                            type="search"

                        />

                    </DialogContent>
                    <DialogActions>

                    <Button onClick={this.handleWithdraw} variant="contained" color="secondary">
                            Withdraw
                    </Button>


                    <Button onClick={this.handleDeposite} variant="contained" color="primary">
                            Deposit
                        </Button>


                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>



                    </DialogActions>
                </Dialog>
            </Router>
        );
    }
}


export default Operations;