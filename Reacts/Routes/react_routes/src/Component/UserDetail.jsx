import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react'
import { useParams,Redirect } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';


const UserDetail = () => {
    const {id}=useParams();
    const {token}=useContext(AuthContext);

    const [users,setUsers]=useState([]);
    const [isLoading,setisLoading]=useState(true);


   useEffect(()=>{
       axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
        setUsers(res.data.data);
        setisLoading(false);
    })
   
   },[id])
if(!token){
     return <Redirect to="/login"></Redirect>
}
    return (
        
           isLoading?<h5>Loading</h5>:<div className="container">

            <div class="row">
                <div class="col-6">
                    <div class="row text-left">First Name : {users.first_name}</div>
                    <div class="row py-1">Last Name : {users.last_name}</div>
                    <div class="row py-1">Email : {users.email}</div>
                </div>
                <div class="col-6">
                    <img className="img-thumbnail" src={users.avatar} alt="avatar"/>
                </div>
            </div>

              
           </div>
       
    )
}

export default UserDetail
