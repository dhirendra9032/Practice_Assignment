import React,{useState} from 'react'



export const InputItem = ({item}) => {
    const [isToggle,setToggle]=useState(false)
   const handleClick=()=>{
        setToggle(isToggle?!isToggle:isToggle);
        console.log(isToggle);
   }
   

    return (
        <div className={isToggle?"outputBox isToggle":"outputBox"}>
            <h1>{item.title}</h1>
            <span onClick={()=>handleClick}></span>
        </div>
    )
}
