import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'


import { getFlights } from '../Service/Api';
import { Link } from 'react-router-dom';

let useStyles= makeStyles(
    {
        table:
        {
           width:"90%",
           margin:"50px 0 0 30px"
        },
        head:
        { 
           background:"red"
        },
        cell:
        {
            fontSize:"15px",
            textAlign:"center",
            color:"white",
            fontFamily:"cursive"
        }

    }
)

function AllFlights() {
    let [flight,setFlight]= useState([])

    let getFlightsData=async()=>
    {
        let res= await getFlights();
        setFlight(res.data)

    }
    useEffect(()=>
    {
        getFlightsData();
    })

    let classes= useStyles();
    return (
        <div>
            <TableContainer >
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center" className={classes.cell}>Flight Name</TableCell>
            <TableCell align="center" className={classes.cell}>Seats Available</TableCell>
            <TableCell align="center" className={classes.cell}>Seats Booked</TableCell>
            <TableCell align="center" className={classes.cell}>To</TableCell>
            <TableCell align="center" className={classes.cell}>From</TableCell>
            <TableCell align="center" className={classes.cell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {flight.map((list)=>
          {
              return(
                <TableRow>
              <TableCell>
                {list._id}
              </TableCell>
              <TableCell align="center">{list.flightname}</TableCell>
              <TableCell align="center">{list.seatsavailable}</TableCell>
              <TableCell align="center">{list.seatsbooked}</TableCell>
              <TableCell align="center">{list.from}</TableCell>
              <TableCell align="center">{list.to}</TableCell>
              <TableCell align="center"> <Button variant="contained" color="primary" component={Link} to={`/add/${list._id}`}>Book Flight</Button></TableCell>
            </TableRow>
              )
          })}

        </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default AllFlights
