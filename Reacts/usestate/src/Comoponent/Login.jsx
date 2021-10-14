import React,{useState} from 'react'

export const Login = () => {


    const initData={
        username:"",
        password:""
    }
    const [loginData,setData]=useState(initData)
  const   handleChange=(e)=>{
        const [name,value]=e.target
        setData({
            
        })
    }

   
    return (
        <div>
            <input type="text" placeholder="username" value={loginData.username} onChange={handleChange}/>
            <input type="text" placeholder="password" onChange={handleChange}/>
            <input type="submit" />
        </div>
    )
}


