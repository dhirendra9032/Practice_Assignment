import React, { useState,useRef } from 'react'


const initData = {
    fullname: "",
    age: Number,
    address: "",
    salary: Number,
    isMarried: false,

}

const skillSet = ["HTML", "CSS", "Javascript", "React", "Redux"];

const EmployeeForm = () => {

    
    const [data, setData] = useState(initData);
    const imageRef=useRef()
    const [detail, setDetail] = useState([]);
    const [isSelected, setSelected] = useState(
        new Array(skillSet.length).fill(false)
    )

    const handleChangeSkill=(i)=>{
        const newselected=isSelected.map((item,index)=>(
            index===i?!item:item
        ))
        setSelected(newselected);
    const selecdSkill=[];
    newselected.forEach((item,index)=>{
        if(item){
            selecdSkill.push(skillSet[index]);
        }
    })
    console.log(selecdSkill);
        setData({...data,skillSet:selecdSkill})
    }
    

    const handleChange = (e) => {
        //   const  name=e.target.name;
        //   const value=e.target.value
        const { name, value, type, checked } = e.target;

        const newValue = type === "checkbox" ? checked:type==="file"?URL.createObjectURL.imageRef : value
        setData({ ...data, [name]: newValue })
        console.log(data[name])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetail([...detail, data])
        console.log(detail);
        setData(initData);
       
    }



    return (
        <>

        {
           
            <form onSubmit={handleSubmit} className="form-wrapper">
                <h2>Employee Registration</h2>

                <input
                    type="text"
                    placeholder="Enter Full Name"
                    name="fullname"
                    value={data.fullname}
                    onChange={handleChange}

                />
                <input
                    type="number"
                    placeholder="Enter Age"
                    name="age"
                    value={data.age}
                    onChange={handleChange}

                /> <input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}

                />
                <div>
                    <label >Choose Deparment</label>
                    <select name="" id="">

                        {["CS", "Mechanical", "Electrical", "Civil"].map((item, index) => {
                            return <option key={index}>{item}</option>
                        })}
                    </select>
                </div>
                <input
                    type="Number"
                    placeholder="Enter Salary"
                    name="salary"
                    value={data.salary}
                    onChange={handleChange}

                />
                <div>
                    <label >Marital Status</label>
                    <input type="checkbox" name="isMarried" onChange={handleChange} checked={data.isMarried} />
                </div>

                <div>
                    {skillSet.map((item, index) => {
                        return <span key={index}>
                            <input
                                type="checkbox"
                                checked={isSelected[index]}
                                onChange={()=>handleChangeSkill(index)}

                            />
                            <label>{item}</label></span>
                    })}
                </div>

                <input type="file" name="image" onChange={handleChange} ref={imageRef}/>


                { data.image && <img src={data.image} alt="logo"/>}

                <button>Submit</button>
            </ form >

                   
        }
            
        </>
    )
}

export default EmployeeForm
