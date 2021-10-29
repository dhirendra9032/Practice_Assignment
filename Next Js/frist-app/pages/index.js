import Link from "next/link";
import styles from "../style/home/style.module.css"

const index = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.navbar}>
            <h1>Next Js</h1>
            <ul>
                <li>Home</li>
                <li></li>
            </ul>
        </div>

            <Link href="/about">About Page</Link>
            <h1>Hello!  Welcome to Landing Page</h1>
        </div>
    )
}

export default index
