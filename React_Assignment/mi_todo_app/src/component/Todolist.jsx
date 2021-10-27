import React from 'react'
import Todos from './Todos'

const Todolist = ({ todo, isToggled,handleDelete}) => {



    return (
        <div>
            {todo.map((item) => {
                return <Todos
                    key={item.id}
                    item={item}
                    id={item.id}
                    isToggle={item.isToggle}
                    isToggled={isToggled}
                    handleDelete={handleDelete}
                     />
            })}
        </div>
    )
}

export default Todolist
