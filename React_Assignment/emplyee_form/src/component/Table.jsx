import React from 'react'

export const Table = ({ detail, handleAdd }) => {
    return (
        <div className="table">
        <h1>Employee Datail</h1>
        <div>
            <table key="a">
                <tr key="1">
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Marital Status</th>
                    <th>Skills</th>
                </tr>
                {
                    detail.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.fullname}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.department}</td>
                            <td>{item.salary}</td>
                            <td>{item.isMarried?"Married":"Not Married"}</td>
                            <td>{item.skillSet.map((el)=><p>{el}</p>)}</td>
                        </tr>
                    })
                }

            </table>
            </div>
                <button onClick={handleAdd}>Add More</button>
        </div>
    )
}
