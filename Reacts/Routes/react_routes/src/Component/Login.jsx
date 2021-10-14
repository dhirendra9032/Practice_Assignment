import axios from 'axios';
import React,{useContext, useState} from 'react'
import { AuthContext,  } from './Context/AuthContext';
import "./style1.css"

const Login = () => {

    const [formData,setFormData]=useState({});
    const {handletokenChange}=useContext(AuthContext)

   const handleChange=(e)=>{
        const {name,value}=e.target;    
     setFormData({...formData,[name]:value});
    }

    return (
        <div className="container">
            <div className="container box">
              <h2>Login</h2>
             <input onChange={ handleChange} type="text" className="form-control " name="email" placeholder="email"  />
             <input onChange={ handleChange} type="password" className="form-control " name="password" placeholder="password"  />
             <button className="btn btn-success"
              onClick={()=>{
                  console.log(formData)
                  axios.post("https://reqres.in/api/login",formData).then((res)=>{
                    console.log(res);
                    handletokenChange(res.data.token)                

                  })
                  .catch(console.error)
                  .catch((err)=>console.error(err))
              }}
             >Login</button>
             </div>
        </div>
    )
}

export {Login}
