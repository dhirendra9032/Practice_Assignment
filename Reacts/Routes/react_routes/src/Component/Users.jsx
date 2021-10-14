import React,{useEffect, useState} from 'react'
import { Link, } from 'react-router-dom'
import axios from "axios"


const Users = () => {

    const [users,setUsers]=useState([]);
    const [isLoading,setisLoading]=useState(true)

    useEffect(()=>{
            axios.get("https://reqres.in/api/users").then((res)=>{
                console.log(res.data);
                setUsers(res.data.data);
                setisLoading(false)
            });
    },[])

    
    return (!isLoading?
        <div>
            <ul>
                {users.map((e)=>(<li key={e.id}><Link to={`/user/${e.id}`}> {e.first_name}</Link></li>))}
            </ul>
        </div>:<h1>Loading</h1>
    )
}

export default Users
