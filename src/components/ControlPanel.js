import React, { Component } from 'react';

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
import Group from './Grouping';




class ControlPanel extends Component {

    findCategory = () => {
        let transactions = this.props.state.data
        let categories = []
        for (let i = 0; i < transactions.length; i++) {
            if (!categories.includes(transactions[i].category)) {
                categories.push(transactions[i].category)
            }
        }
        // console.log(categories)
        return categories
    }

    sortByCategory = () => {
        let categories = this.findCategory()
        let transactions = this.props.state.data
        let result = []
        
        for (let i = 0; i < categories.length; i++) {
            let arr = transactions.filter(c => c.category === categories[i]).map(c => c)
            result.push(arr)
        }
        console.log(result)
        return result
    }

    amountPerCategory = () => {
        let listPerCategory = this.sortByCategory()
        console.log(listPerCategory)
        let newArry = []
        for( let i = 0; i < listPerCategory.length ; i++){
            let sum = 0
            listPerCategory[i].map( c =>  sum =+ c.amount)
            newArry.push(sum)
            console.log(sum)
            }
            return newArry
    }


    render() {

        const TablefontWeight= 800
        const TableTextAlign = "center"
        
        let categoriesList = this.findCategory()
        let sortedList = this.sortByCategory()
        console.log(categoriesList)
        console.log(sortedList)
        let amounting = this.amountPerCategory()
        console.log(amounting)

        return (
            
                <div >
                    {sortedList.map( (m, i) => <div className="group" key={i}> 
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography > {m[0].category} </Typography>
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

                                        <TableBody>
                                            
                                            {m.map(
                                                (t, i) => <Group {...this.props} transaction={t} key={i} />
                                            )}
                                        </TableBody>

                                    </Table>
                                </Paper>
                            </Typography>


                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                  
                 </div>   )}
                </div>


            
        );
    }
}


export default ControlPanel;



