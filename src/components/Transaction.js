import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import '../styles/Landing.css'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';



class Transaction extends Component {


     removeTransaction = () => {
         const transactionID = this.props.transaction.id
         this.props.removeTransaction(transactionID)
    }

    render() { 

        const transaction = this.props.transaction
        const TableTextAlign = "center"

        return (
            <TableRow key={transaction.id}>
                <TableCell align={TableTextAlign}>{transaction.createDate}</TableCell>
                <TableCell style={{ color: (transaction.amount < 0) ? 'red' : 'none'}} align={TableTextAlign}>{transaction.amount}</TableCell>
                <TableCell align={TableTextAlign}>{transaction.category}</TableCell>
                <TableCell align={TableTextAlign}>{transaction.vendor}</TableCell>
                <TableCell align={TableTextAlign}>

                    <IconButton  aria-label="delete" onClick={this.removeTransaction}>
                        <DeleteIcon />
                    </IconButton>

                    {/* <div className="rent" name={m.id} onClick={this.changeRentStatus}>{m.isRented ? "-" : "+"}</div> */}

{/* 

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                     </Button> */}

                </TableCell>

            </TableRow>
        )

    }
}

export default Transaction;