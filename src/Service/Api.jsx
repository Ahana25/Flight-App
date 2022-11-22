import axios from 'axios'

let url1="http://127.0.0.1:8000/users"
let url2="http://127.0.0.1:8000/flights"
let url3="http://127.0.0.1:8000/history"


let postData=async(users)=>
{
    return await axios.post(`${url1}/add`,users)
}

let getData=async()=>
{
    return await axios.get(url1)
}

let getFlights=async()=>
{
   return await axios.get(url2)
}


let getFlightBook=async(id)=>
{
    return await axios.get(`${url2}/${id}`)
}

let postHistory=async(val)=>
{
   return await axios.post(`${url3}/add`,val)
}

let getBooking=async()=>
{
    return await axios.get(url3)
}


let deleteFlight=async(id)=>
{
   return await axios.delete(`${url3}/${id}`)
}
export {postData,getData,getFlights,getFlightBook,postHistory,getBooking,deleteFlight}