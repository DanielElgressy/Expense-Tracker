import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'react-moment'


class Group extends Component {


    render() { 

        const transaction = this.props.transaction
        const TableTextAlign = "center"

        return (
            <TableRow  key={transaction.id}>
                <TableCell align={TableTextAlign}>
                    <Moment format="YYYY/MM/DD" >
                   {transaction.date}
                   </Moment>
                    </TableCell>
                <TableCell style={{ color: (transaction.amount < 0) ? 'red' : 'none'}} align={TableTextAlign}>{transaction.amount}</TableCell>
                <TableCell align={TableTextAlign}>{transaction.category}</TableCell>
                <TableCell align={TableTextAlign}>{transaction.vendor}</TableCell>
                <TableCell align={TableTextAlign}>

                </TableCell>

            </TableRow>
        )

    }
}

export default Group;


