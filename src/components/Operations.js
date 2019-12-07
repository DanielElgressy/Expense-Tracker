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

            amount: "", vendor: "", category: "", id: ""

        }
        this.handleClose = this.handleClose.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);

    }

    sendAllInputs = () => {
        const fullDate    = new Date()
        const getYear     = fullDate.getFullYear()
        const getmonth    = fullDate.getMonth() + 1
        const getDay      = fullDate.getDay() + 1
        const getDate     = getDay + "/" + getmonth +"/" + getYear
        const getHours    = fullDate.getHours()
        const getMinutes  = fullDate.getMinutes()
        const getTime     = getHours + ":" + getMinutes
        const currentDate = getDate +" " + getTime

        // let sendToSchema = {}
        let randomID = Math.floor(Math.random() * 100) + 1
        let transCreateDate = currentDate

        this.setState({
            createDate: transCreateDate,
            id: randomID
        }, () => {
            let newTranstation = { ...this.state }
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
        this.sendAllInputs()
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
                        <TextField onChange={this.handleVendorInput} style={{ margin: "10px" }}
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