import Navbar from "./navbar"
import { withRouter } from "next/router"
import style from "../style/style.module.css"

const About = (props) => {
    return (
        <div className={style.wrapper}>
        <Navbar/>
          
            <h1>Hello!  Welcome to About Page</h1>
        </div>
    )
}

export default  withRouter(About)
