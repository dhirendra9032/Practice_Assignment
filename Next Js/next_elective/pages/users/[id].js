import { useEffect,useState } from 'react'
import {withRouter} from "next/router"
import axios from "axios"


const users = (props) => {

    const [data,setData]=useState([])
   useEffect(() => {
       
    axios.get(`https://reqres.in/api/users/${props.id}`)
    .then((res)=>console.log(res.data))
   }, [])

    return (
        <div>
            
        </div>
    )
}

export default withRouter(users)
