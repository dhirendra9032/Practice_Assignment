import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

export const Products = () => {


    const [p_data,setData]=useState([]);
    const [loading,setLoading]=useState(false)


useEffect(()=>{
    setLoading(true)
    axios({
        method:"get",
        url:'https://fakestoreapi.com/products'
    })
     .then(res=> setData(res.data))
     .catch((err)=>console.log(err))
},[])
      
console.log(p_data)

    return (
        <div className="grid">
    {
                p_data.map((item, index) =>{
                    return <div key={index}>
                   
                    <img src={item.image} alt="image"/>
                    <Link  to={`/product/${item.id}`}>
                        <h3>Product Name: {item.title}</h3>
                    </Link>
                        <h4>Price {item.price}</h4>
                    </div>
                })
            }
        </div>
    )
}
