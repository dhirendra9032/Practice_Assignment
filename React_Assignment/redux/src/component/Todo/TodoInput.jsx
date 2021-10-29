import React from 'react'

const TodoInput = () => {

    const handleAdd=()=>{
        const payload={
            title:,
            
        }
    }
    const [task,settask]=useState()
    return (
        <div className="todoinput">
            <input type="text" placeholder="write domthing" 
                onChange={()=>settask(e.target.value)}
                value={task}
            />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default TodoInput
