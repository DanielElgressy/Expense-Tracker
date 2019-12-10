import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Moment from 'react-moment'


class Transaction extends Component {


     removeTransaction = () => {
         const transactionID = this.props.transaction._id
         console.log(transactionID)
         this.props.removeTransaction(transactionID)
    }

    render() { 

        const transaction = this.props.transaction
        const TableTextAlign = "center"

        return (
            <TableRow key={transaction.id}>
                <TableCell align={TableTextAlign}>
                    <Moment format="YYYY/MM/DD" >
                        {transaction.date}
                        </Moment>
                   
                    </TableCell>
                <TableCell style={{ color: (transaction.amount < 0) ? 'red' : 'green'}} align={TableTextAlign}>{transaction.amount}</TableCell>
                <TableCell align={TableTextAlign}>{transaction.category}</TableCell>
                <TableCell align={TableTextAlign}>{transaction.vendor}</TableCell>
                <TableCell align={TableTextAlign}>

                    <IconButton  aria-label="delete" onClick={this.removeTransaction}>
                        <DeleteIcon />
                    </IconButton>

                </TableCell>

            </TableRow>
        )

    }
}

export default Transaction;