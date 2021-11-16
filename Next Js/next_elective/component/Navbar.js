import style from "../styles/Home.module.css"
import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className={style.navbar}>
            
                <ul>
                    <li><Link href="/">Home Page</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
