import React from 'react'
import style from "./student.module.css"

const StudentDetail = ({data}) => {
    return (
        <div className={data.isSelected ? style.selected :style.unSelected}>
            <img src={data.avatar} alt=""/>
            <h1>{data.frist_name} {data.last_name}</h1>
            <h3>{data.email}</h3>
        </div>
    )
}

export default StudentDetail
