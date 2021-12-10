import './App.css';
import {Routes,Route} from "react-router-dom"
import { Login } from './component/Login/Login';
import { Signup } from './component/Login/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
