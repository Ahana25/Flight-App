import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { deleteFlight, getBooking } from '../Service/Api'

let useStyles= makeStyles(
    {
        table:
        {
            margin:"20px",
            width:"90%"
        },
        head:
        {
            background:"red",
            color:"white",
        },
        cell:
        {
            fontFamily:"cursive",
            textAlign:"center",
            fontSize:"15px"
        }
    }
)

function History() {

    
    let [data,setData]= useState([])
    let getAllBooking=async()=>
    {
       let res= await getBooking();
       setData(res.data)
    }
    useEffect(()=>
    {
       getAllBooking();
    },[])
    let deleteBooking=async(id)=>
    {
      await deleteFlight(id);
      getAllBooking();
    }

    let classes= useStyles();
    return (
        <div>
        <TableContainer >
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.cell}>ID</TableCell>
            <TableCell align="center" className={classes.cell}>Flight Name</TableCell>
            <TableCell align="center" className={classes.cell}>From</TableCell>
            <TableCell align="center" className={classes.cell}>To</TableCell>

            <TableCell align="center" className={classes.cell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                data.map((list)=>
                {
                     return(
                        <TableRow >
              <TableCell >
                {list._id}
              </TableCell>
              <TableCell align="center">{list.flightname}</TableCell>
              <TableCell align="center">{list.from}</TableCell>
              <TableCell align="center">{list.to}</TableCell>
              <TableCell align="center"><Button variant="contained" color="primary" onClick={()=>deleteBooking(list._id)}>Cancel-Booking</Button></TableCell>
            </TableRow>
                     )
                })
            }
        </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default History
