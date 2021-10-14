function ListItem({title,handleDelete,id}){

const handleDeleteFn=()=>{
    handleDelete(id);
}


    return (
      <div style={{border:"1px solid #fff",margin:"10px",padding:"10px"}}><h5>{title}</h5>
      <button onClick={handleDeleteFn}>Delete</button>
      
      </div>
    )
}

export default ListItem;