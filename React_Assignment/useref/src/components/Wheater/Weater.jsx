import React,{useEffect, useState} from 'react'
import axios from "axios"

export const WeatherReport = () => {
const [state,setState]=useState({
    query:"",
    data:[]
});
const [isLoading,setLoading]=useState(false)

useEffect(()=>{
 setLoading(true)
 axios({
     method:"get",
     baseURL:" https://apisetu.gov.in/public/marketplace/api/cowin",
     url:"/current.json",
     params:{
         q:state.query|| "Uttar Pradesh",
         key:" ef9aca0aacb345d6aa6111639212010"
     }

 })
 
 .then((res)=>console.log(res.data))
 .catch((err)=>console.log(err))
 .finally(()=>setLoading(false))

},[state.query])


    return (
        <div>
            <input type="text" placeholder="Enter City" value={state.query} onChange={(e)=>{
                setState({
                    ...state,query:e.target.value,
                })
            }}/>
{state.data.location && (
    <div>
        <h1>{state.data.location.name}</h1>
        <img src={state.data.current.condition.icon} alt="weather"/>
    </div>
)}

        </div>
    )
}
