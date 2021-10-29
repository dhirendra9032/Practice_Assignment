import React from 'react'
import { useParams } from 'react-router';

export const SinglePage = (props) => {
    
    const {productid}=useParams()
    return (
        <div>
            <h1>Product Id is {productid}</h1>
        </div>
    )
}
