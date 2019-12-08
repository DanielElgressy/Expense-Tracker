import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Group extends Component {


     removeTransaction = () => {
         const transactionID = this.props.transaction.id
         this.props.removeTransaction(transactionID)
    }

    render() { 

        const transaction = this.props.transaction
        const TableTextAlign = "center"

        return (
                <div >
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Catrgory1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>

                                <Paper className="root">
                                    <Table className="table" aria-label="simple table">
                                        <TableHead className="tHeader">
                                            <TableRow >
                                                <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>create date</TableCell>
                                                <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>amount ($)</TableCell>
                                                <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>category</TableCell>
                                                <TableCell align={TableTextAlign} style={{ fontWeight: TablefontWeight }}>vendor</TableCell>
                                             </TableRow>
                                        </TableHead>

                                        {/* <TableBody> */}
{/*                                             
                                            {state.data.map(
                                                t => <Transaction {...this.props} transaction={t} />
                                            )} */}
                                        {/* </TableBody> */}

                                    </Table>
                                </Paper>
                            </Typography>


                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                
                </div>
        )
    }
}

export default Group;