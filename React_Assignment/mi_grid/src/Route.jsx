import React from 'react'
import { Navbar } from './component/Navbar'
import { Route } from 'react-router'
import Home from './component/Home'
import { About } from './component/About'
import { Contact } from './component/Contact'
import { Products } from './Products'
import { SinglePage } from './SinglePage'

export const Router = () => {
    return (
        <>
            <Route  path="/">
            <Navbar/>
            </Route>
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
            <Route exact  path="/product" component={Products}>
            <Products/>
            </Route>
            <Route  path="/product/:productid" render={(props)=><SinglePage {...props}/>}/>

               
            
        </>
    )
}


