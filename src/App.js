
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Cars from './components/cars';
import FulePricess from './components/fuleprices';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notfound';
import NavBar from './components/navbar';
import React from 'react';
import CarForm from './components/carForm';
import LoginForm from './components/loginForm';

function App() {
  return (
    <React.Fragment>
    <NavBar></NavBar>
    <main className='container'>
      <Switch>
          <Route path="/cars/:id" component={CarForm}></Route>
          <Route path="/cars" component={Cars}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/login" component={LoginForm}></Route>    
          <Route path="/not-found" component={NotFound}></Route> 
          <Redirect from="/" exact to="/cars"></Redirect> 
        </Switch>
      {/* <Cars /> */}
      {/* <FulePricess /> */}
      
    </main>
    </React.Fragment>
  );
}

export default App;
