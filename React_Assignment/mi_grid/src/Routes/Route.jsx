import React from 'react'
import { Navbar } from '../component/Navbar'
import { Route,Switch } from 'react-router'
import Home from '../component/Home'
import { About } from '../component/About'
import { Contact } from '../component/Contact'
import { Products } from '../component/Products'
import { SinglePage } from '../component/SinglePage'
import { Login } from '../component/Login'
import { PrivateRoute } from './PrivateRoute'
import { Logout } from '../component/Logout'


export const Router = () => {
    return (
        <>
            <Route  path="/">
            <Navbar/>
          
            </Route>
            <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
           
            <Route  path="/home">
            <Home/>
            </Route>
            <Route exact path="/about">
            <About/>
            </Route>
            <Route exact path="/contact">
            <Contact/>
            </Route>
            <Route exact path="/login">
            <Login/>
            </Route>
            <Route exact path="/logout">
            <Logout/>
            </Route>
           
            
            <PrivateRoute exact  path="/product" component={Products}>
            <Products/>
            </PrivateRoute>

            <PrivateRoute  path="/product/:productid" render={(props)=><SinglePage {...props}/>}/>

            </Switch>
            
        </>
    )
}


