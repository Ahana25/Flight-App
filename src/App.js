import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import AllFlights from './Components/AllFlights'
import AddFlight from './Components/AddFlight'
import MyFlight from './Components/MyFlight'
import Forum from './Components/Forum'
import Register from './Components/Register'
import Logout from './Components/Logout'
import History from './Components/History'
import Error from './Components/Error'




function App() {
  return (
    <div className="App">
     <Switch>
    <Route exact path='/' component={Login}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/all' component={AllFlights}/>
    <Route exact path='/add/:id' component={AddFlight}/>
    <Route exact path='/my' component={MyFlight}/>
    <Route exact path='/forum' component={Forum}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/logout' component={Logout}/>
    <Route exact path='/history' component={History}/>
    <Route component={Error}/>


     </Switch>
    </div>
  );
}

export default App;
