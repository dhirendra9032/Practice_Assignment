import { useState } from 'react';
export const  Form=()=>{

    let initValue={
        username:"",
        age:""
    }

    const [formData,setData]=useState(initValue);


    return (
        <div>
            <input type="text" placeholder="username" onChange={()=>{
                setData(())
            }}/><br/>
            <input type="number" placeholder="age"/><br/>
            Are you Married ?
            <input type="Checkbox"/><br/>
            <input type="submit" />

        </div>
    )
}