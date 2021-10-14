
function ListItem({list}){
    return (
        <div>
            {list.map((el)=>{
                return (
                    <h2 key={el.id} >{el.title}</h2>
                )
            })}
        </div>
    )
}

export {ListItem}