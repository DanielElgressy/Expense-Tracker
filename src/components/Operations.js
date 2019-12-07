// import React from 'react';
import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';





class Operations extends Component {


    handleClose () {
        console.log("close")
    }

    handleInput (e) {
        console.log(e.target.value)
    }
 
    render() {

        return (
            <Router>

                <Dialog open={true}  aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Adding a Transaction</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            please decribe transaction
                        </DialogContentText>
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
                            id="name"
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