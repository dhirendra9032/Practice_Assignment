import { withRouter } from 'next/router'
import { useState,useEffect } from 'react'
import axios from "axios"
import style from "../../style/userStyle.module.css"

const user = (props) => {

  
    const [userData,setUserData]=useState([])
    useEffect( ()=>{
    
       axios.get(`https://reqres.in/api/users/${props.router.query.id}`)
       .then((res)=>setUserData(res.data.data))
       .catch((err)=>console.log(err))
    
       
        
    
    },[])
console.log(userData);
    return (
        <div className={style.mainContainer}>
           <div className={style.container}>
               <h1>First Name : {userData.first_name}</h1>
               <h1>Last Name : {userData.last_name}</h1>
               <h1>Email : {userData.email}</h1>
           </div>
           <div className={style.container}>
               <img src={userData.avatar} alt="profile"/>
           </div>
        </div>
    )
}

export default withRouter(user)
