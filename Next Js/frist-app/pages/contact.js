import {withRouter} from "next/router"
import Navbar from "./navbar"
import style from "../style/style.module.css"

 const Contact = (props) => {
     console.log(props)
    return (
        <div className={style.wrapper}>
        <Navbar/>
        <h1>Hello!  Welcome to Contact Page</h1>
           
        </div>
    )
}

export default withRouter(Contact)