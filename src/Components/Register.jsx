import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

let useStyles= makeStyles(
    {
        form:
        {
            width:"90%",
            margin:"270px 0 0 60px"
        }
    }
)

function Register() {
    let classes=useStyles();
    return (
        <div>
        <FormGroup className={classes.form}>
            <FormControl>
  <InputLabel htmlFor="my-name">Name</InputLabel>
  <Input />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-username">Username</InputLabel>
  <Input  />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-mail">Email address</InputLabel>
  <Input  />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-pass">Password</InputLabel>
  <Input type="password" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-phone">Phone no</InputLabel>
  <Input />
</FormControl>
<Button variant="contained" color="secondary">Click to Register</Button>
</FormGroup>
<Typography>Already a registered user?
<a href="/">Login now</a>
</Typography>
        </div>
    )
}

export default Register
