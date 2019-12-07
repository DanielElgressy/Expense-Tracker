import React, { Component } from 'react';
import Transaction from './Transaction';
// import { Link } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';

// import '../styles/Landing.css'

class Transactions extends Component {

    

    render() {
 
        const data = this.props.state.data
        

        return (
            <TableBody>
                    {data.map(
                        t => <Transaction {...this.props} transaction={t} /> 
                        )}
            </TableBody>
        )

        }
}
export default Transactions;