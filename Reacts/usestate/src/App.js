import React,{useState} from "react"
import './App.css';

function App() {

const [switchPage,setSwitchPage]=useState(false)

const handleSwitch=()=>{
  setSwitchPage()
}

  return (
    <div className="App">
{/*    
     {studentData.map((eachStData)=>{
       return <StudentDetail data={eachStData}/>
     })} */}

     {/* <Todo/> */}



     <button>Swicth</button>

    
     
    </div>
  );
}

export default App;
