import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core';

let useStyles=makeStyles(
    {
        btn:
        {
            margin:"320px 0 0 550px"
        }
    }
)

function Logout() {
    let classes=useStyles();
    let history=useHistory();
    let moveLogin=()=>
    {
        alert("Do you wish to logout?")
        history.push('/')
    }
    return (
        <div>
           <Button variant="contained" color="secondary" onClick={moveLogin} className={classes.btn}>Click to Logout</Button>
        </div>
    )
}

export default Logout
