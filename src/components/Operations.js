// import React from 'react';
import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class Operations extends Component {

    constructor(){
        super();
        this.handleClose = this.handleClose.bind(this);
    }

    handleInput (e) {
        console.log(e.target.value)
        if (e.target.value < 0) {
            console.log("this is a minus number")
            alert("insert amount greater then zero") 
        }
    }


    handleClose() {
        console.log("close")
        console.log(this.props.state.dialogBox)
        // let currentStatus = [...this.props.state.dialogBox]
        // let opposite = false
        this.props.changeDialogValue()

        
    }


    render() {

     
        return (
            <Router>

                <Dialog open={this.props.state.dialogBox}  aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Adding a Transaction</DialogTitle>
                    <DialogContent>

                        <TextField onChange={this.handleInput} style={{ margin: "10px"}} 
                            autoFocus
                            margin="dense"
                            id="standard-required"
                            label="Amount"
                            type="number"

                        />
                             <TextField style={{ margin: "10px"}}
                            autoFocus
                            margin="dense"
                            id="standard-search"
                            label="Vendor"
                            type="search"
                            
                        />
                            <TextField style={{ margin: "10px"}}
                            autoFocus
                            margin="dense"
                            id="standard-search"
                            label="Category"
                            type="search"
                            
                        />
                               
                    </DialogContent>
                    <DialogActions>

                        <Link to="/" style={{ textDecoration: 'none' }} >
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                             </Button>
                        </Link>

                        <Button  color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </Router>
        );
    }
}


export default Operations;