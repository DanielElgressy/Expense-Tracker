import React, { Component } from 'react';
import Transaction from './Transaction';
// import { Link } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import '../styles/Landing.css'

class ControlPanel extends Component {



    render() {
        const TablefontWeight = 800
        const TableTextAlign = "center"
        const data = this.props.state.data
        console.log(this.props.state.data)

        return (


            <Paper className="root">
                <Table className="table" aria-label="simple table">
                    <TableHead className="tHeader">
                        <TableRow >
                            <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>Create Date</TableCell>
                            <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>Amount ($)</TableCell>
                            <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>Category</TableCell>
                            <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>Vendor</TableCell>
                            <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map(
                           (t, i) =>  <Transaction {...this.props} transaction={t} key={i}/>
                        )}
                    </TableBody>

                </Table>
            </Paper>



        )
    }
}



export default ControlPanel;