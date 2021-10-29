import Link from "next/Link"
import style from "../style/style.module.css"
import { withRouter } from "next/router"

 const Navbar = (props) => {


    const navLinks=[{
        to:"Home",
        path:"/"
    },
    {
        to:"About",
        path:"/about"
    },
    {
        to:"Contact",
        path:"/contact"
    },
    {
        to:"Users",
        path:"/users"
    },
]



    return (
        <div className={style.navbar}>
            <h1>Next Js</h1>
          
            <ul>
              
                  
                 {navLinks.map((item,index)=>{
                     return  <li key={index}><Link className={style.link}  href={item.path}>{item.to}</Link></li>
                 })}
             
            </ul>
        </div>
    )
}

export default withRouter(Navbar)