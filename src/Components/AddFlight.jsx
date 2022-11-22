import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getFlightBook, postHistory } from '../Service/Api'
import { makeStyles } from '@material-ui/core'
import  {useSelector,useDispatch} from 'react-redux'
import { dec_Val, inc_Val } from '../Actions/action'

let useStyles=makeStyles(
    {
        form:
        {
            margin:"30px 0 0 3x0px",
            width:"100%"
        },
        btn:
        {
            margin:"40px 0 0 530px"
        },
        head:
        {
            color:"green",
            fontFamily:"cursive",
            textAlign:"center"
        }
    }
)

function AddFlight() {
  let myState=useSelector((state)=>state.changeVal)
  let dispatch= useDispatch();
    let history=useHistory();
    let classes= useStyles();
    let {id}=useParams();

    let getIdData= async()=>
    {
       let res= await getFlightBook(id);
       setVal(res.data)
    }

    useEffect(()=>
    {
        getIdData();
    },[])

    let [val,setVal]=useState(
        {
            id:"",
            flight:"",
            avail:"",
            book:"",
            from:"",
            to:"",
            mail:"",
            name:"",
            phone:"",
            date:"",
            seats:""
        }
    )

    let updateVal=(event)=>
    {
    setVal({...val,[event.target.name]:event.target.value})
    }

    let postUserData=async()=>
    {
      await postHistory(val);
    }
    let postBookingData=()=>
    {
        postUserData();
        history.push('/history')
    }

    return (
        <div>
        <Typography variant="h3" className={classes.head}>Book Flight</Typography>
        <FormGroup className={classes.form}>
           <FormControl>
  <InputLabel htmlFor="my-id">ID</InputLabel>
  <Input name="id" value={val._id}  onChange={updateVal} />

</FormControl>
<FormControl>
Flight Name<InputLabel htmlFor="my-flightname"></InputLabel>
  <Input name="flight" value={val.flightname}  onChange={updateVal} />

</FormControl>
<FormControl>
Seats Available<InputLabel htmlFor="my-seatsavailable"></InputLabel>
  <Input name="avail" value={val.seatsavailable}   onChange={updateVal} />

</FormControl>
<FormControl>
Seats Booked<InputLabel htmlFor="my-seatsbooked"></InputLabel>
  <Input name="book" value={val.seatsbooked}  onChange={updateVal}/>

</FormControl>
<FormControl>
From<InputLabel htmlFor="my-from"></InputLabel>
  <Input name="from" value={val.from} onChange={updateVal} />

</FormControl>
<FormControl>
To<InputLabel htmlFor="my-to"></InputLabel>
  <Input name="to" value={val.to}  onChange={updateVal}/>

</FormControl>
<FormControl>
Email address<InputLabel htmlFor="my-mail"></InputLabel>
  <Input name="mail" value={val.mail}  onChange={updateVal}/>

</FormControl>
<FormControl>
Name<InputLabel htmlFor="my-name"></InputLabel>
  <Input name="name" value={val.name}  onChange={updateVal}/>

</FormControl>
<FormControl>
Phone<InputLabel htmlFor="my-phone"></InputLabel>
  <Input name="phone" value={val.phone} onChange={updateVal} />

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-date"></InputLabel>
  <Input type="date" name="id" value={val.date} onChange={updateVal}/>

</FormControl>

<FormControl>
  <InputLabel htmlFor="my-seats"></InputLabel>
  <Button variant="contained" color="primary" onClick={()=>dispatch(inc_Val())}>Seats + </Button>
  <Input name="seats" value={myState} onChange={updateVal}/>
  <Button variant="contained" color="primary" onClick={()=>dispatch(dec_Val())}>Seats -</Button>
</FormControl>
</FormGroup>
<Button variant="contained" color="secondary" className={classes.btn} onClick={postBookingData}>Confirm Booking</Button>
        </div>
    )
}

export default AddFlight
