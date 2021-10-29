import Link from "next/Link";
import Navbar from "./navbar"
import {withRouter} from "next/router"
import style from "../style/style.module.css"



const Index = (props) => {
   
   

    return (
        <div className={style.wrapper}>
     
            <Navbar/>
         
            <h1>Hello!  Welcome to Landing Page</h1>
           
        </div>
    )
}

export default withRouter(Index) 
