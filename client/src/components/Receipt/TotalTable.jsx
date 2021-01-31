import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




export default function CustomPaginationActionsTable(props) {
  

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableBody>
          
            <TableRow >
              <TableCell  style={{ width: 20 }} align="left">
                Subtotal
              </TableCell>
              <TableCell style={{ width: 20 }} align="left">                
              </TableCell>
              <TableCell style={{ width: 20 }} align="left">
              {props.subTotal}
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell  style={{ width: 20 }} align="left">
                VAT
              </TableCell>
              <TableCell style={{ width: 20 }} align="left">
              {props.vatPercentage}%
              </TableCell>
              <TableCell style={{ width: 20 }} align="left">
                {props.subTotal*(props.vatPercentage/100)}
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell  style={{ width: 20 }} align="left">
                Total
              </TableCell>
              <TableCell style={{ width: 20 }} align="left">
              </TableCell>
              <TableCell style={{ width: 20 }} align="left">
              {props.subTotal+props.subTotal*(props.vatPercentage/100)}
              </TableCell>
            </TableRow>
          
        </TableBody>
        
      </Table>
    </TableContainer>
  );
}
