import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { getData } from '../Service/Api'

let useStyles=makeStyles(
    {
        table:{
         
            width:"90%",
            margin:"120px 0 0 50px",
        },
        tablehead:
        {
            background:"blue",
        },
        cell:
        {
            fontFamily:"cursive",
            fontSize:"15px"
        }
    }
)

function Forum() {
    let [users,setUsers]=useState([]);

    let getUserData=async()=>
    {
         let res= await getData();
         setUsers(res.data)
    }

    useEffect(()=>
    {
        getUserData();
    },[])
    let classes=useStyles();
    return (
        <div>
            <TableContainer >
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell align="center" className={classes.cell}>ID</TableCell>
            <TableCell align="center" className={classes.cell}>Username</TableCell>
            <TableCell align="center"></TableCell>

          </TableRow>
        </TableHead>
<TableBody>
    {users.map((list)=>
    {
        return(
            <TableRow>
              <TableCell >
                {list._id}
              </TableCell>
              <TableCell align="center">{list.username}</TableCell>
              <TableCell align="center" ><Button variant="contained" color="secondary">Contact</Button></TableCell>
            </TableRow>
        )
    })}
</TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default Forum
