import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { useHistory } from 'react-router'

let useStyles=makeStyles(
    {
        form:
        {
            width:"80%",
            margin:"130px 0 0 150px"
        },
        head:
        {
            fontFamily:"cursive",
            textAlign:"center",
            color:"yellow",
            margin:"30px"
        },
        btn:
        {
            margin:"40px 0 0 560px"
        }
    }
)

function Home() {
    let history=useHistory();

    let moveFlights=()=>
    {
        history.push('/all')
    }
    let[flight,setFlight]=useState(
        {
            date:"",
            checked:""
        }
    )

    let updateVal=(event)=>
    {
     setFlight({...flight,[event.target.name]:event.target.value}) 
    }
    let classes= useStyles();
    return (
        <div>
            <Typography variant="h4" className={classes.head}>Search Flights</Typography>
            <FormGroup  className={classes.form}>
            <FormControl>    
  <InputLabel htmlFor="my-travel"></InputLabel>
  <Input type="date" name="date" value={flight.date} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-type"></InputLabel>
  <FormControlLabel
        control={<Checkbox name="checked" value={flight.checked} onChange={updateVal}/>}
        label="International  Flights"
      />
       <FormControlLabel
        control={<Checkbox name="checked" value={flight.checked} onChange={updateVal}/>}
        label="National Flights"
      />
</FormControl>
</FormGroup>
<Button variant="contained" color="primary" className={classes.btn} onClick={moveFlights}>Search flights</Button>

        </div>
    )
}

export default Home
