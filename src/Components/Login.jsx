import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'
import { postData } from '../Service/Api'

let useStyles =makeStyles(
    {
        form:
        {
            width:"90%",
            margin:"270px 0 0 60px"
        }
    }
)

function Login() {
    let[users,setUsers]=useState(
        {
            username:""
        }
    );

    let updateVal=(event)=>
    {
      setUsers({...users,[event.target.name]:event.target.value})
    }

    let postAllData=async()=>
    {
       await postData(users);
    }

    let postUserData=()=>
    {
        postAllData();
        history.push('/home')

    }
    let history=useHistory();

    let classes= useStyles();
    return (
        <div>
        <FormGroup className={classes.form}>
            <FormControl>
  <InputLabel htmlFor="my-input">Username</InputLabel>
  <Input name='username' value={users.username} onChange={updateVal} />

</FormControl>
 <FormControl>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input type="password"/>
</FormControl>
<Button variant="contained" color="primary" onClick={postUserData}>Login Now</Button>
<Typography>New User?
<a href="/register">Register here</a>
</Typography>
</FormGroup>

        </div>
    )
}

export default Login
