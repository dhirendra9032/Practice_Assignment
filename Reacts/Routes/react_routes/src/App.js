
import { Switch,Route } from 'react-router';
import './App.css';
import { Login } from './Component/Login';
import Navbar from "./Component/navbar";
import UserDetail from './Component/UserDetail';
import Users from './Component/Users';
import { PrivateRoute } from './Component/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      
      <Switch>
      <Route exact path="/home">Welcome! You are on Home Page </Route>
      <Route path="/about">Welcome! You are on About Page </Route>
      <Route path="/contact">Welcome! You are on Contact Page </Route>
      <PrivateRoute exact path="/user"><Users/></PrivateRoute>
      <Route exact path="/login"><Login/></Route>
      <PrivateRoute  path="/user/:id" to="/login"><UserDetail/></PrivateRoute>
     
      <Route >Oops! Page not Found</Route>
      </Switch>
     
    </div>
  );
}

export default App;
