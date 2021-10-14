import {AuthContext} from "./context/AuthContext";
import {useContext} from "react"
import { Redirect, Route } from "react-router";

export const PrivateRoute=({children,exact,path,to})=>{
    const {token} =useContext(AuthContext);

    if(!token){
      return  <Redirect to={to}/>
    }

    return <Route exact={exact} path={path} >{children}</Route>
}